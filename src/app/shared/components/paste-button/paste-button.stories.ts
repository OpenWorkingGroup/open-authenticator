import type { Meta } from '@storybook/angular';
import { PasteButtonComponent } from './paste-button.component';

export default {
  component: PasteButtonComponent,
  tags: ['autodocs'],
} as Meta;

const Template = (args: PasteButtonComponent) => ({ props: args });

export const Primary = Template.bind({});

// Primary.args = {
//   title: 'Click Me!',
//   // Add other component inputs as args here
// };
