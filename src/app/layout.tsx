import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface CustomMetadata {
  title: string;
  description: string;
  icon: string;
}

export const metadata: CustomMetadata = {
  title: "Realtor-clone",
  description: "Generated by create next app",
  icon: "/favicon.ico",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href={metadata.icon} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
