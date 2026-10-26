import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export const instant = false;

export async function generateStaticParams() {
    return [
        { slug: 'smt-04', course: '1', module: '1' }
    ];
}

export default async function ModuleViewerPage({
    params
}: {
    params: Promise<{ slug: string; course: string; module: string }>
}) {
    const resolvedParams = await params;
    const { slug, course, module } = resolvedParams;

    const filePath = path.join(process.cwd(), 'content', slug, course, `modul-${module}.md`);

    let fileContent = `# Modul Pembelajaran ${module}\n\nFile markdown untuk modul ini belum tersedia atau path direktorinya belum disesuaikan.`;

    try {
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, 'utf8');
            const parsed = matter(fileData);
            fileContent = parsed.content;
        }
    } catch (error) {
        console.error("Gagal membaca file markdown:", error);
    }

    return (
        <div className="max-w-4xl mx-auto pt-10 pb-12 px-6">
            {/* Tombol Kembali */}
            <div className="mb-6">
                <Link
                    href={`/semester/${slug}/${course}`}
                    className="inline-flex items-center text-xs font-semibold text-slate-600 bg-white border border-slate-200/80 px-3.5 py-2 rounded-xl shadow-sm hover:bg-slate-50 transition-colors"
                >
                    &larr; Kembali ke Daftar Modul
                </Link>
            </div>

            {/* Header Modul */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-semibold text-red-600 bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full font-mono">
                        Modul {module}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Arsip Markdown (.md) &bull; {slug.toUpperCase()}</span>
                </div>
                <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
                    Modul Pembelajaran {module}
                </h1>
                <p className="text-xs sm:text-sm text-slate-600">
                    Menampilkan isi dokumen materi kuliah asli dari direktori penyimpanan lokal.
                </p>
            </div>

            {/* Area Konten Render Markdown & LaTeX */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-sm max-w-none text-slate-700 space-y-5 leading-relaxed text-sm sm:text-base">
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                        h1: (props) => <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-8 mb-4 pb-3 border-b border-slate-100 tracking-tight" {...props} />,
                        h2: (props) => <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3 tracking-tight" {...props} />,
                        h3: (props) => <h3 className="text-lg font-semibold text-slate-900 mt-5 mb-2" {...props} />,
                        ul: (props) => <ul className="list-disc pl-5 space-y-2 my-4 text-slate-600" {...props} />,
                        ol: (props) => <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-600" {...props} />,
                        li: (props) => <li className="pl-1" {...props} />,
                        strong: (props) => <strong className="font-semibold text-slate-900" {...props} />,
                        // Pindahkan styling block code langsung ke level tag <pre>
                        pre: ({ children, ...props }) => (
                            <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto my-4 shadow-inner" {...props}>
                                {children}
                            </pre>
                        ),
                        code: ({ inline, className, children, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode }) => {
                            if (inline) {
                                return (
                                    <code className="bg-slate-100 text-red-600 px-1.5 py-0.5 rounded text-xs font-mono border border-slate-200" {...props}>
                                        {children}
                                    </code>
                                );
                            }
                            return (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {fileContent}
                </ReactMarkdown>
            </div>
        </div>
    );
}