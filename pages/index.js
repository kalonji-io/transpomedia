
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([
    {
      title: "Sozialstaat am Limit: Forderungen nach Umverteilung",
      media: "nd-aktuell",
      direction: "links",
      owner: "nd.Genossenschaft (Die Linke-nah)",
      summary: "Die wachsende soziale Ungleichheit zwingt die Regierung zum Handeln, fordern Sozialverbände.",
    },
    {
      title: "Scholz verteidigt Sparkurs im Bundestag",
      media: "FAZ",
      direction: "zentral",
      owner: "FAZIT-Stiftung",
      summary: "Kanzler Scholz betont die Notwendigkeit solider Finanzen trotz wachsender sozialer Spannungen.",
    },
    {
      title: "Linke Ideologen fordern Enteignung – FDP warnt",
      media: "Junge Freiheit",
      direction: "rechts",
      owner: "Junge Freiheit Verlag GmbH",
      summary: "Mit scharfer Kritik reagieren Liberale auf linke Pläne zur Vermögensumverteilung.",
    },
  ]);

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">📰 Thema des Tages: Sozialpolitik & Umverteilung</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="rounded-2xl shadow-md border p-5 space-y-3 hover:shadow-xl transition">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">{article.media}</span>
              <span className="text-xs px-2 py-1 border rounded-full bg-gray-50 capitalize">
                {article.direction}
              </span>
            </div>
            <h2 className="text-lg font-semibold leading-snug">{article.title}</h2>
            <p className="text-sm text-gray-700">{article.summary}</p>
            <p className="text-xs text-gray-400 italic">Eigentümer: {article.owner}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
