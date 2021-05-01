import React from 'react';
import { App, IAppProps } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRootStore } from '../redux/store';
import { Meta, Story } from '@storybook/react';
import { Provider } from 'react-redux';

const store = createRootStore();

export default {
  title: 'App/App',
  component: App,
  decorators: [
    (story) => <Provider store={store}><Router>{story()}</Router></Provider>,
  ],
  // argTypes: {
  //   title: { control: 'color' },
  // },
} as Meta<IAppProps>;

const Template: Story<IAppProps> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Hello world!',
};
