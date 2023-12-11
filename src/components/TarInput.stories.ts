import type { Meta, StoryObj } from "@storybook/vue3";

import TarInput from "./TarInput.vue";

const meta = {
  title: "Components/TarInput",
  component: TarInput,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["text"] },
  },
  args: {
    disabled: false,
    id: "first-name",
    inline: false,
    label: "First name",
    max: 100,
    modelValue: "",
    min: 1,
    name: "firstName",
    pattern: "",
    placeholder: "Enter your first name in this field.",
    plaintext: false,
    readonly: false,
    required: true,
    step: 0,
    type: "text",
  },
} satisfies Meta<typeof TarInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
