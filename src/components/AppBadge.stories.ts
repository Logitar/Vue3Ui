import type { Meta, StoryObj } from "@storybook/vue3";

import AppBadge from "./AppBadge.vue";

const meta = {
  title: "Components/AppBadge",
  component: AppBadge,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] },
  },
  args: {
    rounded: false,
    variant: "primary",
  },
  render: (args) => ({
    components: { AppBadge },
    setup() {
      return { args };
    },
    template: `<AppBadge v-bind="args">New!</AppBadge>`,
  }),
} satisfies Meta<typeof AppBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Rounded: Story = {
  args: { rounded: true },
};

export const ColoredBadges: Story = {
  render: () => ({
    components: { AppBadge },
    template: `
      <AppBadge show variant="primary">New!</AppBadge>
      <span class="me-2"></span>
      <AppBadge show variant="secondary">New!</AppBadge>
      <span class="me-2"></span>
      <AppBadge show variant="success">New!</AppBadge>
      <span class="me-2"></span>
      <AppBadge show variant="danger">New!</AppBadge>
      <span class="me-2"></span>
      <AppBadge show variant="warning">New!</AppBadge>
      <span class="me-2"></span>
      <AppBadge show variant="info">New!</AppBadge>
      <span class="me-2"></span>
      <AppBadge show variant="light">New!</AppBadge>
      <span class="me-2"></span>
      <AppBadge show variant="dark">New!</AppBadge>
    `,
  }),
};
