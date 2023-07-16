<script lang="ts">
	import { counter } from '$lib/stores/counter';
	import { Firestore } from '$lib/firebase';
	import { addDoc, collection, setDoc, doc } from 'firebase/firestore';

	const save = () => {
		setDoc(doc(Firestore, 'counter/num'), {
			data: $counter
		});
	};
</script>

<div class="save-counter">
	<button on:click={() => save()}>save</button>
</div>
