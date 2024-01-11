<script lang="ts">
	import Template from '$lib/components/Template.svelte'
	import imageCard from '$lib/assets/images/front-card-01.png'
	import imageBanner from '$lib/assets/images/banner-01.jpg'
	import videoCard from '$lib/assets/videos/video-amor.mp4'
</script>

<Template
	title="Amor"
	{videoCard}
	question1="· ¿Encontraré al amor de mi vida?"
	question2="· ¿Dónde tengo que buscar el amor?"
	question3="· ¿Encontraré el amor en mi ciudad o tendré que recorrer kilómetros para encontrarle?"
	{imageCard}
	{imageBanner}
>
	<svelte:fragment slot="answer1">
		<p><strong>¡Qué te voy a decir!</strong> Yo me enamoro todos los días.</p>
		<p>
			Las ediciones limitadas son mi perdición… y con el <strong>15% de descuento</strong> de empleado es muy difícil resistirse.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="answer2">
		<p>
			Tu media naranja no sólo está en la cantina… ¡y es que, en IKEA, el amor está en todas partes! Ya sea en el equipo
			con el que trabajas a diario, en los clientes con los que interactúas o en los proyectos en los que te involucras.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="answer3">
		<p>
			¡El amor no tiene fronteras! Ya sea “te quiero”, “I love you” o “jag älskar dig” el idioma nunca te supondrá una
			barrera con Rosetta Stone®. Una plataforma online de aprendizaje de idiomas que ponemos a tu disposición para que
			puedas querer a quien tú quieras hasta en 24 idiomas distintos.
		</p>
	</svelte:fragment>
</Template>
