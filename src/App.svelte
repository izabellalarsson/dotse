<script>
  import './tailwind.css';
  import Nav from './lib/Nav.svelte';
  import Hero from './lib/Hero.svelte';
  import Footer from './lib/Footer.svelte';
</script>

<main class="max-w max-h-full mx-auto bg-lightGrey">
  <Nav />
  <Hero />
  <!-- <Footer /> -->
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
