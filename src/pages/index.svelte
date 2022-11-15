<svelte:head>
	<title>Nicolas Pasquet</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
</svelte:head>

<script>
  //importation
  import { supabase } from "../lib/supabaseClient";
  import { onMount } from "svelte";

  //Recuperer info depuis le pop up

  async function addClient(e) {
    showPopup = false;
    const formData = new FormData(e.target);

    const { data, error } = await supabase.from("Client").insert([
      {
        name: formData.get("name"),
        surname: formData.get("prenom"),
        email: formData.get("email"),
        age: formData.get("age"),
        commentaire: formData.get("commentaire")
      }
    ]);
  }

  //importer infos famille

  let Famille = [];
  onMount(async () => {
    const { data, error } = await supabase
      .from("Famille")
      .select("id,membre,image,position,slug");
    console.log(data);
    Famille = data.sort((a, b) => a.position - b.position);
  });

  //Faire la pop-up
  let showPopup = false;
  const openFormBis = () => {
    console.log("testttt");
    showPopup = true;
  };
  const closeFormBis = () => (showPopup = false);
</script>

<!-- -->

<main>

	<section class="grid-wrap">

		<div class="open-btn">
			<button class="open-button" on:click={openFormBis}>
      <strong>          
      <a class="cta" href="#">Contactez Moi</a>
      </strong>
      </button>
		</div>
		<div class="login-popup">
      {#if showPopup}
			  <div class="form-popup" id="popupForm">
          <div class= "container">
            <form on:submit|preventDefault={addClient}>
              <h2>Contacter moi</h2>         
              <label>
              <input type="text" placeholder=" Nom" name=name required>
              </label> 
              <label> 
              <input type="text" placeholder=" Prenom" name=prenom required>
              </label> 
              <label> 
              <input type="text" placeholder="Email" name=email required>
              </label> 
              <label>
              <input type="date" placeholder="Date de Naissance" name=age required>					
              </label>
              <label>
              <input type="text" placeholder="Commentaire" name=commentaire required>					
              </label>
              <button on:submit >Me contacter</button>
              <button on:click={closeFormBis}>Annuler</button>
            </form>
          </div>
			  </div>
      {/if}
		</div>


	{#each Famille as { membre, image, slug }}
		<a href={"/famille/" + slug} class="texte texte1 grid-col col-3 med-4 sml-6 xs-12">
			<h2>{membre}</h2>
			<div class="Famille">
				<p><img src={image} alt="" height="420"></p>
			</div>
		</a>
	{/each}

	</section>
</main>


<style>
  /* CSS Document */
  * {
    padding: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
  }

  /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  h2 {
    text-shadow: #ff006e 2.5px 2.5px 0, black 5px 5px 0, grey 7.5px 7.5px 0,
      #333 10px 10px 10px;
    color: lightgrey;
    display: inline-block;
    font-size: 2.5rem;
    font-weight: normal;
    font-family: Arial;
    letter-spacing: 1px;
    font-weight: Bold;
    padding: 20px;
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

  .Famille:hover {
    box-shadow: 10px 10px lightgrey;
    border: 2px solid #666;
  }

  /* CSS Document */
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

  .open-btn {
    text-align: center;
    position: relative;
    left: 44%;
    cursor: pointer;
  }
  /* Stylez le bouton sur la page */
  .open-button {
    background-color: white;
  }

  /* Positionnez la forme Popup */
  .login-popup {
    position: relative;
    text-align: center;
    width: 100%;
  }
  /* Masquez la forme Popup */
  .form-popup {
    display: block;
    position: fixed;
    left: 50%;
    top: 5%;
    transform: translate(-45%, 5%);
    border: 2px solid rgb(0, 0, 0);
    z-index: 9;
  }
  /* Styles pour le conteneur de la forme */
  .container {
    max-width: 300px;
    padding: 20px;
    background-color: #fff;
  }

  button,
  input {
    border: 0;
    outline: 0;
    font-size: 16px;
    border-radius: 16px * 20;
    padding: 16px;
  }

  form {
    padding: 16px;
    width: 16px * 20;
    margin: 0 auto;
  }

  label {
    display: block;
    margin-bottom: 16px * 1.5;
    width: 100%;
  }

  input {
    margin-right: 16px/2;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;
  }

  button {
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 600;
  }

  .cta {
    display: flex;
    text-decoration: none;
    padding: 10px;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    color: white;
    background: grey;
    transition: 1s;
    box-shadow: 3px 3px 0 black;
    transform: skewX(-15deg);
  }
  .cta:focus {
    outline: none;
  }
  .cta:hover {
    transition: 0.5s;
    box-shadow: 5px 5px 0 black;
    text-decoration: none;
    color: black;
  }
</style>