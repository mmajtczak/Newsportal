type ArticleCardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
};

export default function ArticleCard({
  title,
  category,
  description,
  image,
}: ArticleCardProps) {
  return (
    <article className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">

      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <p className="text-red-600 font-bold text-sm uppercase">
          {category}
        </p>

        <h3 className="text-2xl font-black mt-2">
          {title}
        </h3>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <button className="mt-5 font-bold">
          Czytaj więcej →
        </button>

      </div>

    </article>
  );
}