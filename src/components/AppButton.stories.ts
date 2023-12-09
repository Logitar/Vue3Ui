import type { Meta, StoryObj } from "@storybook/vue3";

import AppButton from "./AppButton.vue";

const meta = {
  title: "Components/AppButton",
  component: AppButton,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: [
        "fas fa-ban",
        "fas fa-chevron-left",
        "fas fa-floppy-disk",
        "fas fa-house",
        "fas fa-minus",
        "fas fa-plus",
        "fas fa-rotate",
        "fas fa-trash-can",
        "fas fa-xmark",
      ],
    },
    size: { control: "select", options: ["small", "medium", "large"] },
    type: { control: "select", options: ["button", "submit", "reset"] },
    variant: { control: "select", options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"] },
  },
  args: {
    disabled: false,
    icon: undefined,
    loading: false,
    name: undefined,
    nowrap: false,
    outline: false,
    size: "medium",
    status: "Loading...",
    text: "Click me!",
    type: "button",
    value: undefined,
    variant: "primary",
  },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const LoadingDisabled: Story = {
  name: "Loading & Disabled",
  args: {
    disabled: true,
    loading: true,
  },
};

export const WithIcon: Story = {
  args: {
    icon: "fas fa-floppy-disk",
  },
};

export const DifferentSizes: Story = {
  render: () => ({
    components: { AppButton },
    template: `
      <AppButton size="small">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton size="medium">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton size="large">Click me!</AppButton>
    `,
  }),
};

export const ColoredButtons: Story = {
  render: () => ({
    components: { AppButton },
    template: `
      <AppButton variant="primary">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton variant="secondary">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton variant="success">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton variant="danger">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton variant="warning">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton variant="info">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton variant="light">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton variant="dark">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton variant="link">Click me!</AppButton>
    `,
  }),
};

export const OutlinedButtons: Story = {
  render: () => ({
    components: { AppButton },
    template: `
      <AppButton outline variant="primary">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton outline variant="secondary">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton outline variant="success">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton outline variant="danger">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton outline variant="warning">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton outline variant="info">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton outline variant="light">Click me!</AppButton>
      <span class="me-2"></span>
      <AppButton outline variant="dark">Click me!</AppButton>
    `,
  }),
};
