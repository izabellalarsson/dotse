<script>
  import { each } from 'svelte/internal';

  export let segment;

  export const menuItems = ['@me'];
</script>

<nav>
  <ul class="flex w-100 justify-end mx-16">
    {#each menuItems as menuItem}
      <li class="m-2">
        <a aria-current={segment === undefined ? 'page' : undefined} href="."
          >{menuItem}</a
        >
      </li>
    {/each}
    <!-- <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about"
        >about</a
      >
    </li> -->

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">blog</a
      >
    </li> -->
  </ul>
</nav>
