<script setup lang='ts'>
defineOptions({
	name: 'about'
})
</script>

<template>
	<section class='page-header'>
		<h1 class='project-name'>about me</h1>
		<h2 class='project-tagline'>Special in machine/deep learning, data mining and feature engineering.</h2>
<!--		<img src='/public/portrait.jpg' height=100 alt='portrait'/>-->
	</section>
	<div id='body' class='main-content'>
		<h2 id='-'>Skill</h2>
		<ul>
			<li>Python3.8/3.9 (senior), familiar with Numpy, Pandas, Matplotlib and Scikit-learn</li>
			<li>Deep learning framework (junior), familiar with TensorFlow and PyTorch</li>
			<li>C/C++ (junior)</li>
			<li>SQL (senior), familiar with MySQL, HiveQL, and BigQuery</li>
			<li>RPA (junior), familiar with UiPath Studio, VBA, and Airflow</li>
			<li>Scala2.12 (junior), familiar with Spark core, Spark SQL, Spark streaming, Spark MLlib</li>
			<li>R (rudiment), touch with rpart, e1071, adabag</li>
			<li>Tableau (rudiment)</li>
		</ul>
		<hr>
		<h2 id='-'>Experience</h2>
		<ul>
			<li>Institute of Automation of the Chinese Academy of Sciences</li>
			<span style='text-indent:2em;'><strong>Validation of Model Quantization for Deep Learning</strong></span>
			<br/>Testing the C++ based deep learning model quantizer developed by team, and comparing the runtime and
			precision of quantized and not quantized models. It turned out with only 0.015 mAP loss and compressed runtime by
			30%.
			<li>Artefact</li>
			<span style='text-indent:2em;'><strong>PCD 2nd Purchase Conversion</strong></span>
			<br/>Analyzing client CRM data and extracting features, then building a model to predict the second purchase
			propensity, and delivering the model result to our client. Sales could be improved after industrialization.
			Currently, 77% accuracy and 71% F1 score are ensured.
			<span style='text-indent:2em;'><strong>Portfolio 2030</strong></span>
			<br/>Collecting and compiling reports from our client, and predicting the future volume based on the past growth
			rate. Two phases are mainly separated. First, taking the complete work flow on Excel. Then, automating the process
			of data collection, calculation & analysis and result visualization via Airflow.
		</ul>
		<hr>
		<h2 id='-'>Publication</h2>
		<ul>
			<li><strong>Paper</strong></li>
			<span style='text-indent:2em;'>Terry Tan, Singing Evaluation based on Deep Metric Learning[C], 2019 International Symposium on Computer Graphics, Multimedia and Image Processing. (Best Student Paper)</span>
			<li><strong>Project </strong></li>
			<span
					style='text-indent:2em;'>李春杰,张启军,谭嘉瑞,颜智润.Linux文件加密系统设计[J].物联网技术,2018,8(02):77-79+82.</span>
		</ul>
		<hr>
		<h2 id='-'>Other Qualification</h2>
		<ul>
			<li>Microsoft Office Specialist</li>
			<li>Online course</li>
			<span style='text-indent:2em;'>Principle and Application of Big Data (MOOC)</span>
			<ul>
				<li>HDFS (HA, Federation), MapReduce, YARN, NoSQL, Hive</li>
				<li>Spark Core, Spark SQL, Spark streaming, Spark MLlib</li>
			</ul>
			<span style='text-indent:2em;'>Deep Learning Specialization (deeplearning.ai)</span>
			<br>
			<span style='text-indent:2em;'>Achieving Advanced Insights with BigQuery (Coursera)</span>
		</ul>
		<hr>
		<h2 id='-'>Education</h2>
		<p>2016.9-2020.6丨University of Science and Technology of China丨Software Engineering丨Master of Engineering</p>
		<button type='button' class='btn' onclick="window.open('/CV.pdf','_blank')" title='resume'>
			<svg width='40' height='40' viewBox='0 0 16 16' class='bi bi-paperclip' fill='black'
			     xmlns='http://www.w3.org/2000/svg'>
				<path fill-rule='evenodd'
				      d='M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z'></path>
			</svg>
		</button>
	</div>
</template>

<style scoped>
.page-header {
	width: 100%;
}
</style>