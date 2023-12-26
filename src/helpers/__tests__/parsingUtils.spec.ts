import { describe, expect, it } from "vitest";

import { parseBoolean } from "../parsingUtils";

describe("parsingUtils.parseBoolean", () => {
  it.concurrent("should return the same value when it is a boolean", () => {
    expect(parseBoolean(false)).toBe(false);
    expect(parseBoolean(true)).toBe(true);
  });

  it.concurrent("should return a boolean when parsing a valid string", () => {
    expect(parseBoolean("false")).toBe(false);
    expect(parseBoolean("  FALSE  ")).toBe(false);
    expect(parseBoolean("true")).toBe(true);
    expect(parseBoolean("  TRUE  ")).toBe(true);
  });

  it.concurrent("should return undefined when parsing an invalid string", () => {
    expect(parseBoolean("")).toBeUndefined();
    expect(parseBoolean("   ")).toBeUndefined();
    expect(parseBoolean("Hello World!")).toBeUndefined();
  });

  it.concurrent("should return undefined when parsing anything else", () => {
    expect(parseBoolean(undefined)).toBeUndefined();
    expect(parseBoolean(null as any)).toBeUndefined();
    expect(parseBoolean(123 as any)).toBeUndefined();
  });
});
