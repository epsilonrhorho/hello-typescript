import { pathToFileURL } from "node:url";

export function helloWorld(name: string): string {
  return `Hello, ${name}!`;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(helloWorld("World"));
}
