import { writable } from 'svelte/store';

let PollStore = writable([
	{
		id: 1,
		question: 'Marvel vs DC Super heroes',
		answerA: 'Marvel',
		answerB: 'DC',
		voteA: 2,
		voteB: 3
	}
]);

export default PollStore;
