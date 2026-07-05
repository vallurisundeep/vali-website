import { Quote } from "lucide-react";
import { Card } from "./Card";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <Card className="relative mx-auto max-w-2xl text-center">
      <Quote className="mx-auto text-primary/30" size={36} />
      <p className="mt-4 text-xl font-medium leading-relaxed text-ink">&ldquo;{quote}&rdquo;</p>
      <p className="mt-6 text-sm font-semibold text-ink">{name}</p>
      <p className="text-sm text-slate-500">{role}</p>
    </Card>
  );
}
