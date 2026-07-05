export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-gradient-accent font-heading text-4xl font-bold sm:text-5xl">{value}</p>
      <p className="mt-2 text-sm font-medium text-slate-400">{label}</p>
    </div>
  );
}
