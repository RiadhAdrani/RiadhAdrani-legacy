<script lang="ts">
	import { StyleType, styleType } from '$lib/Store';
	import type { NavMenuItem } from '$lib/types';
	import '$lib/styles/index.scss';
	import Icon from '../Icon/Icon.svelte';
	import { Icons } from '../Icon/Icons';
	import { page } from '$app/stores';

	let currentStyle: StyleType;
	let currentRoute = '/';

	$: {
		currentRoute = $page.url.pathname;
	}

	styleType.subscribe((value) => (currentStyle = value));

	const items: Array<NavMenuItem> = [
		{ title: 'Home', to: '/', icon: Icons.Home },
		{ title: 'Projects', to: '/projects', icon: Icons.Projects },
		{ title: 'Professional Career', to: '/pro', icon: Icons.Job },
		{ title: 'Resume', to: '/resume', icon: Icons.Resume }
	];
</script>

<div class="nav-menu">
	<nav class="container">
		{#each items as item}
			<a href={item.to} class="nav-menu-item" class:nav-menu-item-active={currentRoute === item.to}>
				<Icon icon={item.icon} size="20px" />
				<span class="nav-menu-item-label">{item.title}</span>
			</a>
		{/each}
	</nav>
</div>

<style lang="scss">
	.container {
		justify-content: center;
		display: flex;
		height: 100%;
	}

	.nav-menu {
		display: flex;
		justify-content: center;
		position: sticky;
		top: 0px;
		z-index: 10;
		padding: 0px 10px;
		border-bottom: 1px solid #1e1e1e;
		background-color: black;

		&-item {
			text-decoration: none;
			font-weight: 400;
			padding: 15px 20px;
			color: inherit;
			transition-duration: 250ms;
			display: flex;
			border-bottom: 3px solid transparent;

			&-active {
				border-bottom-color: #4e4e4e;
			}

			&-label {
				margin-left: 10px;
			}

			&:hover {
				background-color: #151515;
			}
		}
	}
</style>
