import { createFileRoute } from "@tanstack/react-router";
import {
  Search, Mail, Bell, ChevronLeft, Share2, Upload, Star, Plus, Smartphone,
  Database, Calendar, Send, AlertTriangle, Moon, Sun, CheckCheck, MoreHorizontal,
  Sidebar as SidebarIcon, ArrowLeft, ArrowRight, RefreshCw, Lock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

const AV = (seed: string) => `https://i.pravatar.cc/120?img=${seed}`;

const navItems = ["Relationship", "Opportunities", "Leads", "Calendar", "Cases", "Reports", "Quotes"];

const topAvatars = [
  { img: "12", badge: "2", color: "bg-red-400" },
  { img: "5",  badge: "3", color: "bg-blue-400" },
  { img: "9",  badge: "2", color: "bg-red-400" },
  { img: "48", badge: "1", color: "bg-red-400" },
  { img: "13", badge: "+", color: "bg-neutral-200 text-neutral-500" },
  { img: "15", badge: "1", color: "bg-red-400" },
  { img: "33", badge: "+", color: "bg-neutral-200 text-neutral-500" },
  { img: "52", badge: "+", color: "bg-neutral-200 text-neutral-500" },
];

function SideIcon({ children, dot, active }: { children: React.ReactNode; dot?: boolean; active?: boolean }) {
  return (
    <button className={`relative w-11 h-11 rounded-full flex items-center justify-center transition
      ${active ? "bg-black text-white shadow-lg" : "bg-white/70 text-neutral-500 hover:bg-white"}`}>
      {children}
      {dot && <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" />}
    </button>
  );
}

function CircleBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-11 h-11 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-neutral-500 border border-white">
      {children}
    </button>
  );
}

function StepDots({ count = 3, color = "bg-blue-300" }: { count?: number; color?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={`w-1.5 h-1.5 rounded-full ${color}`} />
      ))}
    </div>
  );
}

