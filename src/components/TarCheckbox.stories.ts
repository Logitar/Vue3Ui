import type { Meta, StoryObj } from "@storybook/vue3";

import TarCheckbox from "./TarCheckbox.vue";

const meta = {
  title: "Components/TarCheckbox",
  component: TarCheckbox,
  tags: ["autodocs"],
  args: {
    disabled: false,
    id: "completed",
    inline: false,
    label: "Completed",
    modelValue: false,
    name: "",
    required: false,
    reverse: false,
    switch: false,
    value: "",
  },
} satisfies Meta<typeof TarCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const CheckboxVsSwitch: Story = {
  name: "Checkbox vs. Switch",
  render: (args) => ({
    components: { TarCheckbox },
    setup() {
      return { args };
    },
    template: `
      <TarCheckbox v-bind="args" id="checkbox" />
      <TarCheckbox v-bind="args" id="switch" switch />
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { TarCheckbox },
    setup() {
      return { args };
    },
    template: `
      <TarCheckbox v-bind="args" id="disabled-checkbox" />
      <TarCheckbox v-bind="args" id="disabled-switch" switch />
    `,
  }),
};

export const Inline: Story = {
  args: {
    inline: true,
  },
  render: (args) => ({
    components: { TarCheckbox },
    setup() {
      return { args };
    },
    template: `
      <TarCheckbox v-bind="args" id="inline-checkbox" />
      <TarCheckbox v-bind="args" id="inline-switch" switch />
    `,
  }),
};

export const Reverse: Story = {
  args: {
    reverse: true,
  },
  render: (args) => ({
    components: { TarCheckbox },
    setup() {
      return { args };
    },
    template: `
      <TarCheckbox v-bind="args" id="reverse-checkbox" />
      <TarCheckbox v-bind="args" id="reverse-switch" switch />
    `,
  }),
};
