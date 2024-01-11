<script lang="ts">
	import Template from '$lib/components/Template.svelte'
	import imageCard from '$lib/assets/images/front-card-04.png'
	import videoCard from '$lib/assets/videos/video-bienestar.mp4'
</script>

<Template
	title="Bienestar"
	{videoCard}
	question1="· ¿Podré desconectar y disfrutar de mi tiempo libre?"
	question2="· ¿Seguiré aprendiendo cosas nuevas?"
	question3="· ¿Mantendré siempre la ilusión en el trabajo?"
	{imageCard}
>
	<svelte:fragment slot="answer1">
		<p>
			¡Vas a desconectar tanto que hasta se te va a olvidar escribir! Y es que en IKEA nos tomamos muy en serio tu
			desconexión para que puedas llevar un perfecto equilibrio entre la vida laboral y la personal. Por eso, fuera de
			tu horario de trabajo tienes derecho a no responder a ningún tipo de comunicación.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="answer2">
		<p>
			¡No te acostarás sin saber una cosa más! Somos entusiastas y estamos en una búsqueda constante por renovarnos y
			mejorar. Por eso, impulsamos y ensalzamos a las personas que se atreven y ponen en marcha nuevas iniciativas para
			crear un mejor negocio, mejores vidas y mejor planeta.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="answer3">
		<p>
			¡La chispa de la ilusión es la que hace girar el mundo! Y en IKEA queremos darte hasta 16,000 razones en forma de
			cursos de formación con LinkedIn® Learning que mantendrán esa chispa siempre encendida.
		</p>
	</svelte:fragment>
</Template>
