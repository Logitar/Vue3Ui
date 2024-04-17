import { describe, expect, it } from "vitest";

import { isDateTimeInput, isNumericInput, isTextualInput } from "../inputUtils";

describe("inputUtils.isDateTimeInput", () => {
  it.concurrent("should return true when the specified type is not a date and/or time type", () => {
    expect(isDateTimeInput("number")).toBe(false);
    expect(isDateTimeInput("range")).toBe(false);
    expect(isDateTimeInput("email")).toBe(false);
    expect(isDateTimeInput("password")).toBe(false);
    expect(isDateTimeInput("search")).toBe(false);
    expect(isDateTimeInput("tel")).toBe(false);
    expect(isDateTimeInput("text")).toBe(false);
    expect(isDateTimeInput("url")).toBe(false);
    expect(isDateTimeInput(undefined)).toBe(false);
  });

  it.concurrent("should return true when the specified type is a date and/or time type", () => {
    expect(isDateTimeInput("date")).toBe(true);
    expect(isDateTimeInput("datetime-local")).toBe(true);
    expect(isDateTimeInput("month")).toBe(true);
    expect(isDateTimeInput("time")).toBe(true);
    expect(isDateTimeInput("week")).toBe(true);
  });
});

describe("inputUtils.isNumericInput", () => {
  it.concurrent("should return true when the specified type is not a numeric type", () => {
    expect(isNumericInput("date")).toBe(false);
    expect(isNumericInput("datetime-local")).toBe(false);
    expect(isNumericInput("month")).toBe(false);
    expect(isNumericInput("time")).toBe(false);
    expect(isNumericInput("week")).toBe(false);
    expect(isNumericInput("email")).toBe(false);
    expect(isNumericInput("password")).toBe(false);
    expect(isNumericInput("search")).toBe(false);
    expect(isNumericInput("tel")).toBe(false);
    expect(isNumericInput("text")).toBe(false);
    expect(isNumericInput("url")).toBe(false);
    expect(isNumericInput(undefined)).toBe(false);
  });

  it.concurrent("should return true when the specified type is a numeric type", () => {
    expect(isNumericInput("number")).toBe(true);
    expect(isNumericInput("range")).toBe(true);
  });
});

describe("inputUtils.isTextualInput", () => {
  it.concurrent("should return true when the specified type is not a textual type", () => {
    expect(isTextualInput("date")).toBe(false);
    expect(isTextualInput("datetime-local")).toBe(false);
    expect(isTextualInput("month")).toBe(false);
    expect(isTextualInput("time")).toBe(false);
    expect(isTextualInput("week")).toBe(false);
    expect(isTextualInput("number")).toBe(false);
    expect(isTextualInput("range")).toBe(false);
  });

  it.concurrent("should return true when the specified type is a textual type", () => {
    expect(isTextualInput("email")).toBe(true);
    expect(isTextualInput("password")).toBe(true);
    expect(isTextualInput("search")).toBe(true);
    expect(isTextualInput("tel")).toBe(true);
    expect(isTextualInput("text")).toBe(true);
    expect(isTextualInput("url")).toBe(true);
    expect(isTextualInput(undefined)).toBe(true);
  });
});
