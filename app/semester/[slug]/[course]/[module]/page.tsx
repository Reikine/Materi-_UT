import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

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

    const currentModuleNum = parseInt(module, 10);
    const prevModule = currentModuleNum > 1 ? currentModuleNum - 1 : null;
    const nextModuleNum = currentModuleNum + 1;

    const filePath = path.join(process.cwd(), 'content', slug, course, `modul-${module}.md`);
    const nextFilePath = path.join(process.cwd(), 'content', slug, course, `modul-${nextModuleNum}.md`);

    const hasNextModule = fs.existsSync(nextFilePath);

    let fileContent = `# Module ${module}\n\nMarkdown file for this module is not yet available or directory path needs adjustment.`;

    try {
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, 'utf8');
            const parsed = matter(fileData);
            fileContent = parsed.content;
        }
    } catch (error) {
        console.error("Failed to read markdown file:", error);
    }

    return (
        <div className="max-w-4xl mx-auto pt-10 pb-12 px-6">
            {/* Back Button */}
            <div className="mb-6">
                <Link
                    href={`/semester/${slug}/${course}`}
                    className="inline-flex items-center text-xs font-semibold text-slate-600 bg-white border border-slate-200/80 px-3.5 py-2 rounded-xl shadow-sm hover:bg-slate-50 transition-colors"
                >
                    &larr; Module List
                </Link>
            </div>

            {/* Header Modul */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-semibold text-red-600 bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full font-mono">
                        Module {module}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{slug.toUpperCase()}</span>
                </div>
                <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
                    Learning Module {module}
                </h1>
            </div>

            {/* Area Konten Render Markdown & LaTeX */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-sm max-w-none text-slate-700 space-y-5 leading-relaxed text-sm sm:text-base mb-8">
                <ReactMarkdown
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                        h1: (props) => <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-8 mb-4 pb-3 border-b border-slate-100 tracking-tight" {...props} />,
                        h2: (props) => <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3 tracking-tight" {...props} />,
                        h3: (props) => <h3 className="text-lg font-semibold text-slate-900 mt-5 mb-2" {...props} />,
                        ul: (props) => <ul className="list-disc pl-5 space-y-2 my-4 text-slate-600" {...props} />,
                        ol: (props) => <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-600" {...props} />,
                        li: (props) => <li className="pl-1" {...props} />,
                        strong: (props) => <strong className="font-semibold text-slate-900" {...props} />,
                        pre: ({ children, ...props }) => (
                            <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto my-4 shadow-inner [&>code]:bg-transparent [&>code]:border-0 [&>code]:p-0 [&>code]:text-inherit" {...props}>
                                {children}
                            </pre>
                        ),
                        code: ({ children, ...props }: { children?: React.ReactNode }) => (
                            <code className="bg-slate-100 text-slate-800 border border-slate-200 px-1.5 py-0.5 mx-0.5 rounded text-[0.85em] font-mono font-medium" {...props}>
                                {children}
                            </code>
                        ),
                        table: (props) => (
                            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200">
                                <table className="w-full text-left border-collapse text-xs sm:text-sm" {...props} />
                            </div>
                        ),
                        thead: (props) => <thead className="bg-slate-100/80 border-b border-slate-200 font-bold text-slate-900" {...props} />,
                        tbody: (props) => <tbody className="divide-y divide-slate-100" {...props} />,
                        tr: (props) => <tr className="hover:bg-slate-50/50 transition-colors" {...props} />,
                        th: (props) => <th className="p-3 font-semibold text-slate-800" {...props} />,
                        td: (props) => <td className="p-3 text-slate-600" {...props} />,
                    }}
                >
                    {fileContent}
                </ReactMarkdown>
            </div>

            {/* Bottom Navigation */}
            <div className="flex items-center justify-between gap-4 pt-2">
                {prevModule ? (
                    <Link
                        href={`/semester/${slug}/${course}/${prevModule}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200/80 px-4 py-2.5 rounded-xl shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
                    >
                        &larr; Previous Module
                    </Link>
                ) : (
                    <div />
                )}

                {hasNextModule ? (
                    <Link
                        href={`/semester/${slug}/${course}/${nextModuleNum}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200/80 px-4 py-2.5 rounded-xl shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
                    >
                        Next Module &rarr;
                    </Link>
                ) : null}
            </div>
        </div>
    );
}