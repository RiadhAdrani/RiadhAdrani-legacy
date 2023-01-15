<script lang="ts">
	export let label = '';
	export let active = false;
</script>

<p class="chip" class:chip-active={active} on:click on:keydown on:keypress on:keyup>{label}</p>

<style lang="scss">
	.chip {
		padding: 5px 15px;
		margin: 2.5px;
		display: inline-block;
		border: 1px solid #2e2e2e;
		border-radius: 20px;
		cursor: pointer;
		font-weight: 200;
		font-size: 0.95em;
		transition-duration: 150ms;

		&:hover {
			background-color: #202020;
		}

		&-active {
			background-color: #2f2f2f;

			&:hover {
				background-color: #1e1e1e;
			}
		}
	}
</style>
