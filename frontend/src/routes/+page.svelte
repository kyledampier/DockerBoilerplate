<script>
  import Counter from "../components/Counter.svelte";

  export let data;
  console.log(data);

  let count = 0;
</script>

<h1>Welcome to SvelteKit</h1>
<h2>{count}</h2>

<Counter bind:count />

<!-- <pre>{data ?? "No Data"}</pre> -->
