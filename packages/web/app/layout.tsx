import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Muhammad Faizan | AI/ML Engineer',
  description: 'Personal portfolio of Muhammad Faizan, an AI/ML Engineer and Creative Technologist.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Syne:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg text-text font-body selection:bg-accent1 selection:text-bg">
        {children}
      </body>
    </html>
  );
}
