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
    pill: false,
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

export const Pill: Story = {
  args: { pill: true },
};

export const ColoredBadges: Story = {
  render: () => ({
    components: { TarBadge },
    template: `
      <TarBadge variant="primary">primary</TarBadge>
      <span class="me-2"></span>
      <TarBadge variant="secondary">secondary</TarBadge>
      <span class="me-2"></span>
      <TarBadge variant="success">success</TarBadge>
      <span class="me-2"></span>
      <TarBadge variant="danger">danger</TarBadge>
      <span class="me-2"></span>
      <TarBadge variant="warning">warning</TarBadge>
      <span class="me-2"></span>
      <TarBadge variant="info">info</TarBadge>
      <span class="me-2"></span>
      <TarBadge variant="light">light</TarBadge>
      <span class="me-2"></span>
      <TarBadge variant="dark">dark</TarBadge>
    `,
  }),
};
