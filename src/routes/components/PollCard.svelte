<script>
	import { tweened } from 'svelte/motion';
	import PollStore from '../../stores/Pollstore';

	export let poll;

	$: totalVotes = poll.voteA + poll.voteB;

	// Alternate Approach to directly updating the store value
	// function deleteHandler() {
	// 	let pollIndex = $PollStore.findIndex((Poll) => Poll.id === poll.id);
	// 	$PollStore.splice(pollIndex, 1);
	// 	$PollStore = $PollStore;
	// }

	function deleteHandler() {
		PollStore.update((currentPolls) => {
			return currentPolls.filter((Poll) => Poll.id !== poll.id);
		});
	}

	$: votePercentA = Math.round((poll.voteA / totalVotes) * 100) || 0;
	$: votePercentB = Math.round((poll.voteB / totalVotes) * 100) || 0;

	// tweened percentages
	let tweenedA = tweened(0);
	let tweenedB = tweened(0);
	$: tweenedA.set(votePercentA);
	$: tweenedB.set(votePercentB);

	function markVoteA() {
		let pollIndex = $PollStore.findIndex((Poll) => Poll.id === poll.id);
		$PollStore[pollIndex].voteA += 1;
	}

	function markVoteB() {
		let pollIndex = $PollStore.findIndex((Poll) => Poll.id === poll.id);
		$PollStore[pollIndex].voteB += 1;
	}
</script>

<div class="p-4 shadow-xl">
	<div class="mb-4">
		<h1 class=" font-semibold">{poll.question}?</h1>
		<div class="text-[14px] opacity-55">Total Votes: {totalVotes}</div>
	</div>

	<div class="mb-4">
		<div
			class="relative mb-2 flex cursor-pointer px-4 py-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-red-800"
			on:click={markVoteA}
		>
			<div class="absolute left-0 top-0 -z-10 h-full bg-red-200" style="width: {$tweenedA}%"></div>
			<p>{poll.answerA} ({poll.voteA} votes)</p>
		</div>
		<div
			class="relative flex cursor-pointer px-4 py-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-green-800"
			on:click={markVoteB}
		>
			<div
				class="absolute left-0 top-0 -z-10 h-full bg-green-200"
				style="width: {$tweenedB}%"
			></div>
			<p>{poll.answerB} ({poll.voteB} votes)</p>
		</div>
	</div>

	<div class="text-center">
		<button class="rounded-lg bg-red-600 px-4 py-1 text-white" on:click={deleteHandler}
			>Delete</button
		>
	</div>
</div>
