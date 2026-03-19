<script setup lang="ts">
defineProps<{
	title: string
	description: string
	accentClass: string
}>()
</script>

<template>
	<div
		class="flex overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-colors hover:border-gray-300 dark:border-gray-700/80 dark:bg-white/5 dark:hover:border-gray-600"
	>
		<div class="w-1 shrink-0" :class="accentClass"></div>
		<div class="p-4 md:p-6">
			<h3 class="mb-1 font-semibold">{{ title }}</h3>
			<p class="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{{ description }}</p>
		</div>
	</div>
</template>
