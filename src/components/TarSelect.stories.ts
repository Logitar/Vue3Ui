import type { Meta, StoryObj } from "@storybook/vue3";

import TarSelect from "./TarSelect.vue";

const meta = {
  title: "Components/TarSelect",
  component: TarSelect,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
  },
  args: {
    ariaLabel: "",
    describedBy: "",
    disabled: false,
    floating: false,
    id: "animal",
    label: "Favorite Animal",
    modelValue: "",
    multiple: false,
    name: "favoriteAnimal",
    options: [
      { text: "Birds", value: "birds" },
      { text: "Cats", value: "cats" },
      { text: "Dogs", value: "dogs" },
    ],
    placeholder: "Select your favorite animal",
    required: true,
    size: "medium",
  },
} satisfies Meta<typeof TarSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Floating: Story = {
  args: {
    floating: true,
    id: "floating",
  },
};

export const RequiredVsOptional: Story = {
  name: "Required vs. Optional Selects",
  args: { required: false },
  render: (args) => ({
    components: { TarSelect },
    setup() {
      return { args };
    },
    template: `
      <div class="row">
        <TarSelect class="col" v-bind="args" id="required" required />
        <TarSelect class="col" v-bind="args" id="optional" />
      </div>
    `,
  }),
};

export const SelectWithHelpText: Story = {
  name: "Select with help text",
  args: {
    describedBy: "favorite-animal-help",
    id: "favorite-animal-with-help-text",
  },
  render: (args) => ({
    components: { TarSelect },
    setup() {
      return { args };
    },
    template: `
      <TarSelect v-bind="args">
        <template #after>
          <div id="favorite-animal-help" class="form-text">We will not disclose it to anyone, we promise!</div>
        </template>
      </TarSelect>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    id: "favorite-animal-disabled",
    required: false,
  },
};

export const DifferentSizes: Story = {
  render: () => ({
    components: { TarSelect },
    template: `
      <TarSelect placeholder="Small Select" size="small" />
      <TarSelect placeholder="Medium Select" size="medium" />
      <TarSelect placeholder="Large Select" size="large" />
    `,
  }),
};
