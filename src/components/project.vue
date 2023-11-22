<script setup lang='ts'>
defineOptions({
	name: 'project'
})
</script>

<template>
	<section class='page-header'>
		<h1 class='project-name'>projects</h1>
	</section>
	<div id='body' class='main-content'>
		<ul>
			<li><a href='https://github.com/tanjiarui/predict-future-sales'>Feature Engineering Pipeline</a></li>
			<span style='text-indent:2em;'>This project was inspired by a competition on Kaggle. The aim of this one is to generalize and summarize the stream line of how to extract and mining valuable features from messy data in reality.</span>
			<li><a href='https://github.com/tanjiarui/word_count'>MapReduce Framework</a></li>
			<span style='text-indent:2em;'>This is a simplified implementation of MapReduce via C++ 11. Using word count as an example, this implementation can give intuition of how files flow within this structure and how workers communicate with each other.</span>
			<li><a href='https://github.com/tanjiarui/bicycle-thefts'>Can I have my bike back?</a></li>
			<span style='text-indent:2em;'>It is a project to predict the probability to retrieve your stolen bicycle. Dataset is from reality.</span>
			<li><a href='https://github.com/tanjiarui/student-writing'>Evaluating Student Writing</a></li>
			<span style='text-indent:2em;'>Using a NER model to classify different discourse types.</span>
			<li><a href='https://github.com/tanjiarui/Artefact_case'>Big Data Query</a></li>
			<span style='text-indent:2em;'>This is a case study of SQL query for ETL and visualization.</span>
		</ul>
	</div>
</template>

<style scoped>
.page-header {
	width: 100%;
}
</style>