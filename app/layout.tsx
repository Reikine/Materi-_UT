import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata = {
  title: 'Lecture Notes - Universitas Terbuka - Rei',
  description: 'Catatan Materi Kuliah Sistem Informasi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* CSS KaTeX + Font CDN Resmi */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-slate-50 dark:bg-[#0d1117] text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}