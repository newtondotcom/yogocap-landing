<script setup lang="ts">
    import { Toaster as Toaster2 } from '@/components/ui/sonner';
    import Toaster from '@/components/ui/toast/Toaster.vue';
    import constants from '@/lib/constants';
    import processSignIn from '@/lib/signin';
    import { toast } from 'vue-sonner';

    useSeoMeta({
        title: 'Yogocap',
        ogTitle: 'Yogocap',
        description:
            'Discover Yogocap, the most cost-effective AI-powered solution for subtitling your social media videos. Ensure your message reaches everyone with our unbeatable prices and high-quality subtitles.',
        ogDescription:
            'Discover Yogocap, the most cost-effective AI-powered solution for subtitling your social media videos. Ensure your message reaches everyone with our unbeatable prices and high-quality subtitles.',
        ogImage: 'https://yogocap.com/mobile.png',
        twitterCard: 'summary_large_image',
    });

    onMounted(() => {
        toast('At registration, you are gifted with a free trial', {
            description: 'Enjoy it now ! 🎉',
            /*
        action: {
        label: 'Ok',
        onClick: () => navigateTo('/auth/login'),
        },
        */
            action: {
                label: 'Got it',
                onClick: () => {},
            },
        });
    });

    async function process() {
        await processSignIn();
    }
    let text = 'Get Started';
</script>

<template>
    <Toaster2 />
    <Toaster />

    <LandingAbout />
    <LandingPricing :action="processSignIn" :text="text" />
    <LandingFeatures />
    <LandingHow />
    <LandingFaq />
    <!--<LandingStats />-->
    <!--<LandingTeam />-->
</template>
