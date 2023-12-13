import type { Meta, StoryObj } from "@storybook/vue3";

import TarBadge from "./TarBadge.vue";

const meta = {
  title: "Components/TarBadge",
  component: TarBadge,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] },
  },
  args: {
    rounded: false,
    variant: "primary",
  },
  render: (args) => ({
    components: { TarBadge },
    setup() {
      return { args };
    },
    template: `<TarBadge v-bind="args">New!</TarBadge>`,
  }),
} satisfies Meta<typeof TarBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Rounded: Story = {
  args: { rounded: true },
};

export const ColoredBadges: Story = {
  render: () => ({
    components: { TarBadge },
    template: `
      <TarBadge show variant="primary">primary</TarBadge>
      <span class="me-2"></span>
      <TarBadge show variant="secondary">secondary</TarBadge>
      <span class="me-2"></span>
      <TarBadge show variant="success">success</TarBadge>
      <span class="me-2"></span>
      <TarBadge show variant="danger">danger</TarBadge>
      <span class="me-2"></span>
      <TarBadge show variant="warning">warning</TarBadge>
      <span class="me-2"></span>
      <TarBadge show variant="info">info</TarBadge>
      <span class="me-2"></span>
      <TarBadge show variant="light">light</TarBadge>
      <span class="me-2"></span>
      <TarBadge show variant="dark">dark</TarBadge>
    `,
  }),
};
