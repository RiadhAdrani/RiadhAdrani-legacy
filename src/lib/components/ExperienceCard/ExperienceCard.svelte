<script lang="ts">
	import type { Experience } from '$lib/Career';
	import { countMonths, getMonthName } from '$lib/Utils';
	import Chip from '../Chip/Chip.svelte';

	export let experience: Experience;

	const months = countMonths(experience.period.from, experience.period.to);
	const from = `${getMonthName(
		experience.period.from.getMonth()
	)} ${experience.period.from.getFullYear()}`;
	const to = experience.period.to
		? `${getMonthName(experience.period.to.getMonth())} ${experience.period.to.getFullYear()}`
		: 'Present';

	const period = `${from} - ${to} · ${months} month${months > 1 ? 's' : ''}`;
</script>

<div class="experience">
	<img class="experience-logo" src={experience.company.logo} alt={experience.company.name} />
	<div class="experience-data">
		<h3 class="experience-title">
			<span class="experience-title-span">{experience.title}</span>
			<Chip label={experience.employmentType} size="0.75em" />
		</h3>
		<span class="experience-company-name">{experience.company.name}</span>
		<div class="experience-period">{period}</div>
		<div class="experience-location">{experience.location}</div>
		<div class="experience-description">{experience.description}</div>
		<div class="experience-skills">
			{#each experience.skills as skill}
				<div class="experience-skills-item" data-help={skill.name}>
					<img
						class="experience-skills-item-logo"
						class:experience-skills-item-logo-inverted={skill.inverted}
						src={skill.logo}
						alt={skill.name}
					/>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.experience {
		display: flex;
		border: 1px solid #2e2e2e;
		padding: 25px;
		border-radius: 15px;
		transition-duration: 150ms;
		margin-bottom: 25px;

		&-logo {
			height: 75px;
			width: 75px;
			border-radius: 15px;
		}

		&-data {
			display: flex;
			flex-direction: column;
			margin-left: 20px;
		}

		&-title {
			font-family: 'Fira Sans';
			font-size: 1.35em;
			margin: 0;
			display: flex;
			align-items: center;

			&-span {
				margin-right: 15px;
			}
		}

		&-company-name {
			margin-bottom: 5px;
			font-family: 'Fira Sans';
			font-size: 1.15em;
		}

		&-period,
		&-location {
			color: #a0a0a0;
			font-size: 0.9em;
			margin-bottom: 5px;
		}

		&-location {
			margin-bottom: 15px;
		}

		&-description {
			margin-bottom: 20px;
		}

		&-skills {
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
