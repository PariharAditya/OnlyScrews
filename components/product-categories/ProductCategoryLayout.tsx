import { ReactNode } from "react";

interface ProductCategoryLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function ProductCategoryLayout({ title, description, children }: ProductCategoryLayoutProps) {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-8 md:px-16 py-8 md:py-12">
        <header className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            {title}
          </h1>
          <p className="mt-4 max-w-4xl text-lg md:text-xl text-neutral-600">
            {description}
          </p>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {children}
        </div>
      </section>
    </main>
  );
}
