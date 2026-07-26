import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-10">

  <h2 className="text-4xl font-black mb-6">
    Najnowsze informacje
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <ArticleCard
  category="Sport"
  title="Najważniejsze wydarzenia sportowe"
  description="Relacje, wyniki i najnowsze informacje."
  image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
/>

    <ArticleCard
  category="Wydarzenia"
  title="Gwiazdy na czerwonym dywanie"
  description="Najciekawsze wydarzenia i relacje."
  image="https://images.unsplash.com/photo-1506157786151-b8491531f063"
/>

    <ArticleCard
  category="Galerie"
  title="Zdjęcia z najważniejszych imprez"
  description="Profesjonalne galerie Flash Media."
  image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
/>

  </div>

</section>

      <header className="bg-black text-white p-6">
        <h1 className="text-3xl font-bold">
          Flash Media
        </h1>

        <nav className="mt-4 flex gap-6">
          <span>News</span>
          <span>Sport</span>
          <span>Rozrywka</span>
          <span>Internet</span>
          <span>Galerie</span>
        </nav>
      </header>


      <section className="p-8">
        <div className="bg-white rounded-xl p-6 shadow">

          <h2 className="text-4xl font-bold">
            Najważniejszy temat dnia
          </h2>

          <p className="mt-4 text-gray-600">
            Tutaj pojawi się główny artykuł portalu.
          </p>

        </div>
      </section>


      <section className="p-8 grid md:grid-cols-3 gap-6">

        <article className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold text-xl">
            Nowy news sportowy
          </h3>
          <p className="mt-2">
            Opis artykułu...
          </p>
        </article>


        <article className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold text-xl">
            Gwiazdy i wydarzenia
          </h3>
          <p className="mt-2">
            Opis artykułu...
          </p>
        </article>


        <article className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold text-xl">
            Najnowsze informacje
          </h3>
          <p className="mt-2">
            Opis artykułu...
          </p>
        </article>

      </section>

    </main>

  );
}