<script>
  export let id;
  import { onMount } from "svelte";
  import { supabase } from "../../lib/supabaseClient";

  let post = null;

  onMount(async () => {
    let { data, error } = await supabase
      .from("post")
      .select("*")
      .eq("id", id);
    if (error) {
      return (errorMessage = error.message);
    }
    post = data[0];
  });
</script>

<div>
  {#if post}
     <p>{post.content}</p>
  {:else}
    <p>Loading ...</p>
  {/if}
</div>