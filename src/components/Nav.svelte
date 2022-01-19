<script lang="ts">
	import { fade } from 'svelte/transition'
</script>

<nav in:fade class="w-full h-32">
	<section class="container flex justify-between items-center h-full font-bold uppercase">
		<img src="/assets/logo.svg" alt="Oliver Cederborg logo" width="56" />
		<ul class="flex gap-x-6">
			<li><a href="/#projects">Projects</a></li>
			<li><a href="/#about">About</a></li>
			<li><a href="/#contact">Contact</a></li>
		</ul>
	</section>
</nav>
