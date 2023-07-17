import { writable } from 'svelte/store';
import { Firestore } from '$lib/firebase';
import {
	setDoc,
	doc,
	serverTimestamp,
	type DocumentData,
	type FirestoreDataConverter,
	getDoc
} from 'firebase/firestore';

const initValue = 0;
const { subscribe, set, update } = writable(initValue);

const increment = () => {
	update((n) => n + 1);
};

const decrement = () => {
	update((n) => n - 1);
};

const reset = () => {
	set(0);
};

export const counter = {
	subscribe,
	incr: increment,
	decr: decrement,
	reset: reset
};

const counterDocPath = 'globals/counter';
export type Counter = number;
export const counterConverter: FirestoreDataConverter<Counter> = {
	toFirestore(counter: Counter): DocumentData {
		return {
			data: counter,
			updatedAt: serverTimestamp()
		};
	},
	fromFirestore(snapshot, options): Counter {
		const data = snapshot.data(options);
		return data.data;
	}
};

export const saveCounter = (counter: number) => {
	setDoc(doc(Firestore, counterDocPath).withConverter(counterConverter), counter);
};

export const loadCounter = async (): Promise<Counter> => {
	const snapshot = await getDoc(doc(Firestore, counterDocPath).withConverter(counterConverter));
	return snapshot.data();
};
