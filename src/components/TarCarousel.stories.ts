import type { Meta, StoryObj } from "@storybook/vue3";

import TarCarousel from "./TarCarousel.vue";

const meta = {
  title: "Components/TarCarousel",
  component: TarCarousel,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    autoplay: false,
    fade: false,
    id: "carousel",
    images: [
      { src: "autumn.jpg", width: 1000, height: 600 },
      { src: "winter.jpg", width: 1000, height: 600 },
      { src: "spring.jpg", width: 1000, height: 600 },
      { src: "summer.jpg", width: 1000, height: 600 },
    ],
    next: "Next",
    previous: "Previous",
    touch: true,
  },
} satisfies Meta<typeof TarCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const FadingCarousel: Story = {
  args: {
    fade: true,
    id: "fading",
  },
};

export const AutoplayingCarousel: Story = {
  args: {
    autoplay: true,
    id: "autoplaying",
  },
};

export const NoTouchSupport: Story = {
  args: {
    touch: false,
    id: "no-touch",
  },
};
