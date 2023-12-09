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

export const Primary: Story = {
  args: {
    grow: true,
    variant: "warning",
  },
};

export const Secondary: Story = {
  args: {
    inline: true,
    small: true,
  },
};
