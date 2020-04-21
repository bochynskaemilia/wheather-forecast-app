import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faExclamationCircle,
  faRedo,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

export default {
  init: () => library.add(
    faSun,
    faExclamationCircle,
    faRedo,
    faTimes,
  ),
};
