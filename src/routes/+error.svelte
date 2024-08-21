<script>
    import {page} from "$app/stores";
</script>
<head>
    <title>Error {$page.status}</title>
</head>
<h1>Error {$page.status}</h1>
<p>Oh no! Seems like there is an error. We are thonking hard to fix it!</p>
<h3>Error Message:</h3>
<p>{$page.error.message}</p>
