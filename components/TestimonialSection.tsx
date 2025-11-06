interface Review {
  readonly text: string;
  readonly author: string;
}

interface TestimonialSectionProps {
  readonly reviews: readonly Review[];
}

export default function TestimonialSection({
  reviews,
}: TestimonialSectionProps) {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-8">
          What our customers say
        </h2>
        <div className="space-y-12">
          {reviews.map((rev, idx) => (
            <blockquote key={idx} className="font-sans text-gray-300 italic">
              &ldquo;{rev.text}&rdquo;
              <footer className="font-sans mt-2 text-sm text-gray-400">
                — {rev.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
