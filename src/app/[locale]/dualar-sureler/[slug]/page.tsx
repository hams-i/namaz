import { notFound } from "next/navigation";
import { TextDetailView } from "@/features/dualar-sureler/presentation/text-detail-view";
import { getSacredText } from "@/features/dualar-sureler/data/catalog";

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
