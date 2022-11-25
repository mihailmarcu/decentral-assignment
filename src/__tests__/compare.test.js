import { describe, expect, it } from "vitest";
import { compare } from "./compare.js";

describe("Compare function", () => {
  it.each([
    {
      input: "This is a string, not an object. This won't work!",
    },
    {
      input: 100,
    },
    {
      input: {
        name: "sheet2",
        freeze: "A1",
        styles: [],
        merges: [],
        rows: {},
      },
    },
  ])("should not accept mismatching between inputs and target model", ({ input }) => {
    const targetModel = {
      name: "sheet2",
      freeze: "A1",
      styles: [],
      merges: [],
      rows: {},
      validations: [],
    };

    const result = compare(input, targetModel);

    expect(result).toBe(false);
  });

  it.each([
    {
      input: {
        name: "sheet2",
        freeze: "A1",
        styles: [],
        merges: [],
        rows: {},
        validations: [],
      },
    },
  ])("should accept matching inputs with target model", ({ input }) => {
    const targetModel = {
      name: "sheet2",
      freeze: "A1",
      styles: [],
      merges: [],
      rows: {},
      validations: [],
    };

    const result = compare(input, targetModel);

    expect(result).toBe(true);
  });
});
