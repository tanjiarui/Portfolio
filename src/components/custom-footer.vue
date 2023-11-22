<script setup lang='ts'>
defineOptions({
	name: 'custom-footer'
})
</script>

<template>
	<footer class='footer'>
		<p>Portfolio built for personal use by <a href='https://www.linkedin.com/in/terry-tan-ustc'>Terry Tan</a>.</p>
		<p>
			<a href='#'>Back to top</a>
		</p>
	</footer>
</template>

<style scoped>
.footer {
	width: 100%;
	padding: 2.5rem 0;
	color: #999;
	text-align: center;
	background-color: #f9f9f9;
	border-top: .05rem solid #e5e5e5;
}
</style>