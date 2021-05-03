import { Story, Meta } from '@storybook/html';
import { createGridWithCells, ICellProps } from './Cell';

export default {
  title: 'Cell',
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['x', 'y', 'xy']
      }
    },
    offset: {
      type: 'number',
      defaultValue: 0,
    },
    responsive: {
      type: 'boolean',
    },
    size: {
      type: 'number',
      defaultValue: 4,
    },
  },
} as Meta;

const Template: Story<ICellProps> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createGridWithCells(args);
};

export const Width = Template.bind({});
Width.args = {
  direction: 'x',
};

export const ResponsiveWidth = Template.bind({});
ResponsiveWidth.args = {
  direction: 'x',
  responsive: true,
};

export const Height = Template.bind({});
Height.args = {
  direction: 'y',
};

export const ResponsiveHeight = Template.bind({});
ResponsiveHeight.args = {
  direction: 'y',
  responsive: true,
};

export const Size = Template.bind({});
Size.args = {
  direction: 'xy',
};

export const ResponsiveSize = Template.bind({});
ResponsiveSize.args = {
  direction: 'xy',
  responsive: true,
};

export const OffsetX = Template.bind({});
OffsetX.args = {
  direction: 'x',
  offset: 3,
};

export const ResponsiveOffsetX = Template.bind({});
ResponsiveOffsetX.args = {
  direction: 'x',
  offset: 3,
  responsive: true,
};

export const OffsetY = Template.bind({});
OffsetY.args = {
  direction: 'y',
  offset: 3,
};

export const ResponsiveOffsetY = Template.bind({});
ResponsiveOffsetY.args = {
  direction: 'y',
  offset: 3,
  responsive: true,
};

export const OffsetXY = Template.bind({});
OffsetXY.args = {
  direction: 'xy',
  offset: 3,
};

export const ResponsiveOffsetXY = Template.bind({});
ResponsiveOffsetXY.args = {
  direction: 'xy',
  offset: 3,
  responsive: true,
};
