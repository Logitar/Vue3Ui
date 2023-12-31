import type { Meta, StoryObj } from "@storybook/vue3";

import TarImage from "./TarImage.vue";

const meta = {
  title: "Components/TarImage",
  component: TarImage,
  tags: ["autodocs"],
  args: {
    alt: "A beautiful castle scenery.",
    circle: false,
    fluid: false,
    height: 509,
    rounded: false,
    src: "castle.jpg",
    thumbnail: false,
    width: 800,
  },
} satisfies Meta<typeof TarImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const MissingImage: Story = {
  args: { src: "missing.jpg" },
};

export const Thumbnail: Story = {
  args: { thumbnail: true },
};

export const RoundedVsCircle: Story = {
  name: "Rounded vs. Circle",
  render: (args) => ({
    components: { TarImage },
    setup() {
      return { args };
    },
    template: `
      <TarImage v-bind="args" rounded />
      <span class="me-2" />
      <TarImage v-bind="args" circle />
    `,
  }),
};

export const Fluid: Story = {
  args: {
    fluid: true,
    height: undefined,
    width: undefined,
  },
};