function TaskRow({ avatar, title, muted, dotColor = "bg-blue-400" }: { avatar?: string; title: string; muted?: boolean; dotColor?: string }) {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <span className={`w-2 h-2 rounded-full ${dotColor} shrink-0`} />
      {avatar ? (
        <img src={AV(avatar)} className="w-9 h-9 rounded-full object-cover" alt="" />
      ) : (
        <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
          <Plus className="w-4 h-4" />
        </div>
      )}
      <div className={`flex-1 text-[13px] leading-tight font-medium ${muted ? "text-neutral-400" : "text-neutral-800"}`}>
        {title}
      </div>
      {avatar ? <CheckCheck className="w-4 h-4 text-blue-500" /> : null}
      <button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400">
        <Calendar className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

function ColumnCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="rounded-[28px] bg-white/85 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(30,40,80,0.15)] p-4 min-h-[380px]">
        {children}
      </div>
      <div className="text-center text-[13px] text-neutral-500 mt-4">{title}</div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-neutral-400/40 p-6 md:p-10 flex items-start justify-center">
      {/* Browser chrome */}
      <div className="w-full max-w-[1400px] rounded-[28px] bg-gradient-to-b from-[#e9e7ee] via-[#dcdbe4] to-[#c8cbd8] shadow-2xl overflow-hidden">
        {/* window bar */}
        <div className="flex items-center gap-3 px-5 py-4 bg-[#e9e7ee]/80">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-neutral-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <SidebarIcon className="w-4 h-4 text-neutral-500 ml-2" />
          <Star className="w-4 h-4 text-neutral-500 ml-2" />
          <ArrowLeft className="w-4 h-4 text-neutral-500 ml-2" />
          <ArrowRight className="w-4 h-4 text-neutral-400" />
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 bg-white/60 rounded-full px-4 py-1.5 text-[13px] text-neutral-600 min-w-[280px] justify-center">
              <Lock className="w-3 h-3" />
              <span className="underline underline-offset-2">https://www.sugarcrm.com/</span>
              <RefreshCw className="w-3 h-3 ml-2" />
            </div>
          </div>
          <div className="w-20" />
        </div>

        {/* App body */}
        <div className="px-6 md:px-10 pt-6 pb-10">
          {/* Top nav */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-black flex items-center justify-center text-white text-[10px] font-bold">S</div>
              <span className="text-[22px] font-extrabold tracking-tight">sugar<span className="font-medium">crm</span></span>
            </div>
            <nav className="hidden md:flex items-center gap-2 text-[14px] text-neutral-600">
              {navItems.map((n) => (
                <button key={n}
                  className={`px-5 py-2.5 rounded-full transition ${n === "Cases" ? "bg-black text-white font-semibold" : "hover:text-black"}`}>
                  {n}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <CircleBtn><Search className="w-4 h-4" /></CircleBtn>
              <div className="relative"><CircleBtn><Mail className="w-4 h-4" /></CircleBtn><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" /></div>
              <div className="relative"><CircleBtn><Bell className="w-4 h-4" /></CircleBtn><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" /></div>
              <img src={AV("47")} className="w-11 h-11 rounded-full object-cover border-2 border-white" alt="" />
            </div>
          </div>

          {/* Content grid: left rail + main */}
          <div className="mt-8 flex gap-6">
            {/* Left rail */}
            <div className="flex flex-col items-center gap-3 pt-2">
              <SideIcon><ChevronLeft className="w-4 h-4" /></SideIcon>
              <SideIcon><Share2 className="w-4 h-4" /></SideIcon>
              <SideIcon><Upload className="w-4 h-4" /></SideIcon>
              <SideIcon><Star className="w-4 h-4" /></SideIcon>
              <SideIcon><Plus className="w-4 h-4" /></SideIcon>
              <SideIcon><Smartphone className="w-4 h-4" /></SideIcon>
              <SideIcon><Database className="w-4 h-4" /></SideIcon>
              <SideIcon><Calendar className="w-4 h-4" /></SideIcon>
              <SideIcon><Send className="w-4 h-4" /></SideIcon>
              <SideIcon dot><AlertTriangle className="w-4 h-4" /></SideIcon>
              <div className="mt-6 flex flex-col gap-3">
                <SideIcon><Moon className="w-4 h-4" /></SideIcon>
                <SideIcon active><Sun className="w-4 h-4" /></SideIcon>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900">Customer Journeys</h1>

              {/* Main frosted panel */}
              <div className="relative mt-6 rounded-[32px] bg-white/25 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_-20px_rgba(60,60,120,0.25)] p-6">
                {/* header row */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">New Case Managment</h2>
                  <div className="flex items-center gap-2 bg-white/60 rounded-full px-3 py-2">
                    {topAvatars.map((a, i) => (
                      <div key={i} className="relative">
                        <img src={AV(a.img)} className="w-11 h-11 rounded-full object-cover border-2 border-white" alt="" />
                        <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 min-w-[20px] h-5 px-1 rounded-full text-[11px] font-semibold text-white flex items-center justify-center ${a.color}`}>
                          {a.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleBtn><Plus className="w-4 h-4" /></CircleBtn>
                    <CircleBtn><Upload className="w-4 h-4" /></CircleBtn>
                    <CircleBtn><Calendar className="w-4 h-4" /></CircleBtn>
                  </div>
                </div>

                {/* Four columns */}
                <div className="mt-6 grid grid-cols-4 gap-5 relative">
                  {/* connectors between cols (decorative) */}
                  <ColumnCard title="Case Allocation">
                    <div className="rounded-2xl p-3">
                      <div className="flex items-center justify-between">
                        <img src={AV("12")} className="w-14 h-14 rounded-full object-cover" alt="" />
                        <div className="flex items-center gap-2">
                          <CheckCheck className="w-4 h-4 text-blue-500" />
                          <button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400">
                            <Calendar className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <p className="mt-4 text-[13px] font-medium text-neutral-800">Allocate Case to User!</p>
                    </div>
                    <div className="my-3 border-t border-dashed border-neutral-200" />
                    <div className="rounded-2xl p-3">
                      <div className="flex items-center justify-between">
                        <img src={AV("12")} className="w-14 h-14 rounded-full object-cover" alt="" />
                        <div className="flex items-center gap-2">
                          <CheckCheck className="w-4 h-4 text-blue-500" />
                          <button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400">
                            <Calendar className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <p className="mt-4 text-[13px] font-medium text-neutral-800">Acknowledge Case receipt<br/>to customer!</p>
                    </div>
                  </ColumnCard>

                  <ColumnCard title="Issue Identification">
                    <TaskRow avatar="5"  title="Identify Issue Category" />
                    <TaskRow avatar="9"  title="Identify Issue Severity" />
                    <TaskRow avatar="16" title="Identify Issue Impact" />
                    <TaskRow avatar="47" title="Allocate to Resolution Team" dotColor="bg-red-400" />
                    <TaskRow avatar="45" title="Advise Customer of Resolution estimate" dotColor="bg-red-400" />
                  </ColumnCard>

                  <ColumnCard title="Technical Resolution">
                    <TaskRow title="Identify Issue Dependencies" muted />
                    <TaskRow title="Identify Issue Resolution" muted />
                    <TaskRow avatar="20" title="Estimate Resolution Time" dotColor="bg-red-400" />
                    <TaskRow avatar="45" title="Advise Customer of Resolution Estimate" muted dotColor="bg-red-400" />
                    <TaskRow title="Advise Customer Issue Resolved" muted dotColor="bg-red-400" />
                  </ColumnCard>

                  <ColumnCard title="New Tasks">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="col-span-1 rounded-2xl bg-black text-white p-4 h-[86px] flex items-center relative">
                        <span className="text-[13px] font-semibold leading-tight">Request<br/>Processing</span>
                        <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-black" />
                      </div>
                      <div className="rounded-2xl bg-white p-4 h-[86px] flex items-center text-[13px] font-medium text-neutral-700">Problem<br/>Resolution</div>
                      <div className="rounded-2xl bg-white p-4 h-[86px] flex items-center text-[13px] font-medium text-neutral-700">Customer<br/>Communication</div>
                      <div className="rounded-2xl bg-white p-4 h-[86px] flex items-center text-[13px] font-medium text-neutral-700">Testing and<br/>Verification</div>
                      <div className="rounded-2xl bg-white p-4 h-[86px] flex items-center text-[13px] font-medium text-neutral-700">Customer<br/>Notification</div>
                      <div className="rounded-2xl bg-white p-4 h-[86px] flex items-center text-[13px] font-medium text-neutral-700">Customer<br/>Satisfaction</div>
                    </div>
                  </ColumnCard>
                </div>
              </div>

              {/* Bottom row: Suggested Knowledge + Support Ticket Journey */}
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/40 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Suggested Knowledge</h3>
                    <div className="flex items-center gap-2">
                      <CircleBtn><Plus className="w-4 h-4" /></CircleBtn>
                      <CircleBtn><Upload className="w-4 h-4" /></CircleBtn>
                      <CircleBtn><Calendar className="w-4 h-4" /></CircleBtn>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-6 gap-3 text-[12px] text-neutral-500 px-2">
                    <div>Subject</div><div>Status</div><div>Start Date</div><div>End Date</div><div className="col-span-2">Assigned User</div>
                  </div>
                  <div className="mt-2 space-y-2">
                    {[
                      { s: "Design Sprint", st: "Executed", stC: "bg-blue-200 text-blue-700", sd: "2023-09-30 01:12", ed: "2023-10-01 01:11", u: "Sam Frank", av: "12" },
                      { s: "Meeting Lead", st: "Scheduled", stC: "bg-red-300 text-red-800", sd: "2023-10-01 7:41", ed: "2023-10-01 9:41", u: "Nikki Olay", av: "45" },
                    ].map((r, i) => (
                      <div key={i} className="grid grid-cols-6 gap-3 items-center bg-white/60 rounded-xl px-2 py-2 text-[12.5px]">
                        <div className="flex items-center gap-2 font-medium text-neutral-800"><Star className="w-3.5 h-3.5 text-neutral-400" />{r.s}</div>
                        <div><span className={`px-2 py-1 rounded-md text-[11px] font-semibold ${r.stC}`}>{r.st}</span></div>
                        <div className="text-neutral-600">{r.sd}</div>
                        <div className="text-neutral-600">{r.ed}</div>
                        <div className="col-span-2 flex items-center gap-2"><img src={AV(r.av)} className="w-6 h-6 rounded-full" alt="" /><span className="text-neutral-700">{r.u}</span></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/40 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Support Ticket Journey</h3>
                    <div className="flex items-center gap-2">
                      <CircleBtn><Plus className="w-4 h-4" /></CircleBtn>
                      <CircleBtn><Upload className="w-4 h-4" /></CircleBtn>
                      <CircleBtn><Calendar className="w-4 h-4" /></CircleBtn>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-around">
                    <Donut value={5} label="Executed" color="#8fb2e0" />
                    <Donut value={7} label="Active" color="#e37a7a" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Donut({ value, label, color }: { value: number; label: string; color: string }) {
  const r = 70; const c = 2 * Math.PI * r; const pct = 0.75;
  return (
    <div className="relative w-[180px] h-[180px]">
      <svg viewBox="0 0 180 180" className="w-full h-full -rotate-90">
        <circle cx="90" cy="90" r={r} stroke="rgba(255,255,255,0.6)" strokeWidth="22" fill="none" />
        <circle cx="90" cy="90" r={r} stroke={color} strokeWidth="22" fill="none"
          strokeDasharray={`${c * pct} ${c}`} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl font-extrabold text-neutral-900">{value}</div>
        <div className="text-[12px] text-neutral-600 mt-1">{label}</div>
      </div>
    </div>
  );
}
