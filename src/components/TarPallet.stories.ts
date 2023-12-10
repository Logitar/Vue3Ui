import type { Meta, StoryObj } from "@storybook/vue3";

import TarAccordion from "./TarAccordion.vue";
import TarPallet from "./TarPallet.vue";

const meta = {
  title: "Components/TarPallet",
  component: TarPallet,
  tags: ["autodocs"],
  args: {
    active: true,
    id: "contents",
    title: "Contents",
  },
  render: (args) => ({
    components: { TarPallet, TarAccordion },
    setup() {
      return { args };
    },
    template: `
      <TarAccordion>
        <TarPallet v-bind="args">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem mi, porttitor eget malesuada at, malesuada vel lectus. Suspendisse arcu quam, porta nec blandit non, fringilla aliquet tellus. Morbi tristique eget elit nec ornare. Quisque sit amet commodo lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus lacinia ornare massa in convallis. Suspendisse at ex maximus enim tristique dictum ut vel dui. Quisque vitae nibh rhoncus, auctor purus eget, lobortis lacus. Ut mattis magna et augue vehicula tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. In quis mi eleifend, imperdiet dui nec, tempor massa. Nulla dictum ipsum sed ex vulputate, ac suscipit erat tempus. Cras nulla sapien, maximus in ultricies quis, sollicitudin in sapien. Praesent molestie velit sed semper imperdiet. Integer pellentesque malesuada vestibulum.
          </p>
        </TarPallet>
      </TarAccordion>
    `,
  }),
} satisfies Meta<typeof TarPallet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Opened: Story = {};

export const Closed: Story = {
  args: { active: false },
};
