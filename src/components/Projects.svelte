<script>
	import ProjectCard from './ProjectCard.svelte'
	export let projects
</script>

<section class="pt-32 mb-32 bg-primary-darker">
	<article class="container">
		<p class="text-primary-brand font-semibold text-xl uppercase">Recent Work</p>
		<h2 class="uppercase md:text-4xl lg:text-5xl font-extrabold mt-6 text-3xl break-words !leading-[1.25]">
			Projects
		</h2>
		<p class="text-2xl text-stone-400 mt-10">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint velit dolorem magni veritatis recusandae
			consectetur soluta reprehenderit non provident fuga dolores, numquam, hic alias sed asperiores assumenda
			minus laborum tempora.
		</p>
	</article>
	<section class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-[2px] mt-32">
		{#each projects as project}
			<ProjectCard project="{project}" />
		{/each}
	</section>
</section>
