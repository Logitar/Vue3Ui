import type { Meta, StoryObj } from "@storybook/vue3";

import TarTab from "./TarTab.vue";
import TarTabs from "./TarTabs.vue";

const meta = {
  title: "Components/TarTab",
  component: TarTab,
  tags: ["autodocs"],
  args: {
    active: true,
    disabled: false,
    id: "my-tab",
    title: "My Tab",
  },
  render: (args) => ({
    components: { TarTab, TarTabs },
    setup() {
      return { args };
    },
    template: `
      <TarTabs>
        <TarTab v-bind="args">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem mi, porttitor eget malesuada at, malesuada vel lectus. Suspendisse arcu quam, porta nec blandit non, fringilla aliquet tellus. Morbi tristique eget elit nec ornare. Quisque sit amet commodo lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus lacinia ornare massa in convallis. Suspendisse at ex maximus enim tristique dictum ut vel dui. Quisque vitae nibh rhoncus, auctor purus eget, lobortis lacus. Ut mattis magna et augue vehicula tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. In quis mi eleifend, imperdiet dui nec, tempor massa. Nulla dictum ipsum sed ex vulputate, ac suscipit erat tempus. Cras nulla sapien, maximus in ultricies quis, sollicitudin in sapien. Praesent molestie velit sed semper imperdiet. Integer pellentesque malesuada vestibulum.
          </p>
        </TarTab>
      </TarTabs>
    `,
  }),
} satisfies Meta<typeof TarTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Inactive: Story = {
  args: { active: false },
};
