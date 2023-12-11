import type { Meta, StoryObj } from "@storybook/vue3";

import TarInput from "./TarInput.vue";

const meta = {
  title: "Components/TarInput",
  component: TarInput,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    type: {
      control: "select",
      options: ["text", "search", "url", "tel", "email", "password", "number", "range", "date", "time", "month", "week", "datetime-local"],
    },
  },
  args: {
    disabled: false,
    id: "first-name",
    inline: false,
    label: "First name",
    max: 100,
    min: 1,
    modelValue: "",
    name: "firstName",
    pattern: "",
    placeholder: "Enter your first name in this field.",
    plaintext: false,
    readonly: false,
    required: true,
    size: "medium",
    step: 0,
    type: "text",
  },
} satisfies Meta<typeof TarInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
