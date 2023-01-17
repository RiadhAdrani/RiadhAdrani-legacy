<script>
	import { JobExperiencesList as jobs } from '$lib/Career';
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { useTitle } from '$lib/Utils';

	const title = useTitle('Experience');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<div class="experience">
	<MainTitle>Professional Experience</MainTitle>
	<div class="experience-experiences">
		{#each jobs as job}
			<ExperienceCard experience={job} />
		{/each}
	</div>
</div>

<style lang="scss">
	.experience {
		display: flex;
		flex-direction: column;

		&-experiences {
			display: flex;
			flex-direction: column;
			margin-top: 40px;
		}
	}
</style>
