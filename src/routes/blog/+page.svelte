<script>
    export let data;
</script>

<h1>the bloge</h1>

<ul>
    {#each data.posts as { slug, name, content }}
        <li><a href="/blog/{slug}">{name}</a></li>
    {/each}
</ul>