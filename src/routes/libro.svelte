<script>
	/**
	 * @type {number}
	 */
	let scroll;
	let speed = 4
    import home1 from "../images/libro.svg"
    


    var posizione = function(/** @type {number} */ pos) {

        let inizio = 1900;
        let fine = 2300;
        let spostamento =600
        let velocitaIniziale = -0.5; //deve essere negativa
        let velocitaMezzo = 0.7
        let velocitaFinale = -0.5
        

        if (pos < inizio) {
         return ((pos) * velocitaIniziale)+spostamento ;
        } else if (pos > inizio && pos < fine) {
         return (((inizio) * velocitaIniziale)+spostamento)+ (pos - inizio)* velocitaMezzo ;
        } else {
            return (((inizio) * velocitaIniziale)+spostamento)+ ((fine - inizio)* velocitaMezzo) + (pos - fine)* velocitaFinale ;
        }
    };
</script>

<svelte:window bind:scrollY={scroll} />

<h1 class="text-white">{scroll}</h1>
<div class="relative justify-center items-center flex -mt-10 pb-64">

    
    <img class="absolute top-0  object-cover min-h-screen z-10 " src='{home1}' alt='a horse' style:transform={`translate3d(0, ${(posizione(scroll))}px , 0)`}> 


    
   
</div>


<style>


</style>