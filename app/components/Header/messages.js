/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  charts: {
    id: `${scope}.charts`,
    defaultMessage: 'Charts',
  },
  data: {
    id: `${scope}.data`,
    defaultMessage: 'Data',
  },
  definitions: {
    id: `${scope}.definitions`,
    defaultMessage: 'Definitions',
  },
  supportingDocs: {
    id: `${scope}.supportingDocs`,
    defaultMessage: 'Supporting Docs',
  },
});
