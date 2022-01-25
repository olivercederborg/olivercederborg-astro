<script lang="ts">
	import { createForm } from 'svelte-forms-lib'
	import * as yup from 'yup'

	const { form, errors, state, touched, handleChange, handleSubmit, isSubmitting, isValid, isModified } = createForm({
		initialValues: {
			name: '',
			email: '',
			message: ''
		},
		validationSchema: yup.object().shape({
			name: yup.string().required(),
			email: yup.string().email().required(),
			message: yup.string().required()
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		}
	})
</script>

<form on:submit|preventDefault="{handleSubmit}" class="space-y-12">
	<fieldset class="w-full">
		<label for="name" class="flex flex-col text-xl text-primary-brand"> What's your name? </label>
		<input
			id="name"
			name="name"
			type="text"
			placeholder="Tim Cook"
			on:change="{handleChange}"
			on:blur="{handleChange}"
			bind:value="{$form.name}"
			class="py-4 px-3 bg-transparent text-2xl text-white mt-2 border-b-[3px] border-stone-100/10 placeholder:text-stone-500 w-full"
			class:border-red-500="{$errors.name && $touched.name}"
			class:border-green-500="{!$errors.name && $touched.name}"
		/>
		{#if $errors.name && $touched.name}
			<small class="text-base mt-2 block">{$errors.name}</small>
		{/if}
	</fieldset>

	<fieldset>
		<label for="email" class="flex flex-col text-xl text-primary-brand"> Where can I reach you? </label>
		<input
			id="email"
			name="email"
			type="email"
			placeholder="tim@apple.com"
			on:change="{handleChange}"
			on:blur="{handleChange}"
			bind:value="{$form.email}"
			class="py-4 px-3 bg-transparent text-2xl text-white mt-2 border-b-[3px] border-stone-100/10 placeholder:text-stone-500 w-full"
			class:border-red-500="{$errors.email && $touched.email}"
			class:border-green-500="{!$errors.email && $touched.email}"
		/>
		{#if $errors.email && $touched.email}
			<small class="text-base mt-2 block">{$errors.email}</small>
		{/if}
	</fieldset>

	<fieldset>
		<label for="message" class="flex flex-col text-xl text-primary-brand">What's your message?</label>
		<textarea
			id="message"
			name="message"
			type="text"
			placeholder="Hey Oliver, let's work!"
			on:change="{handleChange}"
			on:blur="{handleChange}"
			bind:value="{$form.message}"
			class="py-4 px-3 bg-transparent text-2xl min-h-[10rem] text-white mt-2 border-b-[3px] border-stone-100/10 placeholder:text-stone-500 w-full"
			class:border-red-500="{$errors.message && $touched.message}"
			class:border-green-500="{!$errors.message && $touched.message}"></textarea>
		{#if $errors.message && $touched.message}
			<small class="text-base mt-2 block">{$errors.message}</small>
		{/if}
	</fieldset>

	<button
		type="submit"
		disabled="{!$isValid || !$isModified}"
		class="text-2xl uppercase font-semibold hover:text-primary-brand disabled:text-white/40"
	>
		{#if $isSubmitting}
			Submitting...
		{:else if $isValid && $isModified}
			Send it <span class="ml-2">&rarr;</span>
		{:else}
			Fill the form!
		{/if}
	</button>
</form>
