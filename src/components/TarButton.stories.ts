import type { Meta, StoryObj } from "@storybook/vue3";
import { faBan, faChevronLeft, faFloppyDisk, faHouse, faMinus, faPlus, faRotate, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import TarButton from "./TarButton.vue";

library.add(faBan, faChevronLeft, faFloppyDisk, faHouse, faMinus, faPlus, faRotate, faTrashCan, faXmark);

const meta = {
  title: "Components/TarButton",
  component: TarButton,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: [
        "fas fa-ban",
        "fas fa-chevron-left",
        "fas fa-floppy-disk",
        "fas fa-house",
        "fas fa-minus",
        "fas fa-plus",
        "fas fa-rotate",
        "fas fa-trash-can",
        "fas fa-xmark",
      ],
    },
    size: { control: "select", options: ["small", "medium", "large"] },
    type: { control: "select", options: ["button", "submit", "reset"] },
    variant: { control: "select", options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"] },
  },
  args: {
    disabled: false,
    icon: undefined,
    loading: false,
    name: undefined,
    nowrap: false,
    outline: false,
    size: "medium",
    status: "Loading...",
    text: "Click me!",
    type: "button",
    value: undefined,
    variant: "primary",
  },
} satisfies Meta<typeof TarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const LoadingDisabled: Story = {
  name: "Loading & Disabled",
  args: {
    disabled: true,
    loading: true,
  },
};

export const WithIcon: Story = {
  args: { icon: "fas fa-floppy-disk" },
};

export const DifferentSizes: Story = {
  render: () => ({
    components: { TarButton },
    template: `
      <TarButton size="small">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton size="medium">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton size="large">Click me!</TarButton>
    `,
  }),
};

export const ColoredButtons: Story = {
  render: () => ({
    components: { TarButton },
    template: `
      <TarButton variant="primary">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton variant="secondary">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton variant="success">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton variant="danger">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton variant="warning">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton variant="info">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton variant="light">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton variant="dark">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton variant="link">Click me!</TarButton>
    `,
  }),
};

export const OutlinedButtons: Story = {
  render: () => ({
    components: { TarButton },
    template: `
      <TarButton outline variant="primary">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton outline variant="secondary">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton outline variant="success">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton outline variant="danger">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton outline variant="warning">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton outline variant="info">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton outline variant="light">Click me!</TarButton>
      <span class="me-2"></span>
      <TarButton outline variant="dark">Click me!</TarButton>
    `,
  }),
};
