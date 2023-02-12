<script>
  export let count = 0;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>Increment</button>
<h2>{count}</h2>
