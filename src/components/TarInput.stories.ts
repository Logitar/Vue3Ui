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
    name: "firstName",
    placeholder: "Enter your first name in this field.",
    readonly: false,
    required: true,
    type: "text",
  },
} satisfies Meta<typeof TarInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
