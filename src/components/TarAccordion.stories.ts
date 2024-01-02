import type { Meta, StoryObj } from "@storybook/vue3";

import TarAccordion from "./TarAccordion.vue";
import TarAccordionItem from "./TarAccordionItem.vue";

const meta = {
  title: "Components/TarAccordion",
  component: TarAccordion,
  tags: ["autodocs"],
  args: {
    alwaysOpen: false,
    flush: false,
    id: "my-accordion",
  },
  render: (args) => ({
    components: { TarAccordionItem, TarAccordion },
    setup() {
      return { args };
    },
    template: `
      <TarAccordion v-bind="args">
        <TarAccordionItem active title="Item #1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum luctus mi, vel dignissim mi consectetur nec. Vestibulum in sapien sit amet
            arcu suscipit accumsan ac sit amet risus. Curabitur vel dictum dui. Nam quis ipsum pretium, finibus nunc ut, mollis risus. Suspendisse sed neque ut
            tortor mattis pharetra id molestie nunc. Morbi eu mattis velit. Nam id tortor in lorem convallis aliquet non vitae metus. Vestibulum a nulla
            consequat, vehicula libero at, venenatis risus. Sed nibh turpis, cursus eleifend est fermentum, consectetur viverra felis. Sed tempus elit ac finibus
            porttitor. Morbi sit amet pulvinar purus. Sed eget purus aliquam, condimentum ante sed, eleifend justo. Duis in urna ut massa venenatis maximus.
            Phasellus cursus ex ut leo placerat mattis.
          </p>
        </TarAccordionItem>
        <TarAccordionItem title="Item #2">
          <p>
            Ut fringilla, turpis vel faucibus consequat, risus quam pellentesque lorem, vel egestas ex ex sed neque. Suspendisse aliquam varius cursus. Mauris
            molestie sem vitae elit tempus rhoncus. Donec dignissim lobortis purus at condimentum. Vestibulum ac egestas tortor. Cras rhoncus volutpat est, eu
            mattis lorem tempus ut. Donec fringilla elementum feugiat. Integer finibus, dui ut gravida pharetra, magna nunc tempus turpis, ut rutrum orci metus
            hendrerit massa. Curabitur venenatis nisl at facilisis congue.
          </p>
        </TarAccordionItem>
        <TarAccordionItem title="Item #3">
          <p>
            Etiam vehicula lectus est. Donec iaculis suscipit velit, vel aliquam nibh imperdiet a. Proin tristique enim ut ex accumsan, eu tincidunt ipsum
            dapibus. Mauris quis leo pulvinar, tristique erat non, vulputate ligula. Praesent a nibh dictum, rutrum purus ac, malesuada enim. Donec ac mi a eros
            egestas finibus. Cras at elementum nisl, id accumsan urna. Mauris suscipit eleifend est, nec accumsan nibh auctor non. Duis fringilla viverra
            porttitor. Praesent et cursus lorem. Aenean pellentesque ante eget dictum dignissim. Morbi eu lacus at mauris volutpat facilisis id ut sapien.
          </p>
        </TarAccordionItem>
        <TarAccordionItem title="Item #4">
          <p>
            Curabitur vel massa ligula. Integer pulvinar rutrum risus, sit amet vulputate libero interdum eget. Integer lacinia est faucibus volutpat
            pellentesque. Vivamus tempor turpis eu sapien consequat congue in quis felis. Sed vel sem tellus. Mauris et ornare quam. Cras nec nunc mattis justo
            luctus porttitor porttitor sed quam. Nam suscipit justo metus, sit amet vulputate nulla eleifend at. Ut non velit sit amet mauris laoreet euismod.
            Pellentesque egestas ex non dui iaculis blandit. Nam at tortor sed odio feugiat elementum. Nullam vel massa fringilla, consequat metus et, commodo
            lacus. Aenean dui lectus, mattis et tempus at, scelerisque at nunc. Suspendisse potenti. Phasellus malesuada nibh sapien, non consequat elit gravida
            a.
          </p>
        </TarAccordionItem>
        <TarAccordionItem title="Item #5">
          <p>
            Integer vitae dolor iaculis, eleifend sapien sit amet, blandit dolor. Vivamus quis risus tortor. Integer in ex elit. Proin at gravida elit, nec
            interdum ligula. Donec mi risus, lobortis in consequat finibus, suscipit tincidunt massa. Donec facilisis nisl erat, nec vestibulum purus mollis sed.
            Cras risus velit, mollis dapibus consectetur eu, iaculis id leo. Phasellus mattis arcu ut tincidunt bibendum. Sed luctus laoreet dolor, a dignissim
            odio fringilla eu. Ut tincidunt arcu justo, at congue eros posuere a. Praesent faucibus vestibulum ante. Suspendisse at erat ac tortor sodales mollis.
            Phasellus vel cursus orci. Nunc dictum lectus id libero auctor congue et vel odio.
          </p>
        </TarAccordionItem>
      </TarAccordion>
    `,
  }),
} satisfies Meta<typeof TarAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const AlwaysOpen: Story = {
  args: {
    alwaysOpen: true,
    id: "always-open",
  },
};

export const Flush: Story = {
  args: {
    flush: true,
    id: "flush",
  },
};
