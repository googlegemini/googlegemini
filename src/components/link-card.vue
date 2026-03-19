<script setup lang="ts">
defineProps<{
	title: string
	description: string
	href: string
	iconBgClass?: string
	iconTextClass?: string
}>()
</script>

<template>
	<a
		:href="href"
		target="_blank"
		rel="noopener"
		class="hover:border-g-blue flex flex-col items-start gap-3 rounded-2xl border border-gray-200/80 bg-white p-4 transition-colors sm:px-5 dark:border-gray-700/80 dark:bg-white/5"
	>
		<div class="flex w-full items-start gap-3">
			<div
				class="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg"
				:class="[iconBgClass, iconTextClass]"
			>
				<slot name="icon" />
			</div>
			<div class="min-w-0 flex-1">
				<h3 class="text-sm font-semibold">{{ title }}</h3>
				<p class="text-faint mt-1 text-xs/relaxed">{{ description }}</p>
			</div>
		</div>
		<span class="text-g-blue text-xs font-medium transition-colors">Open link &rarr;</span>
	</a>
</template>
