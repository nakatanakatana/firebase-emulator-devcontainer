import { describe, test, expect, afterEach } from 'vitest';
import { get } from 'svelte/store';
import { counter, loadCounter, saveCounter } from './counter';

describe('counter', () => {
	afterEach(() => {
		counter.reset();
	});
	const dofunc = (func: () => void, count: number) => {
		for (let i = 0; i < count; i++) {
			func();
		}
	};

	test('incr increments counter value', () => {
		const num = 10;
		dofunc(counter.incr, num);
		expect(get(counter)).equal(num);
	});

	test('decr decrements counter value ', () => {
		const num = 5;
		dofunc(counter.decr, num);
		expect(get(counter)).equal(-1 * num);
	});

	test('reset set value to zero', () => {
		const num = 5;
		dofunc(counter.decr, num);
		counter.reset();
		expect(get(counter)).equal(0);
	});

	test('save', async () => {
		const num = 10;
		dofunc(counter.incr, num);
		saveCounter(get(counter));
		const result = await loadCounter();

		expect(result).equal(num);
	});
});
