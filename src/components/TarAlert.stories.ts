import type { Meta, StoryObj } from "@storybook/vue3";

import TarAlert from "./TarAlert.vue";

const meta = {
  title: "Components/TarAlert",
  component: TarAlert,
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
    components: { TarAlert },
    setup() {
      return { args };
    },
    template: `<TarAlert v-bind="args">This is an alert.</TarAlert>`,
  }),
} satisfies Meta<typeof TarAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dismissible: Story = {
  args: { dismissible: true },
};

export const ColoredAlerts: Story = {
  render: () => ({
    components: { TarAlert },
    template: `
      <TarAlert show variant="primary">primary: this is an <strong>important</strong> message.</TarAlert>
      <TarAlert show variant="secondary">secondary: this is another message.</TarAlert>
      <TarAlert show variant="success"><strong>success</strong>: the requested operation has completed.</TarAlert>
      <TarAlert show variant="danger"><strong>danger</strong>: an unexpected error occurred.</TarAlert>
      <TarAlert show variant="warning"><strong>warning</strong>: there are validation errors in the form below.</TarAlert>
      <TarAlert show variant="info">info: some useful info here...</TarAlert>
      <TarAlert show variant="light">light: works better in a dark theme.</TarAlert>
      <TarAlert show variant="dark">dark: works better in a light theme.</TarAlert>
    `,
  }),
};
