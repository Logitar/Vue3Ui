import { Tooltip } from "bootstrap";

export function registerTooltips(): void {
  const elements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  console.log(elements);
  elements.forEach((element) => new Tooltip(element));
}
