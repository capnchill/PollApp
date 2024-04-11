<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './shared/Button.svelte';
	import { generateRandomId } from './utils';

	let fields = {
		question: '',
		answerA: '',
		answerB: ''
	};

	let errors = {
		question: '',
		answerA: '',
		answerB: ''
	};

	let valid = false;

	let dispatch = createEventDispatcher();

	function submitHandler() {
		valid = true;
		if (fields.question.trim().length < 5) {
			valid = false;
			errors.question = 'Question must be atleast 5 characters long';
		} else {
			errors.question = '';
		}

		if (fields.answerA.trim().length < 1) {
			valid = false;
			errors.answerA = 'Answer-B cannot be empty';
		} else {
			errors.answerA = '';
		}

		if (fields.answerB.trim().length < 1) {
			valid = false;
			errors.answerB = 'Answer-aA cannot be empty';
		} else {
			errors.answerB = '';
		}

		if (valid) {
			let poll = {
				...fields,
				voteA: 0,
				voteB: 0,
				id: generateRandomId()
			};
			dispatch('addPoll', poll);
		}
	}
</script>

<form on:submit|preventDefault={submitHandler} class="flex flex-col items-center">
	<div class="mb-2 px-4 py-2">
		<label for="question">Poll question</label>
		<input
			type="text"
			id="question"
			bind:value={fields.question}
			class="mt-1 block rounded-md border-[1px] border-black px-4 py-2"
		/>
		{#if errors.question.length > 0}
			<p class="text-wrap text-[12px] text-red-500">{errors.question}</p>
		{/if}
	</div>
	<div class="mb-2 px-4 py-2">
		<label for="answer-a">Answer-a</label>
		<input
			type="text"
			id="answer-a"
			bind:value={fields.answerA}
			class="mt-1 block rounded-md border-[1px] border-black px-4 py-2"
		/>
		{#if errors.answerA.length > 0}
			<p class="text-wrap text-[12px] text-red-500">{errors.answerA}</p>
		{/if}
	</div>
	<div class="mb-2 px-4 py-2">
		<label for="answer-b">Answer-b</label>
		<input
			type="text"
			id="answer-b"
			bind:value={fields.answerB}
			class="mt-1 block rounded-md border-[1px] border-black px-4 py-2"
		/>
		<div>
			{#if errors.answerB.length > 0}
				<p class="text-[12px] text-red-500">{errors.answerB}</p>
			{/if}
		</div>
	</div>
	<Button />
</form>
