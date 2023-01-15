<script lang="ts">
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import { ProjectsList } from '$lib/Projects';
	import { TechnologiesList, type Technology } from '$lib/Technologies';

	interface TechnologyFilter extends Technology {
		isSelected?: boolean;
	}

	let filters: Array<TechnologyFilter> = TechnologiesList;
	let search = '';
	let displayed = [...ProjectsList];

	const isSelected = (tech: Technology) => {
		return filters.some((item) => item.name === tech.name && item.isSelected);
	};

	const onSelected = (newTech: Technology) => {
		filters = filters.map((tech) => {
			if (tech.name === newTech.name) {
				tech.isSelected = !isSelected(tech);
			}

			return tech;
		});
	};

	$: {
		displayed = ProjectsList.filter((project) => {
			const isFiltered =
				filters.every((item) => !item.isSelected) ||
				project.technologies.some((tech) =>
					filters.some((filter) => filter.isSelected && filter.name === tech.name)
				);

			const isSearched =
				search.trim().length === 0 ||
				project.name.trim().toLowerCase().includes(search.trim().toLowerCase());

			return isFiltered && isSearched;
		});
	}
</script>

<div class="projects">
	<MainTitle>Projects</MainTitle>
	<div class="projects-search">
		<Input bind:value={search} placeholder="Enter keywords..." />
	</div>
	<div class="projects-filters">
		{#each filters as tech}
			<Chip label={tech.name} active={tech.isSelected} on:click={() => onSelected(tech)} />
		{/each}
	</div>
	<div class="projects-list">
		{#each displayed as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

<style lang="scss">
	.projects {
		padding: 40px 0;

		&-search,
		&-filters,
		&-list {
			margin-top: 40px;
		}

		&-search {
			display: flex;
			justify-content: stretch;
		}

		&-list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 20px;
		}
	}
</style>
