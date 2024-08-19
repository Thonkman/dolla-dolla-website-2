<h1>grind</h1>

<script>
    /** @type {import('./$types').LayoutData} */
    export let data;

    function gaming() {
        console.log("gmaing")
    }
</script>

<div>
    {#each data.sections as section}
        <button on:click={gaming}>
            {section.title}
        </button>
    {/each}
</div>