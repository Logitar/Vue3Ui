import type { Meta, StoryObj } from "@storybook/vue3";

import TarProgress from "./TarProgress.vue";

const meta = {
  title: "Components/TarProgress",
  component: TarProgress,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] },
  },
  args: {
    animated: false,
    ariaLabel: "Basic Example",
    label: "",
    max: 100,
    min: 0,
    striped: false,
    value: 50,
    variant: "primary",
  },
} satisfies Meta<typeof TarProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Striped: Story = {
  args: { striped: true },
};

export const StripedAndAnimated: Story = {
  name: "Striped & Animated",
  args: {
    animated: true,
    striped: true,
  },
};

export const WithLabel: Story = {
  args: { label: "50%" },
};

export const DifferentColors: Story = {
  render: (args) => ({
    components: { TarProgress },
    setup() {
      return { args };
    },
    template: `
      <TarProgress class="mb-3" v-bind="args" label="primary" variant="primary" />
      <TarProgress class="mb-3" v-bind="args" label="secondary" variant="secondary" />
      <TarProgress class="mb-3" v-bind="args" label="success" variant="success" />
      <TarProgress class="mb-3" v-bind="args" label="danger" variant="danger" />
      <TarProgress class="mb-3" v-bind="args" label="warning" variant="warning" />
      <TarProgress class="mb-3" v-bind="args" label="info" variant="info" />
      <TarProgress class="mb-3" v-bind="args" label="light" variant="light" />
      <TarProgress class="mb-3" v-bind="args" label="dark" variant="dark" />
    `,
  }),
};
