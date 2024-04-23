import { Tooltip } from "bootstrap";

/**
 * Register tooltips in the current document, making them effective.
 */
export function registerTooltips(): void {
  const elements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  elements.forEach((element) => Tooltip.getOrCreateInstance(element));
}
