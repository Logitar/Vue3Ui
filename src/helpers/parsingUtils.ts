export function parseBoolean(value: boolean | string | undefined): boolean | undefined {
  if (typeof value === "boolean") {
    return value;
  } else if (typeof value === "string") {
    value = value.trim().toLowerCase();
    switch (value) {
      case "true":
        return true;
      case "false":
        return false;
    }
  }
}
