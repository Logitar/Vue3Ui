import type { Meta, StoryObj } from "@storybook/vue3";

import AppButton from "./AppButton.vue";

const meta = {
  title: "Components/AppButton",
  component: AppButton,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "select", options: ["fas fa-ban", "fas fa-chevron-left", "fas fa-floppy-disk", "fas fa-house", "fas fa-minus", "fas fa-plus", "fas fa-rotate", "fas fa-trash-can", "fas fa-xmark"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    type: { control: "select", options: ["button", "submit", "reset"] },
    variant: { control: "select", options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"] }
  },
  args: {
    disabled: false,
    icon: "fas fa-floppy-disk",
    loading: false,
    name: undefined,
    nowrap: false,
    outline: false,
    size: "medium",
    status: "Loading...",
    text: "Click me!",
    to: undefined,
    type: "button",
    value: undefined,
    variant: "primary"
  }
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const LoadingDisabled: Story = {
  name: "Loading & Disabled",
  args: {
    disabled: true,
    loading: true,
    variant: "warning"
  }
}

export const Outlined: Story = {
  args: { outline: true }
}

export const LargeSuccess: Story = {
  args: {
    size: "large",
    variant: "success"
  }
}

export const SmallDanger: Story = {
  args: {
    size: "small",
    variant: "danger"
  }
}
