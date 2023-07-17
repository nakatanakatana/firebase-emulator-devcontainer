import { writable } from 'svelte/store'
import { Firestore } from '$lib/firebase';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';

const initValue = 0;
const {subscribe, set, update} = writable(initValue);

const increment = () => {
    update(n => n + 1)
}

const decrement = () => {
    update(n => n -1)
}

const reset = () => {
    set(0)
}

export const counter = {
    subscribe,
    incr: increment,
    decr: decrement,
    reset: reset,
}

export const saveCounter = (counter: number) => {
    setDoc(doc(Firestore, 'globals/counter'), {
        updatedAt: serverTimestamp(),
        data: counter,
    })
}
