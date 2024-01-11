import type { Action } from 'svelte/action'

export const animate = (node => {
	node.classList.add('animate')
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => node.classList.toggle('animate-active', entry.isIntersecting))
	})
	observer.observe(node)
	return {
		destroy() {
			node.classList.remove('animate')
			observer.disconnect()
		},
	}
}) satisfies Action
