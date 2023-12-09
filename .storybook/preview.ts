import type { Preview } from "@storybook/vue3";

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBan, faChevronLeft, faFloppyDisk, faHouse, faMinus, faPlus, faRotate, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faBan, faChevronLeft, faFloppyDisk, faHouse, faMinus, faPlus, faRotate, faTrashCan, faXmark);

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
