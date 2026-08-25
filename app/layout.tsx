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
  title: "Anti Dental Care | Dr. Adam & Dr. Eve - Noida's Premier Dental Hospital",
  description:
    "Experience world-class, pain-free dental care led by Dr. Adam (BDS, MDS - Implantology) and Dr. Eve (BDS, MDS - Orthodontics) in Noida Sector 62 & Sector 18. Digital smile design, painless laser dentistry, and dental implants.",
  keywords: [
    "Dentist in Noida",
    "Dr Adam Dentist",
    "Dr Eve Orthodontist",
    "Anti Dental Care Noida",
    "Dental Implants Noida",
    "Teeth Whitening Noida",
    "Invisalign Noida",
    "Root Canal Treatment Sector 62",
  ],
  authors: [{ name: "Dr. Adam & Dr. Eve" }],
  openGraph: {
    title: "Anti Dental Care | Dr. Adam & Dr. Eve - Noida",
    description: "Your Smile, Our Passion. Pain-free dental treatments, dental implants, smile makeovers, and orthodontic care in Noida.",
    type: "website",
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
