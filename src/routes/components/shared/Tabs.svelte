<script>
	import { createEventDispatcher } from 'svelte';

	export let items;
	export let activeItem;

	let dispatch = createEventDispatcher();
</script>

<div>
	<ul class="flex justify-center">
		{#each items as item}
			<button
				class="mx-1 px-2 {item === activeItem ? 'border-b-2 border-red-400 text-red-700' : ''}"
				on:click={() => dispatch('toggleTab', { item })}
			>
				{item}
			</button>
		{/each}
	</ul>
</div>
