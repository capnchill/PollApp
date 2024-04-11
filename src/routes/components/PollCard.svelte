<script>
	import { createEventDispatcher } from 'svelte';

	export let poll;
	$: totalVotes = poll.voteA + poll.voteB;

	let dispatch = createEventDispatcher();

	function deleteHandler() {
		dispatch('deletePoll', poll);
	}
</script>

<div class="p-4 shadow-xl">
	<div class="mb-4">
		<h1 class=" font-semibold">{poll.question}?</h1>
		<div class="text-[14px] opacity-55">Total Votes: {totalVotes}</div>
	</div>

	<div class="mb-4">
		<div
			class="relative mb-2 flex bg-red-100 px-4 py-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-red-800"
		>
			<p>{poll.answerA} ({poll.voteA} votes)</p>
		</div>
		<div
			class="relative flex bg-green-100 px-4 py-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-green-800"
		>
			<p>{poll.answerB} ({poll.voteB} votes)</p>
		</div>
	</div>

	<div class="text-center">
		<button class="rounded-lg bg-red-600 px-4 py-1 text-white" on:click={deleteHandler}
			>Delete</button
		>
	</div>
</div>
