import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "J.D. Dentals | Greater Noida's Premier Dental Clinic",
    template: "%s | J.D. Dentals Greater Noida",
  },
  description:
    "Experience world-class, pain-free dental care at J.D. Dentals in Greater Noida. Two convenient locations - Sky Plaza & Gaur City. Digital smile design, painless laser dentistry, and dental implants.",
  keywords: [
    "Dentist in Greater Noida",
    "J.D. Dentals",
    "Dental Implants Greater Noida",
    "Teeth Whitening Greater Noida",
    "Invisalign Greater Noida",
    "Root Canal Treatment Greater Noida",
    "Dental Clinic Greater Noida",
    "Orthodontist Greater Noida",
    "Sky Plaza Dental",
    "Gaur City Dental",
  ],
  authors: [{ name: "J.D. Dentals Clinical Team" }],
  openGraph: {
    title: "J.D. Dentals | Greater Noida's Premier Dental Clinic",
    description: "Your Smile, Our Passion. Pain-free dental treatments, dental implants, smile makeovers, and orthodontic care in Greater Noida.",
    type: "website",
    locale: "en_IN",
    siteName: "J.D. Dentals",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FBFDFC] text-[#101828] font-sans antialiased selection:bg-[#E6F5F4] selection:text-[#0D7A75]">
        {children}
      </body>
    </html>
  );
}
