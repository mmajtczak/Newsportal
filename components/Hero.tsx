export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="bg-black text-white rounded-2xl overflow-hidden">

        <div className="h-96 flex items-end p-8 bg-gradient-to-t from-black to-transparent">

          <div>
            <p className="text-red-500 font-bold uppercase">
              Najważniejsze
            </p>

            <h2 className="text-5xl font-black mt-2">
              Najnowsze wydarzenia w centrum uwagi
            </h2>

            <p className="mt-4 text-gray-300 max-w-xl">
              Flash Media prezentuje najważniejsze informacje,
              sportowe emocje i wydarzenia.
            </p>

            <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-bold">
              Czytaj więcej
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}