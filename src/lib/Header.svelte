<script>
  function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

  import { onMount } from "svelte";
  import { supabase } from "../lib/supabaseClient";

  let Header = [];
  onMount(async () => {
    const { data, error } = await supabase
      .from("Header")
      .select("family")
      .limit(1)
      .single();
    Header = data;
    console.log(data);
  });
</script> 


<nav>
	<ul>
		<li class="menu-deroulant"><a href="/index"><img src="https://izazuwofnoedxpgqvecg.supabase.co/storage/v1/object/public/images/NP.gif" alt="" height="150" width="150"></a>  
    	<ul class="sous-menu">
          {#if Header.family}
            {#each Header.family as member, i}
              <li><a href={"/"+member}>{member}</a></li>
            {/each}
          {/if}
			</ul>
		</li>
	</ul>
</nav>


<style>
  /* CSS Document */
  /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  nav ul {
    display: flex;
    list-style-type: none;
    position: relative;
    width: 100%;
    border: 0.3rem solid;
  }
  nav li {
    flex: 1 1 auto;
    position: relative;
  }
  nav a {
    block-size: auto;
    display: block;
    color: #000000;
    text-align: center;
    letter-spacing: 1px;
    font-size: 1.2rem;
    text-decoration: none;
    font-family: Arial;
    font-weight: bold;
    padding: 15px 15px;
    background-color: white;
    text-decoration: none;
  }

  nav li ul {
    display: none;
    width: 300px;
    border: 2px solid #666;
    margin: 0;
    padding: 0;
    border: 0;
    position: absolute;
    top: 150px;
    left: 39.5%;
  }

  nav li:hover ul {
    display: block;
    z-index: 2;
    border: 0.1rem solid;
  }

  nav a:hover {
    text-decoration: underline;
    color: red;
  }
</style>