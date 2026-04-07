import "./globals.css";

export const metadata = {
  title: "Interactive Wall Calendar",
  description: "Frontend Engineering Challenge - Interactive Calendar Component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}