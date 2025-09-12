import React from 'react'
import { Home, Users, AlertTriangle, FileText, Settings, Search, Bell } from 'lucide-react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'

type RadarDataItem = {
  category: string
  score: number
}

const radarData: RadarDataItem[] = [
  { category: "Market", score: 3.8 },
  { category: "Term", score: 3.6 },
  { category: "Product", score: 3.7 },
  { category: "Taction", score: 3.4 },
  { category: "Defensibility", score: 3.9 },
  { category: "Revenue", score: 3.5 },
  { category: "Execution", score: 3.7 },
  { category: "Team", score: 4.0 }
]

export default function App(): JSX.Element {
  return (
    <div className="h-screen w-screen flex bg-dpDark">
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#0c1522] border-r border-slate-800/60 px-5 py-6 flex flex-col">
        <div className="text-xl font-extrabold tracking-tight mb-8 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-dpTeal" />
          DealPilot
        </div>
        <nav className="space-y-2 text-sm">
          <NavItem active icon={<Home size={18} />} label="Dashboard" />
          <NavItem icon={<Users size={18} />} label="Startups" />
          <NavItem icon={<AlertTriangle size={18} />} label="Risks" />
          <NavItem icon={<FileText size={18} />} label="Memos" />
          <NavItem icon={<Settings size={18} />} label="Settings" />
        </nav>
        <div className="mt-auto pt-8">
          <div className="flex items-center gap-3 text-sm text-slate-300/90">
            <div className="w-10 h-10 rounded-full bg-slate-700/60" />
            <div>
              <div className="font-medium">Analyst</div>
              <div className="text-xs text-slate-400">Logged in</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 flex-1">
            <select className="input w-64">
              <option>Acme Inc.</option>
              <option>Contoso</option>
            </select>
            <div className="relative flex-1 max-w-[620px]">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className="input w-full pl-9" placeholder="Search" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn bg-dpPanel border border-slate-800/60 rounded-xl p-2">
              <Bell size={18} className="text-slate-300" />
            </button>
            <button className="btn btn-primary">Export Memo</button>
          </div>
        </div>

        {/* First row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="panel p-6">
            <div className="text-[56px] leading-none font-extrabold text-dpTeal">
              4,2 <span className="text-slate-400 text-2xl align-top">/5</span>
            </div>
            <div className="mt-2 text-lg font-semibold">Overall Score</div>
            <div className="mt-1 text-dpGreen">Proceed to Partner Meeting</div>
          </div>

          <div className="panel p-6">
            <div className="text-lg font-semibold mb-3">Risk Flags</div>
            <ul className="space-y-3 text-sm">
              {["Inconsistent metrics", "High burn rate", "Limited customer validation"].map((risk, i) => (
                <li key={i} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-dpAmber">
                    <AlertTriangle size={16} /> {risk}
                  </span>
                  <span className="text-slate-400">{'>'}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="panel p-6">
            <div className="text-lg font-semibold mb-4">Categories</div>
            <div className="grid grid-cols-2 gap-6">
              <div className="h-60 col-span-1">
                <ResponsiveContainer>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="rgba(148,163,184,.15)" />
                    <PolarAngleAxis dataKey="category" stroke="#7dd3fc" tick={{ fill: "#7dd3fc", fontSize: 12 }} />
                    <PolarRadiusAxis domain={[0, 5]} stroke="rgba(148,163,184,.2)" tick={{ fill: "#94a3b8" }} />
                    <Radar dataKey="score" stroke="#00B5D8" fill="#00B5D8" fillOpacity={0.25} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-5">
                {["Team", "Market", "Product"].map((lbl, i) => (
                  <div key={i}>
                    <div className="text-sm mb-1 text-slate-300">{lbl}</div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue={70 - i * 10}
                      className="w-full accent-dpTeal"
                    />
                  </div>
                ))}
                <div className="text-xs text-slate-400 pt-2">View Dashboard</div>
              </div>
            </div>
          </div>
          <div className="panel p-6">
            <div className="text-lg font-semibold mb-4">Weight Sliders</div>
            <div className="space-y-6">
              {["Team", "Market", "Product", "Traction", "Defensibility"].map((lbl, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-300">{lbl}</div>
                    <div className="w-2 h-2 rounded-full bg-dpTeal"></div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={60 - i * 8}
                    className="w-full accent-dpTeal"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="panel p-6">
            <div className="text-lg font-semibold mb-4">Evidence Linked Insights</div>
            <div className="space-y-3 text-sm">
              <Row text="Strong founding team with relevant" />
              <Row text="Revenue growth of 120% YoY" />
            </div>
          </div>
          <div className="panel p-6">
            <div className="text-lg font-semibold mb-3">Benchmark Snapshot</div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-slate-400 text-sm">Startup ARR Multiple</div>
                <div className="text-4xl font-extrabold">
                  7,5<span className="text-xl">x</span>
                </div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Median ARR Multiple</div>
                <div className="text-4xl font-extrabold">
                  6,1<span className="text-xl">x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

type NavItemProps = {
  icon: React.ReactNode
  label: string
  active?: boolean
}

function NavItem({ icon, label, active }: NavItemProps): JSX.Element {
  return (
    <button
      className={`w-full text-left px-3 py-2 rounded-xl flex items-center gap-3 ${
        active ? 'bg-[#0f1c2b] text-cyan-300' : 'hover:bg-[#0f1c2b] text-slate-300'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

type RowProps = {
  text: string
}

function Row({ text }: RowProps): JSX.Element {
  return (
    <div className="flex items-center justify-between bg-[#0f1b2a] border border-slate-800/60 rounded-xl px-3 py-2">
      <div className="flex items-center gap-2">
        <span className="text-dpTeal">↗</span>
        <span>{text}</span>
      </div>
      <button className="text-xs px-2 py-1 bg-dpPanel border border-slate-700 rounded-lg text-slate-200">
        View Source
      </button>
    </div>
  )
}
