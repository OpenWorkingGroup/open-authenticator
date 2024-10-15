import type { Meta } from '@storybook/angular';
import { EditAccountComponent } from './edit-account.component';

export default {
  title: 'Open Authenticator/Components/Edit Account',
  component: EditAccountComponent,
  tags: ['autodocs'],
} as Meta;

const Template = (args: EditAccountComponent) => ({ props: args });

export const Primary = Template.bind({});

// Primary.args = {
//   title: 'Click Me!',
//   // Add other component inputs as args here
// };
