import type { Meta, StoryObj } from "@storybook/vue3";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import TarButton from "./TarButton.vue";
import TarInput from "./TarInput.vue";

library.add(faMagnifyingGlass);

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
    describedBy: "",
    disabled: false,
    floating: false,
    id: "first-name",
    label: "First Name",
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

export const Floating: Story = {
  args: {
    floating: true,
    id: "floating",
  },
};

export const RequiredVsOptional: Story = {
  name: "Required vs. Optional Inputs",
  args: { id: "first-name-2" },
  render: (args) => ({
    components: { TarInput },
    setup() {
      return { args };
    },
    template: `
      <div class="row">
        <TarInput class="col" v-bind="args" />
        <TarInput class="col" id="last-name" label="Last Name" placeholder="Enter your last name in this field." />
      </div>
    `,
  }),
};

export const InputWithHelpText: Story = {
  name: "Input with help text",
  args: {
    describedBy: "first-name-help",
    id: "first-name-with-help-text",
  },
  render: (args) => ({
    components: { TarInput },
    setup() {
      return { args };
    },
    template: `
      <TarInput v-bind="args">
        <template #after>
          <div id="first-name-help" class="form-text">We will not disclose it to anyone, we promise!</div>
        </template>
      </TarInput>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    id: "first-name-disabled",
    required: false,
  },
};

export const ReadonlyVsReadonlyPlaintextInputs: Story = {
  name: "Readonly vs. Readonly Plaintext Inputs",
  render: () => ({
    components: { TarInput },
    template: `
      <div class="row">
        <TarInput class="col" id="email-1" label="Email Address (readonly)" model-value="your@email.com" readonly />
        <TarInput class="col" id="email-2" label="Email Address (readonly & plaintext)" model-value="your@email.com" plaintext readonly />
      </div>
    `,
  }),
};

export const DifferentSizes: Story = {
  render: () => ({
    components: { TarInput },
    template: `
      <TarInput inline placeholder="Small Input" size="small" />
      <TarInput inline placeholder="Medium Input" size="medium" />
      <TarInput inline placeholder="Large Input" size="large" />
    `,
  }),
};

export const TextualInputs: Story = {
  render: () => ({
    components: { TarButton, TarInput },
    template: `
      <TarInput id="name" label="Name" placeholder="👤Enter your name (e.g. Jane Doe)" type="text" />
      <TarInput id="search" label="Search" placeholder="🔍Enter something to search for (e.g. test)" type="search">
        <template #append>
          <TarButton icon="fas fa-magnifying-glass" type="submit" />
        </template>
      </TarInput>
      <TarInput id="url" label="Website" placeholder="🌐Enter the URL to your website (e.g. https://www.test.com)" type="url" />
      <TarInput id="tel" label="Phone Number" min="12" max="12" pattern="^\\+\\d{11}$" placeholder="📱Enter your phone number using E.164 format (e.g. +12345678900)" type="url" />
      <TarInput id="email" label="Email Address" placeholder="📧Enter your email address (e.g. your_email@test.com)" type="email" />
      <TarInput id="password" label="Password" placeholder="🔑Enter your password" type="password" />
    `,
  }),
};

export const NumericInputs: Story = {
  render: () => ({
    components: { TarInput },
    template: `
      <TarInput id="number" label="Even Number" min="2" max="12" step="2" placeholder="🎲Choose an even number between 2 and 12." type="number" />
      <TarInput id="range" label="Volume" min="0" max="100" step="5" type="range" />
    `,
  }),
};

export const DateInputs: Story = {
  render: () => ({
    components: { TarInput },
    template: `
      <TarInput id="date" label="Date of birth" min="1923-01-01" max="2005-12-31" type="date" />
      <TarInput id="time" label="Appointment Time" min="08:00" max="16:30" step="1800" type="time" />
      <TarInput id="datetime-local" label="Purchase Date" min="2013-01-01T00:00" max="2023-12-31T23:59" type="datetime-local" />
      <TarInput id="month" label="Pick your favorite month" min="2023-01" max="2023-12" type="month" />
      <TarInput id="week" label="Pick your next week of vacation" min="2024-W01" max="2024-W52" type="week" />
    `,
  }),
};
