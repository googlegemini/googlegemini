<script setup lang="ts">
defineProps<{
	title: string
	description: string
	iconBgClass: string
	iconTextClass: string
}>()
</script>

<template>
	<div
		class="rounded-2xl border border-gray-200/80 bg-white p-4 transition-colors hover:border-gray-300 md:p-6 dark:border-gray-700/80 dark:bg-white/5 dark:hover:border-gray-600"
	>
		<div
			class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold"
			:class="[iconBgClass, iconTextClass]"
		>
			G
		</div>
		<h3 class="mb-1 font-semibold">{{ title }}</h3>
		<p class="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{{ description }}</p>
	</div>
</template>
