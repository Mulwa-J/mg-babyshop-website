export const metadata = {
  title: "MG Babyshop",
  description: "Premium Turkish cotton newborn clothing in Kenya"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
