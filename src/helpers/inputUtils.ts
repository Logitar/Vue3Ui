import type { InputType } from "../types/TarInput";

export function isDateTimeInput(type?: InputType): boolean {
  switch (type) {
    case "date":
    case "datetime-local":
    case "month":
    case "time":
    case "week":
      return true;
  }
  return false;
}

export function isNumericInput(type?: InputType): boolean {
  switch (type) {
    case "number":
    case "range":
      return true;
  }
  return false;
}

export function isTextualInput(type?: InputType): boolean {
  switch (type) {
    case "email":
    case "password":
    case "search":
    case "tel":
    case "text":
    case "url":
    case undefined:
      return true;
  }
  return false;
}
