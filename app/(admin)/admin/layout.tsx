import "./globals.css";
import Header from "@/app/(components)/admin/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-zinc-50 min-h-screen">
        <Header />
        <main className="mx-auto min-h-screen max-w-5xl px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
