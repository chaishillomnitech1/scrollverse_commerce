import ScrollVerseHome from "components/scrollverse-home";

export const metadata = {
  title: "ScrollVerse — Enter the Living Digital Ecosystem",
  description:
    "Discover ScrollVerse worlds, creator-owned media, lookbooks, commerce, exchange pathways, and Web3 readiness.",
  openGraph: {
    type: "website" as const,
    title: "ScrollVerse — Enter the Living Digital Ecosystem",
    description:
      "A connected customer experience for ScrollVerse discovery, media, commerce, and Web3 pathways.",
  },
};

export default function HomePage() {
  return <ScrollVerseHome />;
}
