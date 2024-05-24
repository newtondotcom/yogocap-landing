<script setup lang="ts">
useSeoMeta({
  title: 'Yogocap',
  ogTitle: 'Yogocap',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1712534400&semt=sph',
  twitterCard: 'summary_large_image',
})

import Toaster from '@/components/ui/toast/Toaster.vue'
import { Toaster as Toaster2} from '@/components/ui/sonner'
import { toast } from 'vue-sonner';

onMounted(() => {
    toast('At registration, you are gifted with a free Starter Plan', {
        description: 'Enjoy it now ! 🎉',
        /*
        action: {
        label: 'Ok',
        onClick: () => navigateTo('/auth/login'),
        },
        */
        action: {
            label: 'Got it',
            onClick: () => { },
        },
    })
})

</script>


<template>
  <Toaster2 />
    <Toaster />
    <LandingHeader />
    <LandingAbout />
    <LandingFeatures />
    <LandingHow />
    <!--<LandingStats />-->
    <!--<LandingTeam />-->
    <LandingFooter />
</template>
