<script lang="ts">
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
</script>

<NavMenu />
<div class="content container"><slot /></div>

<style lang="scss">
	:global(.container) {
		max-width: 1200px;
		min-width: 1200px;
		margin: 0px auto;
	}

	:global(.content) {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 40px 0px;
	}

	:global(body) {
		margin: 0px;
		background-color: #000;
		color: #fff;
		font-family: 'Ubuntu';
		display: flex;
		flex-direction: column;

		letter-spacing: 1px;

		min-height: 100vh;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>
