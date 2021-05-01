import { Story, Meta } from '@storybook/html';
import { createGrid, IGridProps } from './Grid';

export default {
  title: 'Grid',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical']
      }
    },
  },
} as Meta;

const Template: Story<IGridProps> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createGrid(args);
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  type: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  type: 'vertical',
};

export const NoAxis = Template.bind({});
NoAxis.args = {
};
