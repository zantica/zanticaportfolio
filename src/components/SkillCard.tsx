import { Cpu } from "lucide-react";

interface SkillCardProps {
  cardName: string;
}

export const SkillCard = ({ cardName }: SkillCardProps) => {
  return (
    <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded border border-slate-700/50 hover:border-teal-400/50 transition-colors">
      <Cpu size={16} className="text-teal-400" />
      <span className="text-sm text-slate-300 font-mono">{cardName}</span>
    </div>
  );
};
