<script setup lang='ts'>
import customHeader from './components/custom-header.vue'
import customFooter from './components/custom-footer.vue'
import home from './components/home.vue'
import about from './components/about.vue'
import project from './components/project.vue'
import {computed, ref, Ref} from 'vue'

defineOptions({
	name: 'app'
})
let page: Ref<string> = ref('home')

function get_page(value: string) {
	page.value = value
	let title = {
		'home': 'Home',
		'about': 'About Me',
		'project': 'Projects'
	}
	document.title = title[value as keyof typeof title]
}

let current_page = computed(() => {
	switch (page.value) {
		case 'home':
			return home
		case 'about':
			return about
		case 'project':
			return project
		default:
			return home
	}
})
</script>

<template>
	<custom-header @page_info='get_page'/>
	<component :is='current_page'/>
	<custom-footer/>
</template>