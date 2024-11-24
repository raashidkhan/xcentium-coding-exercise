import localFont from "next/font/local";
import "../styles/globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mini Netflix",
  description:
    "A dynamic movie browsing application that allows users to explore a wide range of films, view detailed information, and enjoy a responsive design tailored for both desktop and mobile devices. Powered by the OMDb API, this app showcases popular movies and TV shows, providing an intuitive user experience with accessibility in mind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
