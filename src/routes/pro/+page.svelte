<script>
	import { JobExperiencesList as jobs } from '$lib/Career';
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
</script>

<div class="pro">
	<MainTitle>Professional Career</MainTitle>
	<div class="pro-experiences">
		{#each jobs as job}
			<ExperienceCard experience={job} />
		{/each}
	</div>
</div>

<style lang="scss">
	.pro {
		&-experiences {
			margin-top: 40px;
		}
	}
</style>
