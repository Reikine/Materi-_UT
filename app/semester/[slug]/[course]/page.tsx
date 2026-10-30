export const instant = false;
import Link from 'next/link';

type Course = {
    code: string;
    name: string;
    ssk: string;
    modulesCount: number;
    modules?: { title: string }[];
};

type SemesterData = {
    title: string;
    desc: string;
    courses: Course[];
};

const allSemestersData: Record<string, SemesterData> = {
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
            {
                code: "EMBS4207",
                name: "Perilaku Organisasi",
                ssk: "3 SKS",
                modulesCount: 9,
                modules: [
                    { title: "Organisasi dan Perilaku Organisasi" },
                    { title: "Dasar-Dasar Perilaku Individu" },
                    { title: "Persepsi dan Stress di Linkungan Kerja" },
                    { title: "Motivasi: Teori dan Penerapannya" },
                    { title: "Dinamika Kelompok" },
                    { title: "Hubungan Antarmanusia dalam Organisasi" },
                    { title: "Kepemimpinan dan Kekuasaan" },
                    { title: "Proses Organisasi: Struktur dan Budaya Organisasi" },
                    { title: "Perilaku Organisasi Lintas Budaya" },
                ]
            },
            {
                code: "MKDI4203",
                name: "Kewirausahaan di Era Digital",
                ssk: "3 SKS",
                modulesCount: 9,
                modules: [
                    { title: "Perkembangan Dunia Usaha di Era Digital" },
                    { title: "Memahami Peran dan Karakteristik Kunci Wirausaha" },
                    { title: "Proses Mengenal Potensi Diri" },
                    { title: "Proses Identifikasi Peluang Usaha di Era Digital)" },
                    { title: "Memahami Konsumen di Era Digital" },
                    { title: "Model Bisnis di Era Digital" },
                    { title: "Menerapkan Blue Ocean Strategy untuk Bisnis di Era Digital" },
                    { title: "Kepemimpinan dan Pembentukan Tim dalam Usaha di Era Digital" },
                    { title: "Pemasaran di Era Digital" },
                ]
            },
            {
                code: "STSI4204",
                name: "Analisis dan Visualisasi Data",
                ssk: "2 SKS",
                modulesCount: 6,
                modules: [
                    { title: "Prinsip Dasar Penyajian Data" },
                    { title: "Transformasi Data" },
                    { title: "Data Hilang dan Penanganannya" },
                    { title: "Regresi Sederhana" },
                    { title: "Visualisasi Data Teks" },
                    { title: "Visualisasi Data Interaktif" },
                ]
            },
            {
                code: "STSI4206",
                name: "Proses Bisnis",
                ssk: "2 SKS",
                modulesCount: 6,
                modules: [
                    { title: "Bisnis dan Proses Bisnis" },
                    { title: "Siklus Manajemen Proses" },
                    { title: "Metodologi Manajemen Proyek" },
                    { title: "Siklus Hidup Manajemen Proyek" },
                    { title: "Manajemen Proses untuk Pekerjaan Pengetahuan" },
                    { title: "Sistem Informasi Eksekutif (Executive Information System / EIS)" },
                ]
            },
            {
                code: "STSI4207",
                name: "Sistem Informasi Manajemen",
                ssk: "3 SKS",
                modulesCount: 9,
                modules: [
                    { title: "Sistem Informasi dalam Bisnis" },
                    { title: "Sistem Informasi untuk Bisnis: Kolaborasi dan Strategi" },
                    { title: "Permasalahan Sosial dan Etika pada Sistem Informasi" },
                    { title: "Infrastruktur Teknologi Informasi" },
                    { title: "Keamanan Sistem Informasi" },
                    { title: "Manajemen Data dan Pengetahuan" },
                    { title: "Implementasi Sistem Informasi dalam Bisnis" },
                    { title: "Peran Sistem Informasi dalam Pembuatan Keputusan Bisnis" },
                    { title: "Pengembangan dan Pengelolaan Sistem Informasi" },
                ]
            },
            {
                code: "STSI4208",
                name: "Analisis dan Perancangan Sistem",
                ssk: "3 SKS",
                modulesCount: 9,
                modules: [
                    { title: "Konsep Pengembangan Sistem" },
                    { title: "Perancangan Sistem" },
                    { title: "Analisis Sistem" },
                    { title: "Pemodelan Analisis dengan Pendekatan Terstruktur" },
                    { title: "Pemodelan Analisis dengan Pendekatan Berorientasi Objek" },
                    { title: "Pemodelan Proses Bisnis dan Struktural Sistem" },
                    { title: "Pemodelan Perilaku (Behavioral) Objek" },
                    { title: "Transisi dari Analisis Sistem ke Desain/Perancangan Sistem" },
                    { title: "Desain/Perancangan Sistem" },
                ]
            },
            {
                code: "STSI4209",
                name: "Pemrograman Berbasis Web",
                ssk: "3 SKS",
                modulesCount: 8,
                modules: [
                    { title: "Website dan HTML" },
                    { title: "CSS dan JavaScript" },
                    { title: "Product Requirement Document Sitta" },
                    { title: "Vue.js" },
                    { title: "Data Binding dan Pengolahannya" },
                    { title: "Watcher dan Reaktivitas Vue.js" },
                    { title: "Array, Filtering, dan Event Handling" },
                    { title: "Components, Canvas, dan Animasi" },
                ]
            },
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
    const params: { slug: string; course: string }[] = [];
    for (let s = 1; s <= 8; s++) {
        const semesterKey = String(s);
        const semData = allSemestersData[semesterKey];
        if (semData && semData.courses) {
            semData.courses.forEach((_, idx) => {
                params.push({ slug: `smt-0${s}`, course: String(idx + 1) });
            });
        }
    }
    return params;
}

