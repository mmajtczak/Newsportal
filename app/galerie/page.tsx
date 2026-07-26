export default function Gallery() {
  return (
    <main className="min-h-screen bg-gray-100">

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black">
          Galerie
        </h1>

        <p className="mt-5 text-xl text-gray-700">
          Fotorelacje Flash Media z wydarzeń,
          sportu oraz najważniejszych imprez.
        </p>


        <div className="mt-10 grid md:grid-cols-3 gap-6">


          <div className="bg-white rounded-xl shadow overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2"
              className="w-full h-60 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">
                Sport
              </h2>

              <p className="mt-2 text-gray-600">
                Mecze, zawody i sportowe emocje.
              </p>

            </div>

          </div>



          <div className="bg-white rounded-xl shadow overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
              className="w-full h-60 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">
                Koncerty
              </h2>

              <p className="mt-2 text-gray-600">
                Relacje z wydarzeń muzycznych.
              </p>

            </div>

          </div>



          <div className="bg-white rounded-xl shadow overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
              className="w-full h-60 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">
                Motoryzacja
              </h2>

              <p className="mt-2 text-gray-600">
                Samochody, premiery i wydarzenia.
              </p>

            </div>

          </div>


        </div>


      </section>

    </main>
  );
}