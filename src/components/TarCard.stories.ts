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
    title: "Winter",
    topImage: { src: "winter.jpg" },
  },
  render: (args) => ({
    components: { TarCard },
    setup() {
      return { args };
    },
    template: `
      <TarCard v-bind="args">
        <p class="card-text">A snowy road from top-down view.</p>
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
    bottomImage: { src: "summer.jpg" },
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
        <p class="card-text">A field of sunflowers under the Sun.</p>
      </TarCard>
    `,
  }),
};

export const CardGrid: Story = {
  args: {
    title: "Forest",
    topImage: { src: "winter.jpg" },
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
            <p class="card-text">A snowy road from top-down view.</p>
            <template #footer>
              <div class="card-footer">2 days ago</div>
            </template>
          </TarCard>
        </div>
        <div class="col">
          <TarCard title="Spring" :top-image="{ src: 'spring.jpg' }">
            <p class="card-text">Blooming white flowers in morning dew.</p>
            <template #footer>
              <div class="card-footer">20 days ago</div>
            </template>
          </TarCard>
        </div>
        <div class="col">
          <TarCard title="Summer" :top-image="{ src: 'summer.jpg' }">
            <p class="card-text">A field of sunflowers under the Sun.</p>
            <template #footer>
              <div class="card-footer">283 days ago</div>
            </template>
          </TarCard>
        </div>
        <div class="col">
          <TarCard title="Autumn" :top-image="{ src: 'autumn.jpg' }">
            <p class="card-text">A hot-colored road of deciduous trees.</p>
            <template #footer>
              <div class="card-footer">119 days ago</div>
            </template>
          </TarCard>
        </div>
      </div>
    `,
  }),
};
