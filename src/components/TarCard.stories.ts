import type { Meta, StoryObj } from "@storybook/vue3";

import TarCard from "./TarCard.vue";

const meta = {
  title: "Components/TarCard",
  component: TarCard,
  tags: ["autodocs"],
  args: {
    bottomImage: undefined,
    subtitle: "",
    title: "",
    topImage: undefined,
  },
  render: (args) => ({
    components: { TarCard },
    setup() {
      return { args };
    },
    template: `<TarCard v-bind="args" style="width: 18rem;">This is a basic card.</TarCard>`,
  }),
} satisfies Meta<typeof TarCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const CardWithContents: Story = {
  name: "Card with contents",
  args: {
    subtitle: "Card subtitle",
    title: "Card title",
  },
  render: (args) => ({
    components: { TarCard },
    setup() {
      return { args };
    },
    template: `
      <TarCard v-bind="args">
        <template #header>
          <div class="card-header">Featured</div>
        </template>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
        <template #footer>
          <div class="card-footer">2 days ago</div>
        </template>
      </TarCard>
    `,
  }),
};

export const CardWithTopImage: Story = {
  name: "Card with top image",
  args: {
    title: "Forest",
    topImage: { src: "forest.jpg" },
  },
  render: (args) => ({
    components: { TarCard },
    setup() {
      return { args };
    },
    template: `
      <TarCard v-bind="args">
        <p class="card-text">A beautiful forest under the sunrise.</p>
        <template #footer>
          <div class="card-footer">2 days ago</div>
        </template>
      </TarCard>
    `,
  }),
};

export const CardWithBottomImage: Story = {
  name: "Card with bottom image",
  args: {
    bottomImage: { src: "forest.jpg" },
    title: "Forest",
  },
  render: (args) => ({
    components: { TarCard },
    setup() {
      return { args };
    },
    template: `
      <TarCard v-bind="args">
        <template #header>
          <div class="card-header">Featured</div>
        </template>
        <p class="card-text">A beautiful forest under the sunrise.</p>
      </TarCard>
    `,
  }),
};

export const CardGrid: Story = {
  args: {
    title: "Forest",
    topImage: { src: "forest.jpg" },
  },
  render: (args) => ({
    components: { TarCard },
    setup() {
      return { args };
    },
    template: `
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <TarCard v-bind="args">
            <p class="card-text">A beautiful forest under the sunrise.</p>
            <template #footer>
              <div class="card-footer">2 days ago</div>
            </template>
          </TarCard>
        </div>
        <div class="col">
          <TarCard title="Harfang des neiges" :top-image="{ src: 'snowy-owl.jpg' }">
            <p class="card-text">The snowy owl, also known as the polar owl, the white owl and the Arctic owl, is the avian symbol of Quebec.</p>
            <template #footer>
              <div class="card-footer">20 days ago</div>
            </template>
          </TarCard>
        </div>
        <div class="col">
          <TarCard title="Mount Currie" :top-image="{ src: 'mount-currie.jpg' }">
            <p class="card-text">Beautiful scenery of Mount Currie, British Columbia, Canada.</p>
            <template #footer>
              <div class="card-footer">283 days ago</div>
            </template>
          </TarCard>
        </div>
        <div class="col">
          <TarCard title="Dune on Taklamakan Desert" :top-image="{ src: 'taklamakan.jpg' }">
            <p class="card-text">The Taklamakan Desert is a desert in Southwestern Xinjiang in Northwest China, located inside the Tarim Basin. It is bounded by the Kunlun Mountains to the south, the Pamir Mountains to the west, the Tian Shan range to the north, and the Gobi Desert to the east.</p>
            <template #footer>
              <div class="card-footer">119 days ago</div>
            </template>
          </TarCard>
        </div>
      </div>
    `,
  }),
};
