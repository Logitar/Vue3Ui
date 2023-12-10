import type { Meta, StoryObj } from "@storybook/vue3";

import TarTab from "./TarTab.vue";
import TarTabs from "./TarTabs.vue";

const meta = {
  title: "Components/TarTabs",
  component: TarTabs,
  tags: ["autodocs"],
  args: {
    id: "my-tabs",
  },
  render: (args) => ({
    components: { TarTab, TarTabs },
    setup() {
      return { args };
    },
    template: `
      <TarTabs v-bind="args">
        <TarTab active title="Active">
          <p>There are the contents of the active tab.</p>
        </TarTab>
        <TarTab title="Tab #1">
          <p>These are the contents of the tab #1.</p>
        </TarTab>
        <TarTab title="Tab #2">
          <p>These are the contents of the tab #2.</p>
        </TarTab>
        <TarTab disabled title="Disabled" />
      </TarTabs>
    `,
  }),
} satisfies Meta<typeof TarTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
