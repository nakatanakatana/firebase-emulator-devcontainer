<script lang="ts">
    import { counter, saveCounter } from '$lib/stores/counter';
</script>

<div class="save-counter">
    <button on:click={() => saveCounter($counter)}>save</button>
</div>
