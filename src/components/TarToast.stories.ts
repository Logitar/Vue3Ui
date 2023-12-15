import type { Meta, StoryObj } from "@storybook/vue3";

import TarToast from "./TarToast.vue";

const meta = {
  title: "Components/TarToast",
  component: TarToast,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] },
  },
  args: {
    close: "Close",
    duration: 0,
    fade: true,
    id: "toast",
    solid: false,
    title: "Title",
    variant: "primary",
  },
  render: (args) => ({
    components: { TarToast },
    setup() {
      return { args };
    },
    template: `<TarToast v-bind="args">Hello World!</TarToast>`,
  }),
} satisfies Meta<typeof TarToast>;

export default meta;
type Story = StoryObj<typeof TarToast>;

export const Primary: Story = {};

export const FadingVsNotFading: Story = {
  name: "Fading vs. Not Fading",
  render: (args) => ({
    components: { TarToast },
    setup() {
      return { args };
    },
    template: `
      <div class="row">
        <div class="col">
          <TarToast v-bind="args" id="fading">Hello World!</TarToast>
        </div>
        <div class="col">
          <TarToast v-bind="args" :fade="false" id="not-fading">Hello World!</TarToast>
        </div>
      </div>
    `,
  }),
};

export const SolidVsNotSolid: Story = {
  name: "Solid vs. Not Solid",
  render: (args) => ({
    components: { TarToast },
    setup() {
      return { args };
    },
    template: `
      <div class="row">
        <div class="col">
          <TarToast v-bind="args" id="solid" solid>Hello World!</TarToast>
        </div>
        <div class="col">
          <TarToast v-bind="args" id="not-solid">Hello World!</TarToast>
        </div>
      </div>
    `,
  }),
};

export const DifferentColors: Story = {
  render: (args) => ({
    components: { TarToast },
    setup() {
      return { args };
    },
    template: `
      <TarToast v-bind="args" id="toast-primary" variant="primary">Hello World!</TarToast>
      <div class="my-2"></div>
      <TarToast v-bind="args" id="secondary" variant="secondary">Hello World!</TarToast>
      <div class="my-2"></div>
      <TarToast v-bind="args" id="success" variant="success">Hello World!</TarToast>
      <div class="my-2"></div>
      <TarToast v-bind="args" id="danger" variant="danger">Hello World!</TarToast>
      <div class="my-2"></div>
      <TarToast v-bind="args" id="warning" variant="warning">Hello World!</TarToast>
      <div class="my-2"></div>
      <TarToast v-bind="args" id="info" variant="info">Hello World!</TarToast>
      <div class="my-2"></div>
      <TarToast v-bind="args" id="light" variant="light">Hello World!</TarToast>
      <div class="my-2"></div>
      <TarToast v-bind="args" id="dark" variant="dark">Hello World!</TarToast>
    `,
  }),
};
