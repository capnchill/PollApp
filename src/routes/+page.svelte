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

	function addPoll() {
		activeItem = 'Current Poll';
	}
</script>

<Header />

<main class="mx-auto max-w-4xl">
	<Tabs {items} {activeItem} on:toggleTab={toggleTab} />

	<div>
		{#if activeItem === 'Current Poll'}
			<div>
				<Polllist />
			</div>
		{:else}
			<div class="mt-4">
				<CreatePollForm on:addPoll={addPoll} />
			</div>
		{/if}
	</div>
</main>

<Footer />
