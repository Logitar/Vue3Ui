import { Tooltip } from "bootstrap";

export function registerTooltips(): void {
  const elements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  elements.forEach((element) => Tooltip.getOrCreateInstance(element));
}
