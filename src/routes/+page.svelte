<script>
	import Tabs from './components/shared/Tabs.svelte';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
	import Polllist from './components/Polllist.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';

	let items = ['Current Poll', 'Add New Poll'];
	let activeItem = 'Current Poll';

	function toggleTab(event) {
		activeItem = event.detail.item;
	}

	let polls = [
		{
			id: 1,
			question: 'Marvel vs DC Super heroes',
			answerA: 'Marvel',
			answerB: 'DC',
			voteA: 2,
			voteB: 3
		}
	];
	function addPoll(event) {
		let poll = event.detail;
		console.log(poll);
		polls.push(poll);
		polls = polls;
		activeItem = 'Current Poll';
	}

	function deletePoll(event) {
		let poll = event.detail;
		let filteredPoll = polls.filter((pollone) => pollone.id !== poll.id);
		polls = filteredPoll;
	}

	function addtoVoteA(event) {
		let pollId = event.detail.id;
		let pollIndex = polls.findIndex((poll) => poll.id === pollId);
		polls[pollIndex].voteA += 1;
	}

	function addtoVoteB(event) {
		let pollId = event.detail.id;
		let pollIndex = polls.findIndex((poll) => poll.id === pollId);
		polls[pollIndex].voteB += 1;
	}
</script>

<Header />

<main class="mx-auto max-w-4xl">
	<Tabs {items} {activeItem} on:toggleTab={toggleTab} />

	<div>
		{#if activeItem === 'Current Poll'}
			<div>
				<Polllist
					{polls}
					on:deletePoll={deletePoll}
					on:addtoVoteA={addtoVoteA}
					on:addtoVoteB={addtoVoteB}
				/>
			</div>
		{:else}
			<div class="mt-4">
				<CreatePollForm on:addPoll={addPoll} />
			</div>
		{/if}
	</div>
</main>

<Footer />
