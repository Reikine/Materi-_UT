import Link from 'next/link';

const semestersOverview = [
  { id: 1, title: "1st Semester", desc: "Introduction to academic foundations and core concepts of computer science and information systems.", ready: false },
  { id: 2, title: "2nd Semester", desc: "Data modeling development, data structures, statistics, and advanced mathematics.", ready: false },
  { id: 3, title: "3rd Semester", desc: "Exploration of desktop programming, computer networks, software engineering, and logic.", ready: false },
  { id: 4, title: "4th Semester", desc: "Focus on system design, data analysis and visualization, web programming, and business process governance.", ready: true, code: "04" },
  { id: 5, title: "5th Semester", desc: "Decision support systems development, server administration, mobile programming, and calculus.", ready: false },
  { id: 6, title: "6th Semester", desc: "Enterprise architecture, data mining, professional ethics, IT infrastructure, and research methodology.", ready: false },
  { id: 7, title: " 7th Semester", desc: "Data science, IT governance, risk management, network security, data warehousing, and capstone project.", ready: false },
  { id: 8, title: "8th Semester", desc: "Accounting information systems, information system security, IT service management, e-business, and final thesis.", ready: false },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto pt-10 pb-6 px-6 min-h-[calc(100vh-100px)] flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
            INFORMATION SYSTEMS
          </h2>
          <p className="text-sm text-slate-500">
            Summary notes for the Information Systems study program.
          </p>
        </div>

        {/* Semester Cards Grid */}
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
                        COMING SOON
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-700 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                    <span>Not Available</span>
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
                      ACTIVE
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                  <Link href={`/semester/smt-04`} className="font-bold text-red-600 hover:text-red-700 transition-colors">
                    Access Lecture
                  </Link>
                  <span className="font-mono text-slate-400">Lecture notes</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-xl mx-auto mt-12 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center shadow-sm w-full">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          <strong className="text-slate-900 font-semibold">Note:</strong> Currently only available for 4th Semester; other semesters will be added gradually.
        </p>
      </div>
    </div>
  );
}