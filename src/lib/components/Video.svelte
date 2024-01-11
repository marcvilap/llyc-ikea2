<script lang="ts">
	export let src: string
	let video: HTMLVideoElement
	let controls = false

	function handleVideoEnd() {
		const seguirElement = document.getElementById('seguir')
		if (seguirElement) {
			const y = seguirElement.getBoundingClientRect().top + window.pageYOffset - 60
			window.scrollTo({ top: y, behavior: 'smooth' })
		}

		video.currentTime = 0 // Reinicia el video al inicio
		video.pause() // Opcional: Pausa el video
		controls = false // Opcional: Oculta los controles si estaban visibles
	}
</script>

<div class="relative bg-black">
	<video bind:this={video} on:ended={handleVideoEnd} class="aspect-video w-full" {src} {controls}>
		<track kind="captions" />
	</video>
	{#if !controls}
		<button
			on:click={() => {
				video.play()
				controls = true
			}}
			class="absolute left-1/2 top-1/2 -ml-10 -mt-10 w-20"
		>
			<svg class="fill-white" viewBox="0 0 64 65">
				<path
					d="M46.839 29.677c2.193 1.291 2.193 4.258 0 5.42l-22.71 13.032c-2.065 1.161-4.516-.258-4.516-2.71V18.581c0-2.323 2.451-3.742 4.516-2.71l22.71 13.806ZM64 32c0 17.677-14.323 32-32 32S0 49.677 0 32 14.323 0 32 0s32 14.323 32 32ZM6.194 32A25.716 25.716 0 0 0 32 57.806c14.194 0 25.806-11.483 25.806-25.806C57.806 17.806 46.194 6.194 32 6.194 17.677 6.194 6.194 17.806 6.194 32Z"
				/>
			</svg>
		</button>
	{/if}
</div>
