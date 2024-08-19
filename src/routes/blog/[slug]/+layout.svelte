<script>
    export let data;
</script>

<div class="layout">
    <main>
        <slot></slot>
    </main>

    <aside>
        <h2>More posts</h2>
        <ul>
            {#each data.posts as { slug, name, content }}
                    <li>
                        <a href="/blog/{slug}">{name}</a>
                    </li>
            {/each}
        </ul>
    </aside>
</div>

<style>
    @media (min-width: 640px) {
        .layout {
            display: grid;
            gap: 2em;
            grid-template-columns: 1fr 16em;
        }
    }
</style>
