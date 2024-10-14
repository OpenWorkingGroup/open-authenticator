import type { Meta } from '@storybook/angular';
import { WelcomePage } from './welcome.page';

export default {
  title: 'Open Authenticator/Pages/Welcome',
  component: WelcomePage,
  tags: ['pages'],
} as Meta;

const Template = (args: WelcomePage) => ({ props: args });

export const Primary = Template.bind({});

// Default.args = {
//   title: 'Click Me!',
//   // Add other component inputs as args here
// };
