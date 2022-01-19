<script lang="ts">
	import { Project } from '../types/project'

	export let project: Project
</script>

<a href="{project.url}">
	<figure class="relative group">
		<div
			class="absolute inset-0 group-hover:bg-primary-brand/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition duration-300 ease-in-out"
		>
			<h3
				class="text-5xl font-semibold uppercase delay-300 opacity-0 group-hover:opacity-100 transition translate-y-5 group-hover:translate-y-0 ease-in-out"
			>
				{project.title} &rarr;
			</h3>
		</div>
		<img src="{project.thumbnail}" alt="{project.title}" />
	</figure>
</a>
