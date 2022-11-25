import { assert, expect, test } from "vitest";

const targetModel = { name: "sheet2", freeze: "A1", styles: [], merges: [], rows: {}, validations: [] };
const targetModelStringify = JSON.stringify(targetModel);

test("Compare a mismatching string", () => {
  const mismatchingInput = "This is a string, not an object. This won't work!";

  assert.deepEqual(JSON.parse(targetModelStringify), mismatchingInput, "❌ Doesn't matches original");
});

test("Compare a mismatching number", () => {
  const mismatchingInput = 100;

  assert.deepEqual(JSON.parse(targetModelStringify), mismatchingInput, "❌ Doesn't matches original");
});

test("Compare a wrong object", () => {
  const mismatchingInput = { name: "sheet2", freeze: "A1", styles: [], merges: [], rows: {} };

  assert.deepEqual(JSON.parse(targetModelStringify), mismatchingInput, "❌ Doesn't matches original");
});

test("Compare a matching object", () => {
  const mismatchingInput = { name: "sheet2", freeze: "A1", styles: [], merges: [], rows: {}, validations: [] };

  assert.deepEqual(JSON.parse(targetModelStringify), mismatchingInput, "❌ Doesn't matches original");
});
