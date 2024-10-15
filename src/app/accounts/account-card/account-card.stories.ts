import type { Meta, StoryObj } from '@storybook/angular';
import { URI } from 'otpauth';

import { AccountCardComponent } from './account-card.component';

const meta: Meta<AccountCardComponent> = {
  title: 'Open Authenticator/Components/Account Card',
  component: AccountCardComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<AccountCardComponent>;

export const Default: Story = {
  args: {
    id: 0,
    account: URI.parse(
      'otpauth://totp/Example?issuer=Testing&secret=I65VU7K5ZQL7WB4E&algorithm=SHA1&digits=6&period=30'
    ),
  },
};
