<svelte:head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
</svelte:head>

<script>
  import { params } from "@roxi/routify";
  import { supabase } from "../../lib/supabaseClient";
  import { onMount } from "svelte";

  $: slug = $params.slug;

  let member = {};
  onMount(async () => {
    const { data, error } = await supabase
      .from("Famille")
      .select("id,membre,image,information")
      .eq("slug", slug)
      .limit(1)
      .single();
    console.log("famille", data);
    member = data;
  });
</script>

<main>

	<section class="grid-wrap">
		<div class="soustitre grid-col col-12">
			<h3>{member.membre}</h3>
		</div>
      
		<div class="texte texte1 grid-col col-12">
			<div class="bestseller">
				<a href="/sweathomme"><img src="{member.image}">
			</div>
		</div>
	</section>



<section class="grid-wrap">
		<div class="soustitre grid-col col-12">
			<h3>Informations</h3>
		</div>

		<div class="texte texte1 grid-col col-12 ">
			<div class="bestseller">
				<p>{member.information}</p>
			</div>
		</div>

</section>



	</main>

<style>
  /* CSS Document */
  * {
    padding: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 25%;
  }

  /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  div.soustitre {
    text-align: center;
  }

  /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  .texte {
    text-align: center;
    font-size: 1rem;
    font-weight: normal;
    font-family: Arial;
    letter-spacing: 1px;
    padding: 15px;
  }
  .texte1 {
    background-color: #11ffee00;
    color: black;
  }

  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .grid-col {
    box-sizing: border-box;
    margin: 0;
    flex: 0 1 auto;
  }

  .col-3 {
    width: 25%;
  }
  @media only screen and (max-width: 799px) {
    .med-4 {
      width: 33.3333%;
    }
  }
  @media only screen and (max-width: 599px) {
    .sml-6 {
      width: 50%;
    }
  }
  @media only screen and (max-width: 479px) {
    .xs-12 {
      width: 100%;
    }
  }
</style>