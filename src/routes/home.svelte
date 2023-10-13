<script>
	/**
	 * @type {number}
	 */
	let scroll;
	let speed = 4
    import home1 from "../images/1home.png"
    import home2 from "../images/home.jpg"
</script>

<svelte:window bind:scrollY={scroll} />

<h1 class="text-white">{scroll}</h1>
<div class="relative justify-center -mt-10 pb-64">
    <img class="absolute bottom-0  w-screen object-cover min-h-full -z-20 " src='{home2}' alt='a bird' style:transform={`translate3d(0, ${scroll * 0.25}px, 0)`}>

    <img class="absolute bottom-0  w-screen object-cover min-h-full -z-10 " src='{home1}' alt='a horse' style:transform={`translate3d(0, ${scroll * 0.1}px , 0)`}> 
    
    
    <div class="relative h-screen justify-start flex items-end" style:transform={`translate3d(0, ${scroll * -0.25}px, 0)`}> 

        <div class="relative text-start mx-4 md:mx-16 pb-28 md:pb-20"> 
          <div class=" relative z-20">
      
            <h1 class=" text-4xl md:text-6xl lg:w-1/2 md:leading-[4rem] pb-10 text-white">Per chi, come me, crede che le storie possano cambiare il mondo</h1>
            <h1 class=" text-xl md:text-2xl lg:w-1/2 md:leading-[2.5rem] text-white">Benvenuti nel mio mondo editoriale, La Penna parlante, dove l’amore per le parole si unisce all'arte di trasformare idee in romanzi coinvolgenti. Mi chiamo Cecilia e sono un editor freelance piena di passione, con l'obiettivo di portare ogni vostra storia al suo massimo potenziale.</h1>
      
          </div>
          <div class="absolute inset-0 py-30 rounded-xl blur-3xl bg-black/60 z-10 lg:w-1/2"></div>
        </div>
      
      </div>
   
</div>


<style>


</style>