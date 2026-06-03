import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'UGC Review Expert | Generate Verified Store Ratings & Grow Sales',
  description: 'Elevate your brand with authentic user-generated content and verified store ratings. Boost trust, conversions, and online presence on Amazon, TikTok, Walmart, Etsy & more.',
  openGraph: {
    "title": "UGC Review Expert | Generate Verified Store Ratings & Grow Sales",
    "description": "Elevate your brand with authentic user-generated content and verified store ratings. Boost trust, conversions, and online presence on Amazon, TikTok, Walmart, Etsy & more.",
    "url": "https://ugcreviewexpert.com",
    "siteName": "UGC Review Expert",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/closeup-african-american-woman-typing-laptop_482257-131626.jpg",
        "alt": "UGC Review Expert Dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "UGC Review Expert | Generate Verified Store Ratings & Grow Sales",
    "description": "Elevate your brand with authentic user-generated content and verified store ratings. Boost trust, conversions, and online presence on Amazon, TikTok, Walmart, Etsy & more.",
    "images": [
      "http://img.b2bpic.net/free-photo/closeup-african-american-woman-typing-laptop_482257-131626.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
