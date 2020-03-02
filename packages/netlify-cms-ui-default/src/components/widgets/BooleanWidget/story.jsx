import React from 'react';
import styled from '@emotion/styled';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import BooleanWidget from '.';

const StyledBooleanWidget = styled(BooleanWidget)`
  width: 100%;
`;

export default {
  title: 'Widgets/BooleanWidget',
  decorators: [withKnobs],
};

export const _BooleanWidget = () => {
  return <StyledBooleanWidget label="Boolean Widget Label" value={boolean('value', false)} />;
};

_BooleanWidget.story = {
  name: 'BooleanWidget',
};
