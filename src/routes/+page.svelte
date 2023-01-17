<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import { Icons } from '$lib/components/Icon/Icons';
	import type { SocialLink } from '$lib/types';
	import { useTitle } from '$lib/Utils';

	const title = useTitle('Riadh Adrani');

	const links: Array<SocialLink> = [
		{
			title: 'GitHub',
			to: 'https://github.com/RiadhAdrani',
			icon: Icons.GitHub
		},
		{
			title: 'LinkedIn',
			to: 'https://www.linkedin.com/in/riadh-adrani/',
			icon: Icons.LinkedIn
		},
		{
			title: 'Twitter',
			to: 'https://twitter.com/adrani_riadh',
			icon: Icons.Twitter
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<div class="home">
	<div class="home-section">
		<h1 class="home-title">Riadh ADRANI,</h1>
		<p class="home-subtitle">A self-made software developer based in Tunisia.</p>
		<div class="home-social">
			{#each links as link}
				<a class="home-social-item" href={link.to} target="_blank" rel="noreferrer">
					<Icon icon={link.icon} />
				</a>
			{/each}
		</div>
	</div>
	<Carrousel />
</div>

<style lang="scss">
	.home {
		align-self: center;
		display: flex;
		flex-direction: row;
		flex: 1;
		align-self: stretch;
		align-items: center;

		&-title {
			font-family: var(--title-f);
			font-size: 4em;
			font-weight: 900;
			letter-spacing: 2px;
		}

		&-subtitle {
			font-size: 1.5em;
			font-weight: 200;
		}

		&-section {
			display: flex;
			flex-direction: column;
			flex: 1;
		}

		&-social {
			padding: 15px 0px;

			&-item {
				margin-right: 10px;
				text-decoration: none;
			}
		}

		@media (max-width: 875px) {
			& {
				flex-direction: column;
				justify-content: center;
			}

			&-section {
				flex: 0;
				align-items: center;
				text-align: center;
			}
		}
	}
</style>
