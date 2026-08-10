import { templates } from "@/src/utils/resolveTemplates";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GrHomeRounded } from "react-icons/gr";

export default async function Preview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);

  const loader = templates[slug];

  if (!loader) {
    notFound();
  }

  const { default: Landing } = await loader();

  return (
    <>
      <Landing />
      <Link
        href={"/"}
        className="fixed bg-background/30 backdrop-blur border border-foreground/20 bottom-5 right-5 rounded-full flex justify-center items-center p-5 group hover:border-foreground transition-all duration-300 cursor-pointer opacity-50 hover:opacity-100 z-50"
        title="Volver al inicio"
      >
        <GrHomeRounded
          size={16}
          className="text-foreground/20 group-hover:text-foreground transition-all duration-300"
        />
      </Link>
    </>
  );
}
