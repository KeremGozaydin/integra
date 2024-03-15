<script>
	import { AppBar } from "@skeletonlabs/skeleton";
    import { page } from '$app/stores';
    $: pathname = $page.url.pathname;
</script>
<AppBar>
    <svelte:fragment slot="lead">
        <h2 class='pl-4'>
            INTEGRA 3646
        </h2>
    </svelte:fragment>
    <svelte:fragment slot='trail'>
        <div class='flex flex-row gap-2 px-4'>
            <button disabled={pathname == '/hakkimizda'} class='navbar-button'>Hakkımızda</button>
            <button disabled={pathname == '/basarilarimiz'} class='navbar-button'>Başarılarımız</button>
            <button disabled={pathname == '/uyelerimiz'} class='navbar-button'>Üyelerimiz</button>
            <button disabled={pathname == '/blog'} class='navbar-button'>Blog</button>
        </div>
    </svelte:fragment>
</AppBar>