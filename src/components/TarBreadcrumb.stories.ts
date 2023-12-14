import type { Meta, StoryObj } from "@storybook/vue3";

import TarBreadcrumb from "./TarBreadcrumb.vue";

const meta = {
  title: "Components/TarBreadcrumb",
  component: TarBreadcrumb,
  tags: ["autodocs"],
  args: {
    ariaLabel: "",
    breadcrumbs: [{ text: "Root", href: "/" }, { text: "Parent", href: "/parent" }, { text: "You are here." }],
    divider: "",
  },
} satisfies Meta<typeof TarBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const CustomDivider: Story = {
  args: { divider: "›" },
};
