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
      { src: "forest.jpg", width: 1000, height: 600 },
      { src: "mount-currie.jpg", width: 1000, height: 600 },
      { src: "snowy-owl.jpg", width: 1000, height: 600 },
      { src: "taklamakan.jpg", width: 1000, height: 600 },
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
  args: { fade: true },
};

export const AutoplayingCarousel: Story = {
  args: { autoplay: true },
};

export const NoTouchSupport: Story = {
  args: { touch: false },
};
