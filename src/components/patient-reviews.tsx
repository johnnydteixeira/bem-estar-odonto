import { ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  { name: "Alice Alcantara", initials: "AA", text: "Ambiente limpo e acolhedor, com excelentes profissionais, atendimento rápido no WhatsApp, amei o atendimento", url: "https://share.google/xUOgPt3ziFR0vWa9h" },
  { name: "Ana Carolina Baere", initials: "AC", text: "Excelente atendimento! Consultório organizado, ambiente acolhedor e profissionais muito atenciosos.  Super recomendo!", url: "https://share.google/0KXNhQh63mbnUHUWq" },
  { name: "Brenno Tavares", initials: "BT", text: "Gostei bastante do atendimento prestado, e já recomendei a toda família.\nParabéns👍", url: "https://share.google/7yxXypbUCYIKwfN38" },
];

export function PatientReviews() {
  return <div className="patient-review-grid">{reviews.map(review => <article className="patient-review" key={review.name}>
    <div className="stars" aria-label="5 estrelas">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
    <blockquote>“{review.text}”</blockquote>
    <div className="review-author"><span className="review-avatar" aria-hidden="true">{review.initials}</span><div className="min-w-0"><strong>{review.name}</strong><span>Avaliação no Google • Campo Grande</span></div></div>
    <Button asChild variant="link" className="px-0 justify-start"><a href={review.url} target="_blank" rel="noopener noreferrer">Ver avaliação original <ArrowUpRight /></a></Button>
  </article>)}</div>;
}