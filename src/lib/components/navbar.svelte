<script>
	import { AppBar } from "@skeletonlabs/skeleton";
    import { page } from '$app/stores';
	import { goto } from "$app/navigation";
    $: pathname = $page.url.pathname;
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
        <div class='flex flex-row gap-2 px-4'>
            <button on:click={() => goto('/hakkimizda')} disabled={pathname == '/hakkimizda'} class='navbar-button'>Hakkımızda</button>
            <button on:click={() => goto('/basarilarimiz')} disabled={pathname == '/basarilarimiz'} class='navbar-button'>Başarılarımız</button>
            <button on:click={() => goto('/uyelerimiz')} disabled={pathname == '/uyelerimiz'} class='navbar-button'>Üyelerimiz</button>
            <button on:click={() => goto('/blog')} disabled={pathname == '/blog'} class='navbar-button'>Blog</button>
        </div>
    </svelte:fragment>
</AppBar>