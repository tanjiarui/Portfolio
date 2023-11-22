<script setup lang='ts'>
defineOptions({
	name: 'home'
})
</script>

<template>
	<div class='background'>
		<div class='container'>
			<div class='jumbotron p-4 p-md-5 text-white rounded bg-dark' style='margin:32px'>
				<div class='col-md-6 px-0'>
					<h1 class='display-4 font-italic'>Welcome to my space</h1>
					<p class='lead my-3'>So do all who live to see such times, but that is not for them to decide. All we have to
						decide is what to do with the time that is given to us.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	min-height: calc(80vh);
	margin: 0;
	opacity: .8;
}
</style>