export default async function CourseDetailPage({
    params
}: {
    params: Promise<{ slug: string; course: string }>
}) {
    const resolvedParams = await params;
    const { slug, course } = resolvedParams;

    const semesterKey = slug.replace('smt-', '').replace(/^0+/, '');
    const semData = allSemestersData[semesterKey] || allSemestersData["4"];

    const index = parseInt(course, 10) - 1;
    const courseItem = semData.courses[index] || semData.courses[0];

    const modules = courseItem.modules && courseItem.modules.length > 0
        ? courseItem.modules.map((mod, i) => ({
            moduleNumber: i + 1,
            title: mod.title
        }))
        : Array.from({ length: courseItem.modulesCount }, (_, i) => ({
            moduleNumber: i + 1,
            title: `Modul Pembelajaran ${i + 1}`,
        }));

    return (
        <div className="max-w-4xl mx-auto pt-10 pb-12 px-6">
            <div className="mb-6">
                <Link
                    href={`/semester/${slug}`}
                    className="inline-flex items-center text-xs font-semibold text-slate-600 bg-white border border-slate-200/80 px-3.5 py-2 rounded-xl shadow-sm hover:bg-slate-50 transition-colors"
                >
                    &larr; Course List
                </Link>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-semibold text-red-600 bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full font-mono">
                        {courseItem.code}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{courseItem.ssk} &bull; {semData.title}</span>
                </div>
                <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
                    {courseItem.name}
                </h1>
            </div>

            <div className="mb-4">
                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-red-600 rounded-full"></span>
                    Module List
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
                {modules.map((mod) => (
                    <div
                        key={mod.moduleNumber}
                        className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-sm hover:border-red-200 hover:shadow-md transition-all flex items-center justify-between gap-3 group"
                    >
                        {/* Kiri: Nomor + Judul + Micro Meta */}
                        <div className="flex items-center gap-3.5 min-w-0">
                            <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center font-mono text-xs font-bold text-red-600 shrink-0">
                                {String(mod.moduleNumber).padStart(2, '0')}
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-slate-900 text-sm truncate leading-snug group-hover:text-red-600 transition-colors">
                                    {mod.title}
                                </h3>
                                <p className="text-[11px] text-slate-400 font-mono mt-0.5 flex items-center gap-1.5">
                                    <span className="text-slate-500 font-sans">Notes in (.md) format </span>
                                </p>
                            </div>
                        </div>

                        {/* Kanan: Tombol Aksi */}
                        <Link
                            href={`/semester/${slug}/${course}/${mod.moduleNumber}`}
                            className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100 hover:bg-red-100 transition-colors shrink-0 whitespace-nowrap flex items-center gap-1"
                        >
                            <span>Read</span>
                            <span className="hidden sm:inline">Module</span>
                            <span>&rarr;</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}