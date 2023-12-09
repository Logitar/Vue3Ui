import type { Meta, StoryObj } from "@storybook/vue3";

import AppSpinner from "./AppSpinner.vue";

const meta = {
  title: "Components/AppSpinner",
  component: AppSpinner,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] },
  },
  args: {
    grow: false,
    inline: false,
    small: false,
    text: "Loading...",
    variant: undefined,
  },
} satisfies Meta<typeof AppSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleSpinner: Story = {};

export const GrowSpinners: Story = {
  render: () => ({
    components: { AppSpinner },
    template: `
      <AppSpinner grow variant="primary" />
      <span class="me-2"></span>
      <AppSpinner grow variant="secondary" />
      <span class="me-2"></span>
      <AppSpinner grow variant="success" />
      <span class="me-2"></span>
      <AppSpinner grow variant="danger" />
      <span class="me-2"></span>
      <AppSpinner grow variant="warning" />
      <span class="me-2"></span>
      <AppSpinner grow variant="info" />
      <span class="me-2"></span>
      <AppSpinner grow variant="light" />
      <span class="me-2"></span>
      <AppSpinner grow variant="dark" />
    `,
  }),
};

export const InlineRotatingSpinners: Story = {
  render: () => ({
    components: { AppSpinner },
    template: `
      <AppSpinner inline small variant="primary" />
      <span class="me-2"></span>
      <AppSpinner inline small variant="secondary" />
      <span class="me-2"></span>
      <AppSpinner inline small variant="success" />
      <span class="me-2"></span>
      <AppSpinner inline small variant="danger" />
      <span class="me-2"></span>
      <AppSpinner inline small variant="warning" />
      <span class="me-2"></span>
      <AppSpinner inline small variant="info" />
      <span class="me-2"></span>
      <AppSpinner inline small variant="light" />
      <span class="me-2"></span>
      <AppSpinner inline small variant="dark" />
    `,
  }),
};
