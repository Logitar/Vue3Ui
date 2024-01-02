import type { ImageOptions } from "./TarImage";

/**
 * The options of the TarCarousel component.
 */
export type CarouselOptions = {
  /**
   * The carousel will be playing automatically and pause when hovered with the mouse. For accessibility reasons, it is recommended to avoid using autoplaying carousels.
   */
  autoplay?: boolean | string;
  /**
   * The carousel will be animated using a fade transition instead of a slide.
   */
  fade?: boolean | string;
  /**
   * The unique identifier of the carousel.
   */
  id?: string;
  /**
   * The images to display inside the carousel.
   */
  images?: ImageOptions[];
  /**
   * The hidden text that will be displayed inside the next button.
   */
  next?: string;
  /**
   * The hidden text that will be displayed inside the next button.
   */
  previous?: string;
  /**
   * When set to false, the support of swiping left/right on touchscreen devices will be disabled.
   */
  touch?: boolean | string;
};
