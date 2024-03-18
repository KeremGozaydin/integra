<script>
	import { AppBar } from "@skeletonlabs/skeleton";
</script>
<AppBar>
    <svelte:fragment slot="lead">
        <div class='pl-4 gap-3 flex flex-row justify-center items-center'>
            <a href='/'>
                <img class='w-12 aspect-square' alt='integra' src='/Removal-141.png'/>
            </a>
            <nobr>Integra 3646</nobr>
        </div>
    </svelte:fragment>
    <svelte:fragment slot='trail'>
        <div class='flex flex-row gap-4 px-4'>
            <a href='/hakkimizda' class='navbar-link'>Hakkımızda</a>
            <a href='/basarilarimiz' class='navbar-link'>Başarılarımız</a>
        </div>
    </svelte:fragment>
</AppBar>