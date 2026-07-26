export default function About() {
  return (
    <main className="min-h-screen bg-gray-100">

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black">
          O Flash Media
        </h1>

        <p className="mt-6 text-xl text-gray-700">
          Flash Media to niezależny portal informacyjny
          skupiający się na najważniejszych wydarzeniach
          sportowych, kulturalnych i rozrywkowych.
        </p>


        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold">
              📸 Fotorelacje
            </h2>

            <p className="mt-3 text-gray-600">
              Profesjonalne zdjęcia z wydarzeń,
              koncertów i imprez sportowych.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold">
              📰 News
            </h2>

            <p className="mt-3 text-gray-600">
              Najważniejsze informacje,
              wywiady i relacje.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold">
              🎥 Multimedia
            </h2>

            <p className="mt-3 text-gray-600">
              Materiały video i treści
              tworzone z wydarzeń.
            </p>
          </div>

        </div>


        <div className="mt-12 bg-black text-white rounded-xl p-8">

          <h2 className="text-3xl font-black">
            Kontakt dla organizatorów
          </h2>

          <p className="mt-3 text-gray-300">
            Jesteśmy otwarci na współpracę medialną,
            akredytacje oraz relacje z wydarzeń.
          </p>

          <p className="mt-5 font-bold">
            ✉ kontakt@flashmedia.pl
          </p>

        </div>


      </section>

    </main>
  );
}