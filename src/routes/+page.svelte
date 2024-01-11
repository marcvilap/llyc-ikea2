<script lang="ts">
	import Video from '$lib/components/Video.svelte'
	import videoSrc from '$lib/assets/videos/video.mp4'
	import cloud from '$lib/assets/images/cloud.png'
	import backCard from '$lib/assets/images/back-card.png'
	import frontCard01 from '$lib/assets/images/front-card-01.png'
	import frontCard02 from '$lib/assets/images/front-card-02.png'
	import frontCard03 from '$lib/assets/images/front-card-03.png'
	import frontCard04 from '$lib/assets/images/front-card-04.png'
	import frontCard05 from '$lib/assets/images/front-card-05.png'
	import frontCard06 from '$lib/assets/images/front-card-06.png'
	const cards = [
		{ image: frontCard01, path: '/amor' },
		{ image: frontCard02, path: '/fortuna' },
		{ image: frontCard03, path: '/salud' },
		{ image: frontCard04, path: '/bienestar' },
		{ image: frontCard06, path: '/trabajo' },
		{ image: frontCard05, path: '/familia' },
	]
</script>

<main class="relative">
	<Video src={videoSrc} />

	<div class="bg-divider h-16 bg-cover bg-center" id="seguir"></div>

	<div id="cards" class="relative -top-16"></div>

	<div class="bg-blue bg-indigo-950 bg-cover bg-center py-20">
		<div class="container">
			<div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
				{#each cards as { image, path }}
					<a class="group perspective" href="{path}#main">
						<div
							class="relative transition-transform duration-1000 will-change-transform preserve-3d group-hover:rotate-y-180"
						>
							<img class="relative w-full rounded-2xl backface-hidden" src={backCard} alt="" />
							<img class="absolute left-0 top-0 w-full rounded-2xl rotate-y-180 backface-hidden" src={image} alt="" />
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<div class="pointer-events-none absolute -bottom-20 flex w-full justify-between overflow-hidden">
		<img class="-ml-64 w-[48rem]" src={cloud} alt="" />
		<img class="-mr-64 w-[48rem]" src={cloud} alt="" />
	</div>
</main>
