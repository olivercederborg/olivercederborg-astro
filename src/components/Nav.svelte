<script lang="ts">
	import { SectionHeader } from '@beyonk/svelte-scrollspy'

	const items = [
		{
			id: 'projects',
			name: 'Projects',
			link: '/#projects'
		},
		{
			id: 'about',
			name: 'About',
			link: '/#about'
		},
		{
			id: 'contact',
			name: 'Contact',
			link: '/#contact'
		}
	]
</script>

<nav class="w-full h-32 top-0 inset-x-0 z-50 fixed bg-primary-dark/90">
	<section class="container flex justify-between items-center h-full font-bold uppercase">
		<a href="/#">
			<img src="/assets/logo.svg" alt="Oliver Cederborg logo" width="56" />
		</a>
		<ul class="flex gap-x-6">
			{#each items as item}
				<li class="hover:text-primary-brand">
					<SectionHeader id="{item.id}">
						<a href="{item.link}">{item.name}</a>
					</SectionHeader>
				</li>
			{/each}
		</ul>
	</section>
	<slot />
</nav>
