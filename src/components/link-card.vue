<script setup lang="ts">
defineProps<{
	title: string
	description: string
	href: string
	iconBgClass: string
	iconTextClass: string
}>()
</script>

<template>
	<a
		:href="href"
		target="_blank"
		rel="noopener"
		class="hover:border-g-blue flex flex-col items-start gap-3 rounded-2xl border border-gray-200/80 bg-white px-4 py-4 transition-colors sm:px-5"
	>
		<div class="flex w-full items-start gap-3">
			<div
				class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold"
				:class="[iconBgClass, iconTextClass]"
			>
				G
			</div>
			<div class="min-w-0 flex-1">
				<h3 class="text-sm font-semibold">{{ title }}</h3>
				<p class="text-faint mt-1 text-xs leading-relaxed">{{ description }}</p>
			</div>
		</div>
		<span class="text-g-blue text-xs font-medium transition-colors">Open link &rarr;</span>
	</a>
</template>
