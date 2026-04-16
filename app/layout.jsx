import "./globals.css";
import SiteLayout from "@/components/Corporate/SiteLayout";
import { company } from "@/data/companyProfile";

export const metadata = {
  title: company.name,
  description: company.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
