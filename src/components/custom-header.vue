<script setup lang='ts'>
defineOptions({
	name: 'custom-header'
})
let emit = defineEmits(['page_info'])
</script>

<template>
	<header>
		<nav class='navbar navbar-dark bg-dark'>
			<a class='navbar-brand' href='#'>Prometheus</a>
			<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbars' aria-controls='navbars'
			        aria-expanded='false' aria-label='Toggle navigation'>
				<span class='navbar-toggler-icon'></span>
			</button>
			<div class='collapse navbar-collapse' id='navbars'>
				<ul class='navbar-nav mr-auto'>
					<li class='nav-item active'>
						<a class='nav-link' href='/' @click.prevent="emit('page_info', 'home')">Home<span class='sr-only'>(current)</span></a>
					</li>
					<li class='nav-item'>
						<a class='nav-link' href='/about' @click.prevent="emit('page_info', 'about')">About Me</a>
					</li>
					<li class='nav-item'>
						<a class='nav-link' href='/project' @click.prevent="emit('page_info', 'project')">Projects</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<style scoped>
header {
	width: 100%;
}
</style>