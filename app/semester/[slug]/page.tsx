export const instant = false;
import Link from 'next/link';

const allSemestersData: Record<string, { title: string; desc: string; courses: { code: string; name: string; ssk: string; modulesCount: number; }[] }> = {
    "1": {
        title: "1st Semester",
        desc: "Introduction to academic foundations and core concepts of computer science and information systems.",
        courses: [
            { code: "MKWN4101", name: "Pendidikan Agama Islam", ssk: "3 SKS", modulesCount: 9 },
            { code: "MKWN4109", name: "Pendidikan Kewarganegaraan", ssk: "2 SKS", modulesCount: 9 },
            { code: "STMA4112", name: "Matematika Dasar", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4101", name: "Pengantar Sistem Informasi", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4102", name: "Algoritma dan Pemrograman", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4103", name: "Sistem Operasi", ssk: "3 SKS", modulesCount: 9 },
        ]
    },
    "2": {
        title: "2nd Semester",
        desc: "Data modeling development, data structures, statistics, and advanced mathematics.",
        courses: [
            { code: "MKDI4201", name: "Bahasa Inggris", ssk: "3 SKS", modulesCount: 9 },
            { code: "MKKI4201", name: "Pengantar Statistika", ssk: "3 SKS", modulesCount: 9 },
            { code: "MKWN4108", name: "Bahasa Indonesia", ssk: "2 SKS", modulesCount: 9 },
            { code: "MKWN4110", name: "Pancasila", ssk: "2 SKS", modulesCount: 9 },
            { code: "STMA4113", name: "Aljabar Linear Elementer", ssk: "2 SKS", modulesCount: 9 },
            { code: "STSI4104", name: "Struktur Data", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4105", name: "Basis Data", ssk: "3 SKS", modulesCount: 9 },
        ]
    },
    "3": {
        title: "3rd Semester",
        desc: "Exploration of desktop programming, computer networks, software engineering, and logic.",
        courses: [
            { code: "MKDI4202", name: "Belajar di Era Digital", ssk: "2 SKS", modulesCount: 9 },
            { code: "STIK4111", name: "Dasar Pemrograman R", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4106", name: "Logika Informatika", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4201", name: "Pemrograman Berbasis Desktop", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4202", name: "Rekayasa Perangkat Lunak", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4203", name: "Interaksi Manusia dan Komputer", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4205", name: "Jaringan Komputer", ssk: "3 SKS", modulesCount: 9 },
        ]
    },
    "4": {
        title: "4th Semester",
        desc: "Focus on system design, data analysis and visualization, web programming, and business process governance.",
        courses: [
            { code: "EMBS4207", name: "Perilaku Organisasi", ssk: "3 SKS", modulesCount: 9 },
            { code: "MKDI4203", name: "Kewirausahaan di Era Digital", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4204", name: "Analisis dan Visualisasi Data", ssk: "2 SKS", modulesCount: 6 },
            { code: "STSI4206", name: "Proses Bisnis", ssk: "2 SKS", modulesCount: 6 },
            { code: "STSI4207", name: "Sistem Informasi Manajemen", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4208", name: "Analisis dan Perancangan Sistem", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4209", name: "Pemrograman Berbasis Web", ssk: "3 SKS", modulesCount: 8 },
        ]
    },
    "5": {
        title: "5th Semester",
        desc: "Decision support systems development, server administration, mobile programming, and calculus.",
        courses: [
            { code: "EMBS4102", name: "Pengantar Bisnis", ssk: "3 SKS", modulesCount: 9 },
            { code: "FSAP4102", name: "Teori Organisasi", ssk: "3 SKS", modulesCount: 9 },
            { code: "FSSI4101", name: "Basic Reading", ssk: "2 SKS", modulesCount: 9 },
            { code: "STMA4111", name: "Kalkulus Diferensial", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4301", name: "Sistem Pendukung Keputusan (Pilihan)", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4302", name: "Administrasi Server (Pilihan)", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4303", name: "Pemrograman Berbasis Perangkat Bergerak", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4308", name: "Komunikasi Bisnis dan Teknis", ssk: "2 SKS", modulesCount: 9 },
        ]
    },
    "6": {
        title: "6th Semester",
        desc: "Enterprise architecture, data mining, professional ethics, IT infrastructure, and research methodology.",
        courses: [
            { code: "EMBS4101", name: "Manajemen", ssk: "4 SKS", modulesCount: 9 },
            { code: "MKKI4301", name: "Pemberdayaan Masyarakat (Pilihan)", ssk: "3 SKS", modulesCount: 9 },
            { code: "STPL4211", name: "Sistem Informasi Perencanaan (Pilihan)", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4304", name: "Dasar Infrastruktur TI", ssk: "2 SKS", modulesCount: 9 },
            { code: "STSI4305", name: "Etika Profesi", ssk: "2 SKS", modulesCount: 9 },
            { code: "STSI4306", name: "Arsitektur dan Perancangan Sistem Enterprise", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4307", name: "Data Mining (Pilihan)", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4309", name: "Administrasi Jaringan (Pilihan)", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4310", name: "Metodologi Penelitian", ssk: "3 SKS", modulesCount: 9 },
        ]
    },
    "7": {
        title: "7th Semester",
        desc: "Data science, IT governance, risk management, network security, data warehousing, and capstone project.",
        courses: [
            { code: "STDA4101", name: "Pengantar Sains Data", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4402", name: "Tata Kelola Teknologi Informasi", ssk: "2 SKS", modulesCount: 9 },
            { code: "STSI4403", name: "Manajemen Resiko dan Audit Sistem Informasi", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4404", name: "Keamanan Jaringan (Pilihan)", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4409", name: "Data Warehouse (Pilihan)", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4440", name: "Capstone Project (Pilihan)", ssk: "6 SKS", modulesCount: 9 },
        ]
    },
    "8": {
        title: "8th Semester",
        desc: "Accounting information systems, information system security, IT service management, e-business, and final thesis.",
        courses: [
            { code: "EACC4207", name: "Sistem Informasi Akuntansi", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4405", name: "Keamanan Sistem Informasi", ssk: "2 SKS", modulesCount: 9 },
            { code: "STSI4406", name: "Manajemen Proyek Sistem Informasi", ssk: "2 SKS", modulesCount: 9 },
            { code: "STSI4407", name: "Manajemen Layanan Teknologi Informasi", ssk: "3 SKS", modulesCount: 9 },
            { code: "STSI4408", name: "E-Bisnis", ssk: "3 SKS", modulesCount: 9 },
        ]
    },
};

export async function generateStaticParams() {
    return [
        { slug: 'smt-01' },
        { slug: 'smt-02' },
        { slug: 'smt-03' },
        { slug: 'smt-04' },
        { slug: 'smt-05' },
        { slug: 'smt-06' },
        { slug: 'smt-07' },
        { slug: 'smt-08' },
    ];
}

export default async function SemesterPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const key = slug.replace('smt-', '').replace(/^0+/, '');
    const data = allSemestersData[key] || allSemestersData["4"];

    return (
        <div className="max-w-4xl mx-auto pt-10 pb-12 px-6">
            <div className="mb-6">
                <Link href="/" className="inline-flex items-center text-xs font-semibold text-slate-600 bg-white border border-slate-200/80 px-3.5 py-2 rounded-xl shadow-sm hover:bg-slate-50 transition-colors">
                    &larr; Semesters
                </Link>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-semibold text-red-600 bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full">
                        Academic Phase
                    </span>
                </div>
                <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
                    {data.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-600">{data.desc}</p>
            </div>

            <div className="mb-4">
                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-red-600 rounded-full"></span>
                    Course List
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.courses?.map((course, idx) => (
                    <Link
                        key={idx}
                        href={`/semester/${slug}/${idx + 1}`}
                        className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between group"
                    >
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-mono text-xs font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded-md">
                                    {course.code}
                                </span>
                                <span className="text-xs font-semibold text-slate-500 font-mono">{course.ssk}</span>
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-red-600 transition-colors">
                                {course.name}
                            </h3>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                            <span className="text-slate-400 font-mono">{course.modulesCount} Modules</span>
                            <span className="font-medium text-red-600 group-hover:translate-x-1 transition-transform">
                                View Modules &rarr;
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}