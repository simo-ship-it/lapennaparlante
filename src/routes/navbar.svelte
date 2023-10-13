
<script>
  import { base } from '$app/paths';
  import logo from "../images/logo.svg"
  
</script>


<nav>

    <div class="px-4 md:px-16 justify-between items-center py-1 flex h-10 md:h-14 bg-mydarkgreen absolute  w-[100%] mx-auto inset-x-0 top-0">
    <div class="flex">
        <div class="inline-flex bg-mybaige p-1 pb-3 pt-10 rounded-b-lg" >
            <img class="w-14 md:w-20" src={logo} alt=" icon"/>
        </div>
    
        <h1 class="text-white mt-9 md:mt-10 ml-4 text-2xl md:text-3xl">la Penna Parlante</h1>
    </div>
        <!-- pulsanti -->
  
        <ul class=" justify-between w-[800px] -mr-2 hidden md:inline-flex">
  
  
            <a class="my-auto  py-1 px-4 text-xl  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200 text-white" href="{base}/about">home</a>
  
            <a class="my-auto  py-1 px-4 text-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200 text-white" href="{base}/about">chi sono</a>
  
            <a class="my-auto  py-1 px-4 text-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-11   duration-200 text-white" href="{base}/about">servizi</a>

            <a class="my-auto  py-1 px-4 text-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200 text-white" href="{base}/about">blog</a>

            <a class="my-auto  py-1 px-4 text-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110   duration-200 text-white" href="{base}/about">contatti</a>
      
  
        </ul>
    </div>

  </nav>