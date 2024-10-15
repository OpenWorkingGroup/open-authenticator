import type { Meta } from '@storybook/angular';
import { CopyTokenComponent } from './copy-token.component';

export default {
  component: CopyTokenComponent,
  tags: ['autodocs'],
} as Meta;

const Template = (args: CopyTokenComponent) => ({ props: args });

export const Primary = Template.bind({});

// Primary.args = {
//   title: 'Click Me!',
//   // Add other component inputs as args here
// };
