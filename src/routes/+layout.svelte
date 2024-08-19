<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/settings">Settings</a>
    <a href="/blog">gloge</a>
</nav>

<style>
    nav {
        background-color: #333;
        overflow: hidden;
    }

    /* Style the links inside the navigation bar */
    nav h1, a, button {
        float: left;
        color: darkgray;
        text-align: center;
        padding: 14px 30px;
        text-decoration: none;
        font-size: 25px;
    }

    /* Change the color of links on hover */
    nav a:hover, button:hover {
        background-color: #ddd;
        color: black;
    }

    /* Add a color to the active/current link */
    nav a.active, button.active {
        background-color: #04AA6D;
        color: white;
    }
</style>

<slot></slot>