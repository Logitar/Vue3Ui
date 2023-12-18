import type { Meta, StoryObj } from "@storybook/vue3";

import TarButton from "./TarButton.vue";
import TarModal from "./TarModal.vue";

const meta = {
  title: "Components/TarModal",
  component: TarModal,
  tags: ["autodocs"],
  args: {
    close: "Close",
    id: "modal",
    title: "Modal title",
  },
  render: (args) => ({
    components: { TarButton, TarModal },
    setup() {
      return { args };
    },
    template: `
      <TarButton data-bs-toggle="modal" data-bs-target="#modal">Show modal</TarButton>
      <TarModal v-bind="args">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rutrum leo. Phasellus nec mattis metus. In iaculis egestas ullamcorper. Sed vel nunc ac ex pulvinar mollis at vitae tellus. In hac habitasse platea dictumst. Duis sed bibendum sapien. Aliquam ut risus semper, fringilla nulla nec, pellentesque elit.
      </TarModal>
    `,
  }),
} satisfies Meta<typeof TarModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
