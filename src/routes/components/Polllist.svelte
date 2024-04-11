<script>
	import PollCard from './PollCard.svelte';

	export let polls;
</script>

<div class="my-4 grid grid-cols-2 gap-4">
	{#each polls as poll (poll.id)}
		<div class="w-[450px]">
			<PollCard {poll} on:deletePoll></PollCard>
		</div>
	{:else}
		<div>
			<h1>Add New task to see task list</h1>
		</div>
	{/each}
</div>
