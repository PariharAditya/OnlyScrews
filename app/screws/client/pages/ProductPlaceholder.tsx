import { Link, useParams } from "react-router-dom";

export default function ProductPlaceholder() {
  const { slug } = useParams();

  return (
    <main className="min-h-screen bg-white flex items-start">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-2xl font-bold mb-4">{slug?.replace(/-/g, " ")}</h2>
        <p className="mb-6 text-neutral-600">This is a placeholder product/category page. Tell me if you want a fully designed product listing or detail page for this category.</p>
        <Link to="/" className="inline-block text-sm font-medium text-brand underline">Back to categories</Link>
      </div>
    </main>
  );
}
