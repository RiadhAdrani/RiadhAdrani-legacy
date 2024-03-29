<script lang="ts">
	import type { Project } from '$lib/Projects';
	import { countMonths, getMonthName } from '$lib/Utils';
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';

	export let project: Project;
	$: months = countMonths(project.period.from, project.period.to);
	$: period = `${months} month${months > 1 ? 's' : ''}`;
	$: from = `${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`;
	$: to = project.period.to
		? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}`
		: 'now';
</script>

<Card color={project.color}>
	<CardLogo alt={project.name} src={project.logo} size={40} radius={'0'} />
	<div class="project-card-top">
		<CardTitle title={project.name} />
		<div class="project-card-links">
			{#each project.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<div class="project-card-mid">
		<p class="project-card-type">{project.type}</p>
		<p class="project-card-period">{period}</p>
	</div>
	<p class="project-card-description">{project.description}</p>
	<div class="project-card-bottom">
		<Chip label={from} />
		{#if from !== to}
			<Chip label={to} />
		{/if}
	</div>
	<CardDivider />
	<div class="project-card-technologies">
		{#each project.technologies as tech}
			<ChipIcon logo={tech.logo} name={tech.name} inverted={tech.inverted} />
		{/each}
	</div>
</Card>

<style lang="scss">
	.project-card {
		&-period,
		&-description {
			margin-bottom: 20px;
		}

		&-top {
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&-links,
		&-technologies {
			display: flex;
		}

		&-mid {
			display: flex;
			justify-content: space-between;
			color: var(--accent-text-c);
			font-size: 0.9em;
			font-style: italic;
			font-weight: 400;
		}

		&-bottom {
			display: flex;
			justify-content: space-between;
			font-size: 0.75em;
			font-weight: 400;
		}

		&-type {
			text-transform: uppercase;
		}

		&-description {
			line-height: 1.4em;
			flex: 1;
			color: var(--accent-text-c);
		}
	}
</style>
