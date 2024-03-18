<script lang='ts'>
	import Icon from '@iconify/svelte';

    let socials = [
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/integra_3646/',
            icon: 'mdi:instagram'
        },
        {
            name: 'Twitter',
            link: 'https://twitter.com/FRC_Integra3646',
            icon: 'mdi:twitter'
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/company/integra3646/about/',
            icon: 'mdi:linkedin'
        },
        {
            name: 'YouTube',
            link: 'https://www.youtube.com/channel/UCi-x2OCIBbGx9_hlDSawa2A',
            icon: 'mdi:youtube'
        }
    ]
</script>

<div class='page-footer flex flex-row justify-center px-6 items-center pb-2 border-t-2 border-surface-700 py-2'>
    <div class='flex flex-row gap-4 justify-center'>
        {#each socials as social}
            <a href={social.link} class='btn-icon'>
                <Icon class='w-8 h-8' icon="{social.icon}" />
            </a>
        {/each}
    </div>
</div>