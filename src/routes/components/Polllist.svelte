<script>
	import { fade, scale } from 'svelte/transition';
	import PollStore from '../../stores/Pollstore';
	import PollCard from './PollCard.svelte';
	import { flip } from 'svelte/animate';
</script>

<div class="my-4 grid grid-cols-2 gap-4" in:fade>
	{#each $PollStore as poll (poll.id)}
		<div class="w-[450px]" out:scale|local animate:flip={{ duration: 500 }}>
			<PollCard {poll} on:deletePoll on:addtoVoteA on:addtoVoteB></PollCard>
		</div>
	{:else}
		<div>
			<h1>Add New task to see task list</h1>
		</div>
	{/each}
</div>
