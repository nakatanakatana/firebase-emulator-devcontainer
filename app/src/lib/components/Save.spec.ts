import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Save from './Save.svelte'

describe('Save.svelte', () => {
	test('show Save button', async () => {
		const result = render(Save);
		const button = result.getByRole('button')
		expect(button).toBeInTheDocument();
	});
});

