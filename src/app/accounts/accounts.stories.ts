import type { Meta } from '@storybook/angular';
import { AccountsPage } from './accounts.page';

export default {
  title: 'Open Authenticator/Pages/Accounts',
  component: AccountsPage,
  tags: ['autodocs'],
} as Meta;

const Template = (args: AccountsPage) => ({ props: args });

export const Primary = Template.bind({});

// Primary.args = {
//   title: 'Click Me!',
//   // Add other component inputs as args here
// };
