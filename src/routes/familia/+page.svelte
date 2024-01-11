<script lang="ts">
	import Template from '$lib/components/Template.svelte'
	import imageCard from '$lib/assets/images/front-card-06.png'
	import videoCard from '$lib/assets/videos/video-familia.mp4'
</script>

<Template
	title="Familia"
	{videoCard}
	question1="· ¿Aumentará mi familia?"
	question2="· ¿Voy a poder disfrutar momentos con mi bebé?"
	question3="· ¿Voy a recibir ayudas si soy padre o madre?"
	{imageCard}
>
	<svelte:fragment slot="answer1">
		<p>
			¡Veo una gran familia! Pero no es lo que estás pensando... Es una familia mucho más grande. Diversa, igualitaria y
			que apuesta por el talento libre de juicios. Una familia de más de 10.000 personas que trabajarán para mejorar tu
			día a día en IKEA y el día a día de la mayoría de las personas.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="answer2">
		<p>
			Las cartas me muestran que tu bebé es una pieza clave en tu vida, ¡qué fuente de risas y alegría! Por esta razón,
			en IKEA tenemos un “as bajo la manga": si estás de baja por maternidad o paternidad y decides pedir una excedencia
			para cuidar de tu bebé, recibirás 600 € brutos durante los cuatro primeros meses si trabajas a jornada completa.
			Si tu contrato es a tiempo parcial, obtendrás una parte proporcional de esta suma. ¡Cuidar de la felicidad de tu
			bebé también es cuidar de la tuya!
		</p>
	</svelte:fragment>
	<svelte:fragment slot="answer3">
		<p>
			Las cartas me aseguran que no hay razón para preocuparse por esto. IKEA siempre busca ser parte de los momentos
			más significativos de tu vida. Por eso, para respaldarte en el nacimiento o adopción de tu hijo/a, te hacemos
			llegar la suma de 450,76 € brutos por cada niño/a. ¡Es nuestro modo de compartir tu alegría y acompañarte en este
			emocionante capítulo de tu vida!
		</p>
	</svelte:fragment>
</Template>
