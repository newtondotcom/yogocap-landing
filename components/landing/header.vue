<script setup lang="ts">
    import processSignIn from '@/lib/signin';

    const route = useRoute();
    async function process() {
        await processSignIn();
    }
</script>

<template>
    <header>
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <div class="flex">
                <NuxtLink to="/">
                    <div class="text-primary font-bold text-2xl underline cursor-pointer">
                        Yogocap
                    </div>
                </NuxtLink>
            </div>

            <div class="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-sm">
                        <li>
                            <a
                                href="/#about"
                                class="text-gray-500 transition hover:text-gray-500/75"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="/#pricing"
                                class="text-gray-500 transition hover:text-gray-500/75"
                            >
                                Pricing
                            </a>
                        </li>

                        <li>
                            <a
                                href="/#features"
                                class="text-gray-500 transition hover:text-gray-500/75"
                            >
                                Features
                            </a>
                        </li>
                        <!--
            <li>
              <a href="#team" class="text-gray-500 transition hover:text-gray-500/75" >
                Team
              </a>
            </li>
            -->
                    </ul>
                </nav>

                <div class="flex items-center gap-4">
                    <div class="sm:flex sm:gap-4">
                        <!--
            <button
            class="hidden rounded-md bg-white px-2 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
            on:click={toogle}
          >
          <svg class="w-6 h-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ic_fluent_dark_theme_24_regular</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_dark_theme_24_regular" fill="#212121" fill-rule="nonzero"> <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
          </button>-->
                        <div class="relative inline-block">
                            <div
                                class="absolute top-0 left-0 rounded-full -translate-y-1/3 -translate-x-1/2 border-2 border-primary bg-white text-primary px-2 py-[2px] text-xs z-10"
                            >
                                Free trial
                            </div>
                            <Button @click="process" class="px-5 py-2.5">Login or Register</Button>
                        </div>

                        <!--
            <NuxtLink
            v-if = "!{userLoggedIn}"
            to='/auth/register'
            class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:text-primary/75 sm:block"
            >
              Register
            </NuxtLink>
            -->
                        <!--
            <NuxtLink
              v-if = "userLoggedIn"
              to="/dashboard"
            >            
            <Button class="px-5 py-2.5">
              Dashboard
            </Button>
            </NuxtLink>
                  -->
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
