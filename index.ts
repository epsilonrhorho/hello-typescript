import { pathToFileURL } from "node:url";

type Language = "English" | "Dutch";

export function helloWorld(name: string, language: Language): string {
  return language === "Dutch" ? `Hallo, ${name}!` : `Hello, ${name}!`;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(helloWorld("World", "English"));
}
