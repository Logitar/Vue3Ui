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
    close: "Close",
    dismissible: false,
    modelValue: false,
    show: true,
    variant: "primary",
  },
  render: (args) => ({
    components: { AppAlert },
    setup() {
      return { args };
    },
    template: `<AppAlert v-bind="args">This is an alert.</AppAlert>`,
  }),
} satisfies Meta<typeof AppAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dismissible: Story = {
  args: { dismissible: true },
};

export const ColoredAlerts: Story = {
  render: () => ({
    components: { AppAlert },
    template: `
      <AppAlert show variant="primary">This is an <strong>important</strong> message.</AppAlert>
      <AppAlert show variant="secondary">This is another message.</AppAlert>
      <AppAlert show variant="success"><strong>Success!</strong> The requested operation has completed.</AppAlert>
      <AppAlert show variant="danger"><strong>Error!</strong> An unexpected error occurred.</AppAlert>
      <AppAlert show variant="warning"><strong>Warning!</strong> There are validation errors in the form below.</AppAlert>
      <AppAlert show variant="info">Some useful info here...</AppAlert>
      <AppAlert show variant="light">Works better in a dark theme.</AppAlert>
      <AppAlert show variant="dark">Works better in a light theme.</AppAlert>
    `,
  }),
};
