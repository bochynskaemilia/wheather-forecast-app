import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faExclamationCircle,
  faRedo,
  faTimes,
  faSearchLocation,
} from '@fortawesome/free-solid-svg-icons';

export default {
  init: () => library.add(
    faSun,
    faExclamationCircle,
    faRedo,
    faTimes,
    faSearchLocation,
  ),
};
