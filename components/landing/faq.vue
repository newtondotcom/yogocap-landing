<template>
  <section id="features" class="bg-secondary flex flex-col justify-center items-center h-[50vh] w-full">
    <div class="text-3xl font-bold mb-4">Frequently Asked Questions</div>
    <Accordion type="multiple" class="px-4 md:px-32 w-full">
      <AccordionItem
        v-for="(item, idx) in questions"
        :key="idx"
        :value="`item-${idx}`"
      >
        <AccordionTrigger>{{ item.question }}</AccordionTrigger>
        <AccordionContent>
          {{ item.answer }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
</template>

<script setup lang="ts">

const questions = [
  {
    question: 'In which languages are the video subtitles available?',
    answer: 'Since we use advanced AI, we support all languages. Just upload your video, and we will take care of the rest.',
  },
  {
    question: 'Is it free to use?',
    answer: 'It is free to test. While a free plan is available upon joining, you will need to pay to use our service fully and more frequently. At Yogocap, we offer a one-time payment option instead of a monthly subscription. Our goal is to provide you with the best experience without requiring a subscription, even if it means reducing our profits.',
  },
  {
    question: 'Are the emojis included?',
    answer: 'AI-generated emojis are included in the Premium plan. They are generated based on the content of your video. The combinations are constantly evolving to provide you with the best possible "translation."',
  },
  {
    question: 'How accurate are the subtitles?',
    answer: 'Thanks to the latest models from OpenAI, we guarantee high accuracy.',
  },
]


</script>