import type { Meta, StoryObj } from "@storybook/vue3";

import TarTextarea from "./TarTextarea.vue";

const meta = {
  title: "Components/TarTextarea",
  component: TarTextarea,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
  },
  args: {
    cols: 20,
    describedBy: "",
    disabled: false,
    id: "description",
    label: "Description",
    max: 1000,
    min: 0,
    modelValue: "",
    name: "description",
    placeholder: "Describe yourself here.",
    plaintext: false,
    readonly: false,
    required: false,
    rows: 5,
    size: "medium",
  },
} satisfies Meta<typeof TarTextarea>;

export default meta;
type Story = StoryObj<typeof TarTextarea>;

export const Primary: Story = {};

export const RequiredVsOptional: Story = {
  name: "Required vs. Optional Textarea",
  render: (args) => ({
    components: { TarTextarea },
    setup() {
      return { args };
    },
    template: `
      <div class="row">
        <TarTextarea class="col" v-bind="args" id="description-2" required />
        <TarTextarea class="col" v-bind="args" id="description-3" />
      </div>
    `,
  }),
};

export const TextareaWithHelpText: Story = {
  name: "Textarea with help text",
  args: {
    describedBy: "description-help",
    id: "description-with-help-text",
  },
  render: (args) => ({
    components: { TarTextarea },
    setup() {
      return { args };
    },
    template: `
      <TarTextarea v-bind="args">
        <template #after>
          <div id="description-help" class="form-text">We will not disclose it to anyone, we promise!</div>
        </template>
      </TarTextarea>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    id: "description-disabled",
  },
};

export const ReadonlyVsReadonlyPlaintextInputs: Story = {
  name: "Readonly vs. Readonly Plaintext Inputs",
  render: (args) => ({
    components: { TarTextarea },
    setup() {
      return { args };
    },
    template: `
      <div class="row">
        <TarTextarea v-bind="args" class="col" id="description-4" model-value="Hello World!" readonly />
        <TarTextarea v-bind="args" class="col" id="description-5" model-value="Hello World!" plaintext readonly />
      </div>
    `,
  }),
};

export const DifferentSizes: Story = {
  render: () => ({
    components: { TarTextarea },
    template: `
      <TarTextarea inline placeholder="Small Textarea" size="small" />
      <TarTextarea inline placeholder="Medium Textarea" size="medium" />
      <TarTextarea inline placeholder="Large Textarea" size="large" />
    `,
  }),
};

export const PlayingWithColsAndRows: Story = {
  name: "Playing with Cols and Rows",
  args: { id: "description-6", cols: 10, rows: 20 },
};
