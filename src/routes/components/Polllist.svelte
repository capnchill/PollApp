<script>
	import PollStore from '../../stores/Pollstore';
	import PollCard from './PollCard.svelte';
</script>

<div class="my-4 grid grid-cols-2 gap-4">
	{#each $PollStore as poll (poll.id)}
		<div class="w-[450px]">
			<PollCard {poll} on:deletePoll on:addtoVoteA on:addtoVoteB></PollCard>
		</div>
	{:else}
		<div>
			<h1>Add New task to see task list</h1>
		</div>
	{/each}
</div>
