import type { Meta, StoryObj } from "@storybook/vue3";

import TarPagination from "./TarPagination.vue";

const meta = {
  title: "Components/TarPagination",
  component: TarPagination,
  tags: ["autodocs"],
  argTypes: {
    position: { control: "select", options: ["left", "center", "right"] },
    size: { control: "select", options: ["small", "medium", "large"] },
  },
  args: {
    ariaFirst: "First",
    ariaLabel: "Pagination example",
    ariaLast: "Last",
    ariaNext: "Next",
    ariaPrevious: "Previous",
    count: 10,
    first: "First",
    last: "Last",
    modelValue: 1,
    next: "Next",
    pages: 5,
    position: "center",
    previous: "Previous",
    size: "medium",
    total: 94,
  },
} satisfies Meta<typeof TarPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const SymbolButtons: Story = {
  args: {
    first: "«",
    last: "»",
    next: "›",
    previous: "‹",
  },
};

export const DifferentPositions: Story = {
  render: (args) => ({
    components: { TarPagination },
    setup() {
      return { args };
    },
    template: `
      <TarPagination v-bind="args" position="left" />
      <TarPagination v-bind="args" position="center" />
      <TarPagination v-bind="args" position="right" />
    `,
  }),
};

export const DifferentSizes: Story = {
  render: (args) => ({
    components: { TarPagination },
    setup() {
      return { args };
    },
    template: `
      <TarPagination v-bind="args" size="small" />
      <TarPagination v-bind="args" size="medium" />
      <TarPagination v-bind="args" size="large" />
    `,
  }),
};
