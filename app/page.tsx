export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <header className="bg-black text-white p-6">
        <h1 className="text-3xl font-bold">
          MEDIA PULSE
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