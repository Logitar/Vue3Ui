import type { Meta, StoryObj } from "@storybook/vue3";
import { faKey, faRobot, faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import AppAvatar from "./AppAvatar.vue";

library.add(faKey, faRobot, faUser);

const meta = {
  title: "Components/AppAvatar",
  component: AppAvatar,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: ["fas fa-key", "fas fa-robot", "fas fa-user"],
    },
    variant: { control: "select", options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] },
  },
  args: {
    displayName: "Francis Pion",
    emailAddress: "",
    icon: undefined,
    size: 64,
    url: "francis-pion.jpg",
    variant: "secondary",
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

export const Icons: Story = {
  render: () => ({
    components: { AppAvatar },
    template: `
      <AppAvatar icon="fas fa-user" size="48" />
      <span class="me-2"></span>
      <AppAvatar icon="fas fa-key" size="48" />
      <span class="me-2"></span>
      <AppAvatar icon="fas fa-robot" size="48" />
    `,
  }),
};

export const ColoredAvatars: Story = {
  render: () => ({
    components: { AppAvatar },
    template: `
      <AppAvatar size="48" variant="primary" />
      <span class="me-2"></span>
      <AppAvatar size="48" variant="secondary" />
      <span class="me-2"></span>
      <AppAvatar size="48" variant="success" />
      <span class="me-2"></span>
      <AppAvatar size="48" variant="danger" />
      <span class="me-2"></span>
      <AppAvatar size="48" variant="warning" />
      <span class="me-2"></span>
      <AppAvatar size="48" variant="info" />
      <span class="me-2"></span>
      <AppAvatar size="48" variant="light" />
      <span class="me-2"></span>
      <AppAvatar size="48" variant="dark" />
    `,
  }),
};
