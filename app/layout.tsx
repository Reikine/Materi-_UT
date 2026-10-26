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
      <body className="bg-slate-50 dark:bg-[#0d1117] text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );

  <footer className="py-6 mt-auto text-center text-xs text-slate-400 border-t border-slate-200/80">
    Sistem Informasi &bull; Universitas Terbuka &copy; 2026 Reikine
  </footer>
}