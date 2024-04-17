import type { Preview } from "@storybook/vue3";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../src/assets/styles/main.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
