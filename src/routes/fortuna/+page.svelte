<script lang="ts">
	import Template from '$lib/components/Template.svelte'
	import imageCard from '$lib/assets/images/front-card-02.png'
	import imageBanner from '$lib/assets/images/banner-01.jpg'
	import videoCard from '$lib/assets/videos/video-dinero.mp4'
</script>

<Template
	title="Fortuna"
	{videoCard}
	question1="· ¿Me va a tocar la lotería?"
	question2="· ¿Voy a poder disfrutar de mis ahorros?"
	question3="· ¿Cómo será el hogar de mis sueños?"
	{imageCard}
	{imageBanner}
>
	<svelte:fragment slot="answer1">
		<p>
			La lotería es puro azar, y aunque El Niño no toque, vas a poder disfrutar de una cesta de Navidad deliciosa, y
			podrás acceder a productos de alimentación a precios increíbles gracias a FOOD TO YOU.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="answer2">
		<p>
			Las cartas dicen que, si cumples 2 años trabajando en IKEA, podrás unirte a nuestro plan de ahorro y pensiones.
			Además, ¡podrás ahorrar aún más con nuestro plan de retribución flexible!
		</p>
	</svelte:fragment>
	<svelte:fragment slot="answer3">
		<p>
			Si algo sabemos es que en IKEA somos expertos en hacer realidad el hogar de tus sueños. Y para lograrlo tienes un
			15% de descuento en nuestras tiendas y en la tienda sueca, y un montón de compañeros y compañeras dispuestos a
			ayudar.
		</p>
	</svelte:fragment>
</Template>
