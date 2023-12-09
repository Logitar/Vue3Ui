import type { Meta, StoryObj } from "@storybook/vue3";

import AppAlert from "./AppAlert.vue";

const meta = {
  title: "Components/AppAlert",
  component: AppAlert,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] },
  },
  args: {
    dismissible: false,
    modelValue: undefined,
    show: true,
    variant: "primary",
  },
} satisfies Meta<typeof AppAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    dismissible: true,
    variant: "warning",
  },
};
