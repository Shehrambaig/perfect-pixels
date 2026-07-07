import { useState } from "react";
import {
  Phone, X, Search, Mic, MicOff, PhoneOff, Flag, Lightbulb,
  MessageCircle, ChevronDown, Sparkles,
} from "lucide-react";

export function CallPopup({ onClose }: { onClose?: () => void }) {
  const [muted, setMuted] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/30 backdrop-blur-sm">
      <div className="relative w-full max-w-[460px] rounded-[32px] bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_30px_80px_-20px_rgba(60,60,120,0.45)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
              <Phone className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-[17px] font-bold tracking-tight text-neutral-900">Manual Dialer</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-neutral-500 border border-white transition"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pt-6 pb-5">
          <h3 className="text-center text-2xl font-extrabold tracking-tight text-neutral-900">Make a call</h3>

          {/* Number input */}
          <div className="mt-5 flex items-center gap-3 rounded-full bg-white/80 border border-white px-5 py-3.5 shadow-[0_6px_20px_-10px_rgba(60,60,120,0.25)]">
            <Search className="w-4 h-4 text-neutral-400" />
            <span className="text-[15px] text-neutral-800 tracking-wide">+1 662 399 5216</span>
          </div>

          {/* On call status */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[13px] font-semibold text-emerald-600">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            On call · 0:54
          </div>

          {/* NEPQ header row */}
          <div className="mt-5 flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-[0.14em] text-neutral-400">NEPQ COACH</span>
            <button className="flex items-center gap-1.5 rounded-full bg-white/90 border border-[oklch(0.68_0.14_250)]/40 px-3 py-1.5 text-[12px] font-bold text-[oklch(0.45_0.18_280)]">
              <Sparkles className="w-3 h-3" />
              Coach on
            </button>
          </div>

          {/* Coach card */}
          <div className="mt-3 relative rounded-2xl bg-white/85 border border-white shadow-[0_10px_30px_-15px_rgba(60,60,120,0.2)] overflow-hidden">
            <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-[oklch(0.66_0.19_20)]" />
            <div className="px-4 pt-4 pb-3 flex items-center gap-2">
              <span className="rounded-full bg-[oklch(0.68_0.14_250)]/15 px-2.5 py-1 text-[10.5px] font-bold tracking-wider text-[oklch(0.45_0.18_280)]">
                • NEPQ COACH
              </span>
              <span className="rounded-md bg-[oklch(0.66_0.19_20)]/12 px-2.5 py-1 text-[10.5px] font-bold tracking-wider text-[oklch(0.55_0.2_20)]">
                OBJECTION
              </span>
            </div>

            <div className="px-4 pb-4 border-t border-neutral-100/80 pt-3">
              <p className="text-[13.5px] leading-snug text-neutral-700">
                <Flag className="inline-block w-3.5 h-3.5 text-[oklch(0.66_0.19_20)] mr-1.5 -mt-0.5" />
                <span className="font-bold text-neutral-900">READ</span> Seller is angry and elevated; foreclosure pressure with one-week deadline.
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.66_0.19_20)]" />
                Emotional Elevation / Motivation Revealed
              </div>

              {/* SAY block */}
              <div className="mt-3 rounded-2xl bg-[oklch(0.97_0.02_20)] p-3.5">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-[oklch(0.55_0.2_20)]">
                    <MessageCircle className="w-3.5 h-3.5" />
                    SAY
                  </span>
                  <span className="text-[11px] italic text-neutral-400">familiar-warm tone</span>
                </div>
                <p className="mt-2 text-[14px] leading-snug font-bold text-neutral-900">
                  "I can hear the frustration — what's happened that's brought you to this point right now?"
                </p>
              </div>

              {/* WHY */}
              <p className="mt-3 text-[12.5px] leading-snug text-neutral-500">
                <Lightbulb className="inline-block w-3.5 h-3.5 text-amber-500 mr-1.5 -mt-0.5" />
                <span className="font-bold text-neutral-800">WHY</span> De-escalate first, then probe the real story behind the anger (§8.2, §5.3). Calm them, make them safe, then listen (§13.6).
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={() => setMuted((m) => !m)}
              className="flex-1 flex items-center justify-center gap-2 rounded-full bg-white/80 border border-white py-3 text-[14px] font-semibold text-neutral-800 hover:bg-white transition"
            >
              {muted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              {muted ? "Unmute" : "Mute"}
            </button>
            <button
              onClick={onClose}
              className="flex-[2] flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[oklch(0.62_0.22_20)] to-[oklch(0.55_0.22_20)] py-3 text-[14px] font-semibold text-white shadow-[0_10px_25px_-10px_oklch(0.55_0.22_20)] hover:brightness-110 transition"
            >
              <PhoneOff className="w-4 h-4" />
              End call
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 bg-white/40 border-t border-white/50">
          <span className="text-[11px] font-bold tracking-[0.14em] text-neutral-400">CALL FROM</span>
          <button className="flex items-center gap-2 rounded-full bg-white/90 border border-white px-3.5 py-2 text-[12.5px] text-neutral-700">
            <span className="font-mono">+1 662 430 4416</span>
            <span className="text-neutral-300">·</span>
            <span>CRM test line</span>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
