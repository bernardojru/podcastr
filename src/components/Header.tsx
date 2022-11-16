import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";

export function Header() {

  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });
  return (
    <header className="bg-white h-24 flex items-center py-8 px-16 border-b border-gray-100">
      <Link href="/">
        <img src="/logo.svg" alt="Podcastr" />
      </Link>

      <p className="ml-8 pt-1 pr-0 pb-1 pl-8 border-l border-gray-100">
        O melhor para você ouvir, sempre
      </p>

      <span className="ml-auto capitalize">{currentDate}</span>
    </header>
  );
}
