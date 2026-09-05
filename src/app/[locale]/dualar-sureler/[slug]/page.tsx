import { notFound } from "next/navigation";
import { TextDetailView } from "@/features/dualar-sureler/presentation/text-detail-view";
import { getSacredText } from "@/features/dualar-sureler/data/catalog";
import { SACRED_TEXTS } from "@/features/dualar-sureler/data/catalog";

export function generateStaticParams() {
  return SACRED_TEXTS.map((text) => ({ slug: text.slug }));
}

export default async function SacredTextPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const text = getSacredText(slug);
  if (!text) {
    notFound();
  }
  return <TextDetailView text={text} />;
}
