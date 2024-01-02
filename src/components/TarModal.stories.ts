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
      <TarButton data-bs-toggle="modal" data-bs-target="#${args.id}">Show modal</TarButton>
      <TarModal v-bind="args">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rutrum leo. Phasellus nec mattis metus. In iaculis egestas ullamcorper. Sed vel nunc ac ex pulvinar mollis at vitae tellus. In hac habitasse platea dictumst. Duis sed bibendum sapien. Aliquam ut risus semper, fringilla nulla nec, pellentesque elit.
      </TarModal>
    `,
  }),
} satisfies Meta<typeof TarModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const StaticBackdrop: Story = {
  args: {
    id: "static",
    static: true,
  },
  render: (args) => ({
    components: { TarButton, TarModal },
    setup() {
      return { args };
    },
    template: `
      <TarButton data-bs-toggle="modal" data-bs-target="#${args.id}">Show modal</TarButton>
      <TarModal v-bind="args">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rutrum leo. Phasellus nec mattis metus. In iaculis egestas ullamcorper. Sed vel nunc ac ex pulvinar mollis at vitae tellus. In hac habitasse platea dictumst. Duis sed bibendum sapien. Aliquam ut risus semper, fringilla nulla nec, pellentesque elit.
      </TarModal>
    `,
  }),
};

export const VerticallyCentered: Story = {
  args: {
    centered: true,
    id: "centered",
  },
  render: (args) => ({
    components: { TarButton, TarModal },
    setup() {
      return { args };
    },
    template: `
      <TarButton data-bs-toggle="modal" data-bs-target="#${args.id}">Show modal</TarButton>
      <TarModal v-bind="args">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rutrum leo. Phasellus nec mattis metus. In iaculis egestas ullamcorper. Sed vel nunc ac ex pulvinar mollis at vitae tellus. In hac habitasse platea dictumst. Duis sed bibendum sapien. Aliquam ut risus semper, fringilla nulla nec, pellentesque elit.
      </TarModal>
    `,
  }),
};

export const NoAnimation: Story = {
  args: {
    fade: false,
    id: "no-animation-modal",
  },
  render: (args) => ({
    components: { TarButton, TarModal },
    setup() {
      return { args };
    },
    template: `
      <TarButton data-bs-toggle="modal" data-bs-target="#${args.id}">Show modal</TarButton>
      <TarModal v-bind="args">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rutrum leo. Phasellus nec mattis metus. In iaculis egestas ullamcorper. Sed vel nunc ac ex pulvinar mollis at vitae tellus. In hac habitasse platea dictumst. Duis sed bibendum sapien. Aliquam ut risus semper, fringilla nulla nec, pellentesque elit.
      </TarModal>
    `,
  }),
};

export const DifferentSizes: Story = {
  render: (args) => ({
    components: { TarButton, TarModal },
    setup() {
      return { args };
    },
    template: `
      <TarButton class="me-2" data-bs-toggle="modal" data-bs-target="#small-modal">Show Small modal</TarButton>
      <TarModal v-bind="args" id="small-modal" size="small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rutrum leo. Phasellus nec mattis metus. In iaculis egestas ullamcorper. Sed vel nunc ac ex pulvinar mollis at vitae tellus. In hac habitasse platea dictumst. Duis sed bibendum sapien. Aliquam ut risus semper, fringilla nulla nec, pellentesque elit.
      </TarModal>
      <TarButton class="me-2" data-bs-toggle="modal" data-bs-target="#medium-modal">Show Medium modal</TarButton>
      <TarModal v-bind="args" id="medium-modal" size="medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rutrum leo. Phasellus nec mattis metus. In iaculis egestas ullamcorper. Sed vel nunc ac ex pulvinar mollis at vitae tellus. In hac habitasse platea dictumst. Duis sed bibendum sapien. Aliquam ut risus semper, fringilla nulla nec, pellentesque elit.
      </TarModal>
      <TarButton class="me-2" data-bs-toggle="modal" data-bs-target="#large-modal">Show Large modal</TarButton>
      <TarModal v-bind="args" id="large-modal" size="large">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rutrum leo. Phasellus nec mattis metus. In iaculis egestas ullamcorper. Sed vel nunc ac ex pulvinar mollis at vitae tellus. In hac habitasse platea dictumst. Duis sed bibendum sapien. Aliquam ut risus semper, fringilla nulla nec, pellentesque elit.
      </TarModal>
      <TarButton data-bs-toggle="modal" data-bs-target="#x-large-modal">Show X-Large modal</TarButton>
      <TarModal v-bind="args" id="x-large-modal" size="x-large">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rutrum leo. Phasellus nec mattis metus. In iaculis egestas ullamcorper. Sed vel nunc ac ex pulvinar mollis at vitae tellus. In hac habitasse platea dictumst. Duis sed bibendum sapien. Aliquam ut risus semper, fringilla nulla nec, pellentesque elit.
      </TarModal>
    `,
  }),
};

export const Fullscreen: Story = {
  args: {
    fullscreen: true,
    id: "fullscreen-modal",
  },
  render: (args) => ({
    components: { TarButton, TarModal },
    setup() {
      return { args };
    },
    template: `
      <TarButton data-bs-toggle="modal" data-bs-target="#${args.id}">Show modal</TarButton>
      <TarModal v-bind="args">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rutrum leo. Phasellus nec mattis metus. In iaculis egestas ullamcorper. Sed vel nunc ac ex pulvinar mollis at vitae tellus. In hac habitasse platea dictumst. Duis sed bibendum sapien. Aliquam ut risus semper, fringilla nulla nec, pellentesque elit.
      </TarModal>
    `,
  }),
};

export const Scrollable: Story = {
  args: {
    id: "scrollable-modal",
    scrollable: true,
  },
  render: (args) => ({
    components: { TarButton, TarModal },
    setup() {
      return { args };
    },
    template: `
      <TarButton data-bs-toggle="modal" data-bs-target="#${args.id}">Show modal</TarButton>
      <TarModal v-bind="args">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus semper nisl. Curabitur tincidunt neque at lacus sagittis aliquet. Vivamus
          iaculis eros vitae libero egestas volutpat. Duis pharetra non ante eget placerat. Nam maximus metus dui, eget aliquet massa condimentum id. Maecenas ac
          vehicula ligula. Sed pulvinar, nulla eget iaculis iaculis, mi lacus dapibus velit, nec luctus dolor lacus nec erat. Sed diam tortor, rutrum sed dapibus
          nec, malesuada sit amet risus. In a bibendum lectus. Donec sed efficitur ante. Quisque sit amet justo nec turpis sollicitudin maximus in nec massa.
          Nullam nunc nunc, maximus ut ornare ac, convallis nec enim. Etiam nec sodales nisi. Sed non venenatis urna. In viverra lectus lobortis orci finibus, nec
          fringilla neque fringilla. Proin a quam non ligula pellentesque interdum.
        </p>
        <p>
          Sed et risus ultricies, tempor mi in, pharetra lorem. Integer condimentum diam sit amet libero ullamcorper pretium. Aliquam sit amet metus in risus
          porta tincidunt. Fusce malesuada purus non maximus vehicula. Morbi condimentum libero at leo pulvinar, sed consequat leo molestie. Nulla fermentum
          bibendum leo ut blandit. Sed justo mi, molestie vitae feugiat vitae, suscipit in elit. Vestibulum fringilla massa vel velit varius, eget rhoncus purus
          pharetra. Sed ut libero eu enim fermentum pellentesque. Maecenas egestas libero metus, vitae volutpat nulla viverra pharetra. Donec eleifend neque
          turpis. Aenean congue tortor eu justo rhoncus vehicula. Maecenas scelerisque scelerisque sapien eget venenatis. Duis sit amet turpis elit. In vel ex
          sollicitudin, laoreet orci et, tincidunt lorem.
        </p>
        <p>
          Donec eu arcu justo. Ut gravida ultricies ante, sit amet aliquam dui dictum non. Pellentesque eget leo nec erat pulvinar volutpat. Vestibulum tristique
          dui a odio suscipit, sodales euismod lacus hendrerit. Suspendisse in ornare sem. Cras pretium pretium nibh eu malesuada. Mauris viverra id quam ut
          semper. In ut est ac odio bibendum ullamcorper suscipit id leo. Aliquam vestibulum posuere tellus ac laoreet. Nulla varius purus nulla. Nulla commodo eu
          lectus sed bibendum. Mauris sed erat vel tellus mollis imperdiet.
        </p>
        <p>
          In ut arcu pellentesque, vulputate nulla et, bibendum risus. Aliquam ac sollicitudin mauris. Donec maximus vestibulum eros, a dignissim sapien
          ullamcorper ut. Vivamus egestas enim a viverra feugiat. Sed egestas, ipsum eget convallis iaculis, arcu diam feugiat nibh, in vestibulum risus ligula id
          metus. Nulla facilisi. Integer at blandit tortor.
        </p>
        <p>
          Nullam eu leo nec ex vehicula egestas eget in lectus. Cras vulputate est eget nulla ullamcorper, vel dictum eros iaculis. Curabitur placerat, urna sit
          amet sagittis ultricies, leo libero sodales lorem, non pretium nisl felis sit amet neque. Maecenas semper sagittis lacus. Nunc sit amet commodo dui.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent ac mauris ex. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </TarModal>
    `,
  }),
};
