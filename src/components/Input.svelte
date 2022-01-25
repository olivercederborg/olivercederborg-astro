<script lang="ts">
	export let value = ''
</script>

<input
	{...$$props}
	value="{value}"
	class="py-4 px-3 bg-transparent text-2xl text-white mt-2 border-b-2 border-stone-100/10 placeholder:text-stone-500 w-full"
/>
