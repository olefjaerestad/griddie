import { Story, Meta } from '@storybook/html';
import { createGrid, IGridProps } from './Grid';

export default {
  title: 'Grid',
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['x', 'y', 'xy']
      }
    },
  },
} as Meta;

const Template: Story<IGridProps> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createGrid(args);
};

export const X = Template.bind({});
X.args = {
  direction: 'x',
};

export const Y = Template.bind({});
Y.args = {
  direction: 'y',
};

export const XY = Template.bind({});
XY.args = {
  direction: 'xy',
};

export const NoAxis = Template.bind({});
NoAxis.args = {
};
