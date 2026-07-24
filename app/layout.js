export const metadata = {
  title: "SethCloud",
  description: "Marketing. Systems. Momentum."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
