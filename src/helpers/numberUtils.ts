export function parseNumber(value: number | string | undefined): number | undefined {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    const number = Number(value.trim());
    if (!isNaN(number)) {
      return number;
    }
  }
  return undefined;
}
