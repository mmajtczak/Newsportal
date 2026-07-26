import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-black tracking-tight">
            FLASH MEDIA
          </h1>

          <p className="text-sm text-gray-400">
            W centrum wydarzeń
          </p>
        </div>


        <nav>
  <ul className="flex gap-6 text-sm font-medium">

    <li>
      <Link href="/">
        News
      </Link>
    </li>

    <li>
      <Link href="/sport">
        Sport
      </Link>
    </li>

    <li>
      <Link href="/rozrywka">
        Rozrywka
      </Link>
    </li>

    <li>
      <Link href="/wydarzenia">
        Wydarzenia
      </Link>
    </li>

    <li>
      <Link href="/galerie">
        Galerie
      </Link>
    </li>

    <li>
      <Link href="/o-nas">
        O nas
      </Link>
    </li>

    <li>
      <Link href="/kontakt">
        Kontakt
      </Link>
    </li>

  </ul>
</nav>

      </div>
    </header>
  );
}