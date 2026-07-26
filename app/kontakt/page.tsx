export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-100">

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black">
          Kontakt
        </h1>

        <p className="mt-6 text-xl text-gray-700">
          Skontaktuj się z redakcją Flash Media
          w sprawie współpracy, akredytacji oraz
          relacji medialnych.
        </p>


        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold">
              Redakcja
            </h2>

            <p className="mt-4 text-gray-600">
              ✉ Email:
            </p>

            <p className="font-bold">
              kontakt@flashmedia.pl
            </p>


            <p className="mt-4 text-gray-600">
              📸 Instagram:
            </p>

            <p className="font-bold">
              @flashmedia
            </p>

          </div>


          <div className="bg-black text-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold">
              Współpraca medialna
            </h2>

            <p className="mt-4 text-gray-300">
              Przyjmujemy zapytania dotyczące:
            </p>

            <ul className="mt-4 space-y-2">
              <li>• akredytacji prasowych</li>
              <li>• fotorelacji</li>
              <li>• współpracy przy wydarzeniach</li>
              <li>• materiałów promocyjnych</li>
            </ul>

          </div>

        </div>

      </section>

    </main>
  );
}