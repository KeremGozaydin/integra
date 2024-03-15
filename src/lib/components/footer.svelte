<script lang='ts'>
	import Icon from '@iconify/svelte';

    let socials = [
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/integra3646',
            icon: 'mdi:instagram'
        },
        {
            name: 'Twitter',
            link: 'https://www.twitter.com/integra3646',
            icon: 'mdi:twitter'
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/company/integra3646',
            icon: 'mdi:linkedin'
        },
        {
            name: 'YouTube',
            link: 'https://www.youtube.com/channel/UCjJ3H6P5Kk3xX5jZpC7Pz9A',
            icon: 'mdi:youtube'
        }
    ]
</script>

<div class='page-footer'>
    <div class='flex flex-row gap-4 justify-center'>
        {#each socials as social}
            <a href={social.link} class='btn-icon'>
                <Icon class='w-8 h-8' icon="{social.icon}" />
            </a>
        {/each}
    </div>
    <div class='text-center'>
        <p>© 2024 INTEGRA 3646</p>
    </div>
</div>