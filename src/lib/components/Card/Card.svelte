<script lang="ts">
	import { changeColorOpacity } from '@riadh-adrani/utility-js';
	import { onMount } from 'svelte';

	let el: HTMLElement;

	export let color = '#ffffff00';
	export let margin = '0px';

	onMount(() => {
		el.style.setProperty('--border-color', changeColorOpacity(color, 0.5));
		el.style.setProperty('--bg-color', changeColorOpacity(color, 0.075));
		el.style.setProperty('margin', margin);
	});
</script>

<div bind:this={el} class="card">
	<slot />
</div>

<style lang="scss">
	.card {
		--border-color: transparent;
		--bg-color: transparent;

		display: flex;
		flex-direction: column;
		border: 1px solid #2e2e2e;
		padding: 25px;
		border-radius: 15px;
		transition-duration: 150ms;

		&:hover {
			border-color: var(--border-color);
			background-color: var(--bg-color);
		}
	}
</style>
