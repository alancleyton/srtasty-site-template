import { createButton } from './Button';

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'dark',
        'gray',
        'link'
      ]
    },
    size: {
      control: { type: 'select' },
      options: [
        'tiny',
        'small',
        'medium',
        'large',
        'huge'
      ],
    },
    outlined: { control: 'boolean' },
    pill: { control: 'boolean' },
    block: { control: 'boolean' }
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Red = Template.bind({});
Red.args = {
  label: 'Button',
  variant: 'red'
};

export const Orange = Template.bind({});
Orange.args = {
  label: 'Button',
  variant: 'orange'
};

export const Yellow = Template.bind({});
Yellow.args = {
  label: 'Button',
  variant: 'yellow'
};

export const Green = Template.bind({});
Green.args = {
  label: 'Button',
  variant: 'green'
};

export const Blue = Template.bind({});
Blue.args = {
  label: 'Button',
  variant: 'blue'
};

export const Purple = Template.bind({});
Purple.args = {
  label: 'Button',
  variant: 'purple'
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Button',
  variant: 'dark'
};

export const Gray = Template.bind({});
Gray.args = {
  label: 'Button',
  variant: 'gray'
};

export const Link = Template.bind({});
Link.args = {
  label: 'Button',
  variant: 'link'
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Button',
  variant: 'green',
  outlined: true,
}

export const Pill = Template.bind({});
Pill.args = {
  label: 'Button',
  variant: 'green',
  pill: true,
}

export const Block = Template.bind({});
Block.args = {
  label: 'Button',
  variant: 'blue',
  block: true,
}
