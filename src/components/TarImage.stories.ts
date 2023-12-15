import type { Meta, StoryObj } from "@storybook/vue3";

import TarImage from "./TarImage.vue";

const meta = {
  title: "Components/TarImage",
  component: TarImage,
  tags: ["autodocs"],
  args: {
    alt: "Francis Pion's picture",
    circle: false,
    fluid: false,
    height: 128,
    rounded: false,
    src: "francis-pion.jpg",
    thumbnail: false,
    width: 128,
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
