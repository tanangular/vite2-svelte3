<script>
	export let msg
	let count = 0
	function TickCount() {
	  count++
	}
</script>

<style>
  a {
    color: #ff3e00;
  }
</style>

<img src="1000px-Svelte_Logo.svg.png" style="width:200px" alt="svele logo">

<h1>{ msg }</h1>
<p class="block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos dolore dolorum error facere fugiat illo iste itaque labore libero minus numquam obcaecati qui quia quis repellat rerum, tenetur ullam!</p>
<p>
	<a href="https://svelte.dev/tutorial/basics" target="_blank">Svelte Tutorial</a> |
	<a href="https://svelte.dev/" target="_blank">Svelte 3 Documentation</a>
</p>

<button on:click={ TickCount }>count is: { count }</button>
<p>
	Edit
	<code>components/HelloWorld.svelte</code> to test hot module replacement.
</p>


