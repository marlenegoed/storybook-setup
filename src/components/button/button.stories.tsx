import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Component/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    variant: {
      control: 'select'
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themesOverride: 'dark'
    }
  }
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
