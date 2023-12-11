import { describe, it, expect } from "vitest";

import { parseNumber } from "../numberUtils";

describe("numberUtils.parseNumber", () => {
  it.concurrent("should not parse a non-numberish string", () => {
    expect(parseNumber("test")).toBeUndefined();
    expect(parseNumber("Hello World!")).toBeUndefined();
  });

  it.concurrent("should not parse any other type", () => {
    expect(parseNumber(false as any)).toBeUndefined();
    expect(parseNumber(true as any)).toBeUndefined();
    expect(parseNumber(new Date() as any)).toBeUndefined();
    expect(parseNumber(undefined as any)).toBeUndefined();
    expect(parseNumber(null as any)).toBeUndefined();
    expect(parseNumber({ number: 123 } as any)).toBeUndefined();
  });

  it.concurrent("should parse a number", () => {
    expect(parseNumber(-1)).toBe(-1);
    expect(parseNumber(0)).toBe(0);
    expect(parseNumber(420)).toBe(420);
  });

  it.concurrent("should parse a numberish string", () => {
    expect(parseNumber("-10")).toBe(-10);
    expect(parseNumber(" -2 ")).toBe(-2);
    expect(parseNumber("")).toBe(0);
    expect(parseNumber("   ")).toBe(0);
    expect(parseNumber("0")).toBe(0);
    expect(parseNumber("247")).toBe(247);
    expect(parseNumber("  9  ")).toBe(9);
  });
});
