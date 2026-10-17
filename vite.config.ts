import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

import { readFileSync, readdirSync } from "node:fs";
import type { Plugin } from "vite";

const dataDir = new URL("./src/data/", import.meta.url);
const readJson = (rel: string) =>
  JSON.parse(readFileSync(new URL(rel, dataDir), "utf-8"));

function personJsonLd(): Plugin {
  return {
    name: "person-json-ld",
    transformIndexHtml() {
      const person = readJson("person.json");
      const langs = readdirSync(new URL("locales/", dataDir))
        .filter((f) => f.endsWith(".json"))
        .map((f) => f.replace(".json", ""));
      const locales = Object.fromEntries(
        langs.map((l) => [l, readJson(`locales/${l}.json`)]),
      );
      const localized = (key: string) =>
        langs.map((l) => ({ "@language": l, "@value": locales[l].card[key] }));

      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: localized("name"),
        jobTitle: localized("jobTitle"),
        url: person.url,
        image: person.image,
        sameAs: Object.values(person.links),
      };

      return [
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: JSON.stringify(jsonLd),
          injectTo: "head",
        },
      ];
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), personJsonLd()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
