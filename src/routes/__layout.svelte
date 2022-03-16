<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />
<main class="max-w max-h-full mx-auto">
	<slot />
	<!-- <Footer /> -->
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		@apply bg-lightGrey;
	}
</style>
