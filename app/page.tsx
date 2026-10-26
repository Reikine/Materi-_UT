import Link from 'next/link';

const semestersOverview = [
  { id: 1, title: "Semester 1", desc: "Pengantar fondasi akademik dan konsep dasar ilmu komputer serta sistem informasi.", ready: false },
  { id: 2, title: "Semester 2", desc: "PPengembangan pemodelan data, struktur data, statistika, dan matematika lanjutan.", ready: false },
  { id: 3, title: "Semester 3", desc: "Eksplorasi pemrograman berbasis desktop, jaringan komputer, rekayasa perangkat lunak, dan logika.", ready: false },
  { id: 4, title: "Semester 4", desc: "Fokus pada perancangan sistem, analisis dan visualisasi data, pemrograman web, serta tata kelola proses bisnis.", ready: true, code: "04" },
  { id: 5, title: "Semester 5", desc: "APengembangan sistem pendukung keputusan, administrasi server, mobile programming, dan kalkulus.", ready: false },
  { id: 6, title: "Semester 6", desc: "Arsitektur enterprise, data mining, etika profesi, infrastruktur TI, dan metodologi penelitian.", ready: false },
  { id: 7, title: "Semester 7", desc: "Sains data, tata kelola TI, manajemen resiko, keamanan jaringan, data warehouse, dan capstone project.", ready: false },
  { id: 8, title: "Semester 8", desc: "Sistem informasi akuntansi, keamanan sistem informasi, manajemen layanan TI, e-bisnis, dan tugas akhir.", ready: false },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto pt-10 pb-6 px-6 min-h-[calc(100vh-100px)] flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
            SISTEM INFORMASI
          </h2>
          <p className="text-sm text-slate-500">
            Catatan Rangkuman program studi Sistem Informasi.
          </p>
        </div>

        {/* Grid Kartu Semester */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semestersOverview.map((item) => {
            if (!item.ready) {
              return (
                <div key={item.id} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm opacity-60 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                        {String(item.id).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                        SEGERA HADIR
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-700 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                    <span>Belum Tersedia</span>
                    <span className="font-mono">Lecture notes</span>
                  </div>
                </div>
              );
            }

            return (
              <div key={item.id} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-xs font-bold text-red-600 bg-red-50 border border-red-100 px-2.5 py-1 rounded-md">
                      {item.code}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      AKTIF
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                  <Link href={`/semester/smt-04`} className="font-bold text-red-600 hover:text-red-700 transition-colors">
                    Akses Modul &rarr;
                  </Link>
                  <span className="font-mono text-slate-400">Lecture notes</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Kotak Catatan (Otomatis keposisikan di bawah mepet footer berkat flex justify-between) */}
      <div className="max-w-xl mx-auto mt-12 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center shadow-sm w-full">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          <strong className="text-slate-900 font-semibold">Catatan:</strong> Saat ini baru tersedia untuk Semester 4, semester lainnya akan ditambahkan secara bertahap.
        </p>
      </div>
    </div>
  );
}