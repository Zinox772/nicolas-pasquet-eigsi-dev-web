<script>
  import { onMount } from "svelte";
  import { supabase } from "../lib/supabaseClient";

  let Footer = [];
  onMount(async () => {
    const { data, error } = await supabase
      .from("Footer")
      .select("apropos,myfamily")
      .limit(1)
      .single();
    console.log(data);
    Footer = data;
  });
</script>


<div class="footer-dark">
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-md-3 item">
				<h3>Ma Famille</h3>
				<ul>
          {#if Footer.myfamily}
            {#each Footer.myfamily as member, i}
              <li><a href={"/"+member}>{member}</a></li>
            {/each}
          {/if}
				</ul>
			</div>
			<div class="col-sm-6 col-md-3 item">
				<h3>Informations</h3>
				<ul>
					<li><a href="mailto:nicolas.pasquet.23@eigsi.Fr">Email</a></li>
				</ul>
			</div>
			<div class="col-md-6 item text">
				<h3>A propos de ma Famille</h3>
        <p>{Footer.apropos}</p>
			</div>
			<div class="col item social"><a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>
      <a href="https://www.twitter.com"><i class="icon ion-social-twitter"></i></a>
      <a href="https://www.instagram.com/"><i class="icon ion-social-instagram"></i></a>
      </div>
		</div>
		<p class="copyright">Nicolas Pasquet</p>
	</div>
</div>

<style>
  .footer-dark {
    padding: 15px 0;
    color: #f0f9ff;
    background-color: #282d32;
  }
  .footer-dark h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 16px;
  }
  .footer-dark ul {
    padding: 0;
    list-style: none;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 0;
  }
  .footer-dark ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.6;
  }
  .footer-dark ul a:hover {
    opacity: 0.8;
  }
  .footer-dark .item.text {
    margin-bottom: 36px;
  }
  .footer-dark .item.text p {
    opacity: 0.6;
    margin-bottom: 0;
  }
  .footer-dark .item.social {
    text-align: center;
  }
  .footer-dark .item.social > a {
    font-size: 20px;
    width: 36px;
    height: 36px;
    display: inline-block;
    margin: 0 8px;
    color: #fff;
    opacity: 0.75;
  }
  .footer-dark .item.social > a:hover {
    opacity: 0.9;
  }
  .footer-dark .copyright {
    text-align: center;
    padding-top: 24px;
    opacity: 0.3;
    font-size: 13px;
    margin-bottom: 0;
  }
</style>