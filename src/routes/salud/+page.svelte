<script lang="ts">
	import Template from '$lib/components/Template.svelte'
	import imageCard from '$lib/assets/images/front-card-03.png'
	import imageBanner from '$lib/assets/images/banner-01.jpg'
	import videoCard from '$lib/assets/videos/video-salud.mp4'
</script>

<Template
	title="Salud"
	{videoCard}
	question1="· ¿Me espera un futuro lleno de salud?"
	question2="· ¿Tendré compañía si me siento en una situación vulnerable?"
	question3="· ¿Tendré que preocuparme por mi seguridad en el trabajo?"
	{imageCard}
	{imageBanner}
>
	<svelte:fragment slot="answer1">
		<p>
			En mis cartas veo mucha fruta y ensalada en la cantina… ya sabes lo que dicen, una manzana cada día, de médico te
			ahorraría.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="answer2">
		<p>
			Estas cartas hablan con mucha certeza… en ellas puedo ver un equipo muy unido que te acompañará en todo momento a
			través de programas de atención social como LYKTA y Cable IKEA así como bonos a precios asequibles para disponer
			de ayuda psicológica si la necesitas.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="answer3">
		<p>
			Las cartas han hablado de forma directa y concisa. Me cuentan que en IKEA se trabaja incansablemente para
			proporcionar condiciones laborales óptimas y disminuir los percances en el trabajo. ¡La seguridad y el bienestar
			son primordiales para nosotros!
		</p>
	</svelte:fragment>
</Template>
