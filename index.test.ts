import assert from "node:assert/strict";
import test from "node:test";

import { helloWorld } from "./index.js";

test("helloWorld returns an English greeting with the provided name", () => {
  assert.equal(helloWorld("Stefan", "English"), "Hello, Stefan!");
});

test("helloWorld returns a Dutch greeting with the provided name", () => {
  assert.equal(helloWorld("Stefan", "Dutch"), "Hallo, Stefan!");
});
