import type { Meta, StoryObj } from "@storybook/vue3";

import AppAvatar from "./AppAvatar.vue";

const meta = {
  title: "Components/AppAvatar",
  component: AppAvatar,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    displayName: "Francis Pion",
    emailAddress: "",
    size: 64,
    url: "francis-pion.jpg",
  },
} satisfies Meta<typeof AppAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Gravatar: Story = {
  args: {
    emailAddress: "user@test.com",
    url: undefined,
  },
};
