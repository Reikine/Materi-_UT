export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
            {/* Header */}
            <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <span className="font-bold tracking-wide text-slate-900 text-base">Lecture Notes</span>
                    </div>

                    <div className="text-xs font-semibold tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                        Rei
                    </div>
                </div>
            </header>

            {/* Konten Utama */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="py-8 text-center text-xs text-slate-400 border-t border-slate-200 mt-20">
                Indra Setyawan &copy; 2026 Reikine
            </footer>
        </div>
    );
}