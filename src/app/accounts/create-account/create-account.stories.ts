import type { Meta } from '@storybook/angular';
import { CreateAccountComponent } from './create-account.component';

export default {
  title: 'Open Authenticator/Components/Create Account',
  component: CreateAccountComponent,
  tags: ['autodocs'],
} as Meta;

const Template = (args: CreateAccountComponent) => ({ props: args });

export const Primary = Template.bind({});

// Primary.args = {
//   title: 'Click Me!',
//   // Add other component inputs as args here
// };
