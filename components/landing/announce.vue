<script setup lang="ts">
    let visible = false;

    onMounted(() => {
        if (localStorage.getItem('announce') === 'true') return;
        visible = true;
    });

    const close = () => {
        localStorage.setItem('announce', 'true');
        visible = false;
    };
</script>

<template>
    <div v-if="visible" class="fixed inset-x-0 bottom-0 p-4 transition:fade">
        <div
            class="relative flex items-center justify-between gap-4 rounded-lg bg-primary px-4 py-3 text-white shadow-lg"
        >
            <p class="text-sm font-medium">
                Love Alpine JS?
                <button class="inline-block underline">Check out this new course!</button>
            </p>

            <button
                aria-label="Close"
                class="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
                on:click="{close}"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>
