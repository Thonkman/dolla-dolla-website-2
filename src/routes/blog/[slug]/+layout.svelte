<script>
    export let data;
</script>

<div class="layout">
    <main>
        <slot></slot>
    </main>

    <aside>
        <h2>More posts</h2>
            {#each data.posts as { slug, name, content }}
                <a href="/blog/{slug}">{name}</a>
            {/each}
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
    aside {
        background-color: #333;
        overflow: hidden;
    }
    /* Style the links inside the navigation bar */
    aside h2, a, button {
        float: left;
        color: darkgray;
        text-align: center;
        padding: 14px 30px;
        text-decoration: none;
        font-size: 25px;
    }

    /* Change the color of links on hover */
    aside a:hover, button:hover {
        background-color: #ddd;
        color: black;
    }

    /* Add a color to the active/current link */
    aside a.active, button.active {
        background-color: #04AA6D;
        color: white;
    }
</style>
