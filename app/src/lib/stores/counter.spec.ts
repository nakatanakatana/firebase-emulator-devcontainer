import {describe, test, expect, afterEach} from 'vitest';
import {get} from 'svelte/store';
import {counter} from './counter'

describe('counter', () => {
    afterEach(() => {
        counter.reset();
    });

    test('increment', () => {
        counter.incr();
        expect(get(counter)).equal(1);
    });
    test('increment', () => {
        counter.decr();
        expect(get(counter)).equal(-1);
    });
})
