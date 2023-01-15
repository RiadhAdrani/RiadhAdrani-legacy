<script lang="ts">
	import type { Project } from '$lib/Projects';
	import { onMount } from 'svelte';
	import Icon from '../Icon/Icon.svelte';
	import { Icons } from '../Icon/Icons';
	import { changeColorOpacity } from '@riadh-adrani/utility-js/build/src/color';

	export let project: Project;

	let period = '';

	const oldYear = 12 - project.period.from.getMonth();

	if (project.period.to) {
		let numberOfMonths = 0;

		if (project.period.to.getFullYear() !== project.period.from.getFullYear()) {
			const newYear = project.period.to.getMonth();
			const wholeYears =
				(project.period.to.getFullYear() - project.period.from.getFullYear() - 1) * 12;

			numberOfMonths = wholeYears + oldYear + newYear + 1;
		} else {
			numberOfMonths = project.period.to.getMonth() - project.period.from.getMonth();
		}

		period = `${numberOfMonths} month${numberOfMonths > 1 ? 's' : ''}`;
	} else {
		const wholeYears = (new Date().getFullYear() - project.period.from.getFullYear() - 1) * 1;
		const newYear = new Date().getMonth();

		let numberOfMonths = wholeYears + oldYear + newYear + 1;

		period = `${numberOfMonths} month${numberOfMonths > 1 ? 's' : ''}`;
	}

	let el: HTMLElement;

	onMount(() => {
		el.style.setProperty('--border-color', changeColorOpacity(project.color, 0.5));
		el.style.setProperty('--bg-color', changeColorOpacity(project.color, 0.075));
	});
</script>

<div bind:this={el} class="project-card">
	<img class="project-card-logo" src={project.logo} alt={project.name} />
	<div class="project-card-top">
		<h3 class="project-card-name">{project.name}</h3>
		<div class="project-card-links">
			{#each project.links as link}
				<a
					class="project-card-links-item"
					href={link.to}
					title={link.label}
					target="_blank"
					rel="noreferrer"
					data-help={link.label}
				>
					<Icon icon={Icons.Link} size="17px" />
				</a>
			{/each}
		</div>
	</div>
	<div class="project-card-divider" />
	<div class="project-card-mid">
		<p class="project-card-type">{project.type}</p>
		<p class="project-card-period">{period}</p>
	</div>
	<p class="project-card-description">{project.description}</p>
	<div class="project-card-divider" />
	<div class="project-card-technologies">
		{#each project.technologies as tech}
			<div class="project-card-technologies-item" data-help={tech.name}>
				<img
					class="project-card-technologies-item-logo"
					class:project-card-technologies-item-logo-inverted={tech.inverted}
					src={tech.logo}
					alt={tech.name}
				/>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.project-card {
		--border-color: grey;
		--bg-color: grey;

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

		&-logo,
		&-period,
		&-description {
			margin-bottom: 20px;
		}

		&-logo {
			height: 40px;
			width: 40px;
		}

		&-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&-name {
			font-family: 'Fira Sans';
			font-size: 1.35em;
		}

		&-links {
			display: flex;

			&-item {
				display: flex;
				position: relative;
				align-items: center;
				margin: 0 2.5px;
				border: 1px solid #1e1e1e;
				padding: 5px;
				border-radius: 10px;
				color: inherit;

				&:hover {
					border-color: #4e4e4e;

					&:after {
						content: attr(data-help);
						display: inline-block;
						position: absolute;
						width: max-content;
						background-color: #0e0e0e;
						padding: 5px 10px;
						left: 10px;
						top: calc(100% + 5px);
						border: 1px solid #1e1e1e;
						border-radius: 15px;
					}
				}
			}
		}

		&-divider {
			background-color: #2e2e2e;
			height: 1px;
			margin: 10px 0px;
		}

		&-mid {
			display: flex;
			justify-content: space-between;
			color: #a0a0a0;
			font-size: 0.9em;
			font-style: italic;
			font-weight: 400;
		}

		&-type {
			text-transform: uppercase;
		}

		&-description {
			line-height: 1.4em;
			flex: 1;
			color: #dfdfdf;
		}

		&-technologies {
			display: flex;

			&-item {
				display: flex;
				position: relative;
				padding: 10px;
				margin-right: 5px;
				margin-bottom: 5px;
				border: 1px solid #1e1e1e;
				justify-content: center;
				border-radius: 10px;
				filter: grayscale(0.65);

				&:hover {
					filter: grayscale(0);
					border-color: #5e5e5e;
					cursor: help;

					&:after {
						content: attr(data-help);
						display: inline-block;
						position: absolute;
						width: max-content;
						background-color: #0e0e0e;
						padding: 5px 10px;
						left: 10px;
						top: calc(100% + 5px);
						border: 1px solid #1e1e1e;
						border-radius: 15px;
					}
				}

				&-logo {
					height: 15px;
					width: 15px;

					&-inverted {
						filter: invert(100);
					}
				}
			}
		}
	}
</style>
