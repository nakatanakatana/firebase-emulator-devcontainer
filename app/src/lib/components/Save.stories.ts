import type { Meta, StoryObj } from '@storybook/svelte';

import Save from './Save.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Component/Save',
	component: Save,
	tags: ['autodocs'],
	argTypes: {
	}
} satisfies Meta<Save>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SaveComponent: Story = {};
