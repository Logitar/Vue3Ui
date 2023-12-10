import type { Meta, StoryObj } from "@storybook/vue3";

import TarSpinner from "./TarSpinner.vue";

const meta = {
  title: "Components/TarSpinner",
  component: TarSpinner,
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
} satisfies Meta<typeof TarSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleSpinner: Story = {};

export const GrowSpinners: Story = {
  render: () => ({
    components: { TarSpinner },
    template: `
      <TarSpinner grow variant="primary" />
      <span class="me-2"></span>
      <TarSpinner grow variant="secondary" />
      <span class="me-2"></span>
      <TarSpinner grow variant="success" />
      <span class="me-2"></span>
      <TarSpinner grow variant="danger" />
      <span class="me-2"></span>
      <TarSpinner grow variant="warning" />
      <span class="me-2"></span>
      <TarSpinner grow variant="info" />
      <span class="me-2"></span>
      <TarSpinner grow variant="light" />
      <span class="me-2"></span>
      <TarSpinner grow variant="dark" />
    `,
  }),
};

export const InlineRotatingSpinners: Story = {
  render: () => ({
    components: { TarSpinner },
    template: `
      <TarSpinner inline small variant="primary" />
      <span class="me-2"></span>
      <TarSpinner inline small variant="secondary" />
      <span class="me-2"></span>
      <TarSpinner inline small variant="success" />
      <span class="me-2"></span>
      <TarSpinner inline small variant="danger" />
      <span class="me-2"></span>
      <TarSpinner inline small variant="warning" />
      <span class="me-2"></span>
      <TarSpinner inline small variant="info" />
      <span class="me-2"></span>
      <TarSpinner inline small variant="light" />
      <span class="me-2"></span>
      <TarSpinner inline small variant="dark" />
    `,
  }),
};
