import { Geist } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin", "latin-ext"],
});

export default function RootNotFound() {
  return (
    <html lang="tr">
      <body className={geistSans.className}>
        <p>Sayfa bulunamadı</p>
      </body>
    </html>
  );
}
