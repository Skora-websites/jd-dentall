import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CLINIC_INFO } from "@/data/dentalData";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email service is not configured. Set SMTP_USER and SMTP_PASS in .env.local and restart the server.",
        },
        { status: 500 }
      );
    }

    const data = await req.json();
    const {
      bookingRef,
      name,
      phone,
      email,
      notes,
      doctor,
      service,
      price,
      clinic,
      address,
      date,
      slot,
    } = data ?? {};

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Patient name and phone number are required." },
        { status: 400 }
      );
    }

    const port = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const rows: Array<[string, string]> = [
      ["Booking Reference", bookingRef || "-"],
      ["Patient Name", String(name)],
      ["Phone", String(phone)],
      ["Email", email ? String(email) : "-"],
      ["Doctor", doctor ? String(doctor) : "-"],
      ["Treatment", service ? `${service}${price ? ` (${price})` : ""}` : "-"],
      ["Clinic", clinic ? String(clinic) : "-"],
      ["Address", address ? String(address) : "-"],
      ["Preferred Date", date ? String(date) : "-"],
      ["Preferred Time", slot ? String(slot) : "-"],
      ["Dental Concerns", notes ? String(notes) : "-"],
    ];

    const tableRows = rows
      .map(
        ([label, value]) =>
          `<tr>` +
          `<td style="padding:6px 12px;border:1px solid #e2e8f0;color:#475569;font-size:13px">${escapeHtml(label)}</td>` +
          `<td style="padding:6px 12px;border:1px solid #e2e8f0;font-size:13px;font-weight:600;color:#101828">${escapeHtml(value)}</td>` +
          `</tr>`
      )
      .join("");

    await transporter.sendMail({
      from: `"J.D. Dentals Website" <${smtpUser}>`,
      to: CLINIC_INFO.email,
      replyTo: email ? String(email) : undefined,
      subject: `New Appointment Request${bookingRef ? ` (${bookingRef})` : ""} - ${name}`,
      text: `New appointment request from the J.D. Dentals website:\n\n${rows
        .map(([label, value]) => `${label}: ${value}`)
        .join("\n")}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:560px">
        <h2 style="color:#00a896;margin-bottom:4px">New Appointment Request</h2>
        <p style="color:#64748b;font-size:13px;margin-top:0">Sent automatically from jddentals.com booking form</p>
        <table style="border-collapse:collapse">${tableRows}</table>
      </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Booking email failed:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send the booking email. Please try again or call the clinic." },
      { status: 500 }
    );
  }
}
