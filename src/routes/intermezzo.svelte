<script>
	import { fly } from 'svelte/transition';
	let visible = true;

    import { inview } from 'svelte-inview';
    import { fade } from 'svelte/transition';

    let isInView;


    import { base } from '$app/paths';
    import logo from "../images/logo2.svg"
</script>


<div class="bg-mydarkgreen h-[1000px] flex flex-col justify-center items-center">

    <div
    class="wrapper"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
      isInView = detail.inView;
    }}
  >
    

    {#if isInView}

	<div class="" transition:fly={{ y: 200, duration: 1500 , delay: 0}}>

    <div class="flex flex-col items-center mb-64 ">


    <img class="w-64  pb-8" src={logo} alt="icon"/>
    
    <h1 class="text-white text-center text-[100px] ">
        La Penna Parlante
    </h1>

    </div>

</div>

    {/if}

  </div>
    
</div>