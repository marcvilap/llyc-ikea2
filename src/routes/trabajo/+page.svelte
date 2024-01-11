<script lang="ts">
	import Template from '$lib/components/Template.svelte'
	import imageCard from '$lib/assets/images/front-card-05.png'
	import imageBanner from '$lib/assets/images/banner-01.jpg'
	import videoCard from '$lib/assets/videos/video-trabajo.mp4'
</script>

<Template
	title="Trabajo"
	{videoCard}
	question1="· ¿Voy a crecer en IKEA?"
	question2="· ¿Hasta dónde puedo llegar en mi trabajo?"
	question3="· ¿Qué me deparan los próximos 25 años?"
	{imageCard}
	{imageBanner}
>
	<svelte:fragment slot="answer1">
		<p>
			No sabemos cuánto mides… pero en IKEA las oportunidades de crecer son infinitas. Podrás llegar tan alto como te
			propongas. Conoce nuestra incubadora de líderes BLOOM, nuestra plataforma para que puedas desarrollar todo tu
			potencial.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="answer2">
		<p>
			¡Hasta el infinito y más allá! En estas cartas veo una brújula con 7 expectativas de liderazgo… La intuición me
			dice que si sigues navegando en lo desconocido y trabajando en equipo para conseguir los objetivos, celebrarás tus
			éxitos con nuestro One IKEA Bonus y TACK!
		</p>
	</svelte:fragment>
	<svelte:fragment slot="answer3">
		<p>
			¡Un destino lleno de tesoros y reconocimientos te aguarda! Dentro de 25 años veo una llave Allen de Oro que será
			tuya, desbloqueando puertas hacia un futuro próspero. También veo 10 días libres y hasta beneficios económicos…
			¡Un verdadero festín te espera en tu 25º aniversario con nosotros!
		</p>
	</svelte:fragment>
</Template>
