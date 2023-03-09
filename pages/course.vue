<template>
  <div class="prose mb-12">
    <h1>
      <span class="font-medium">
        Course:
        <span class="font-bold">Mastering Nuxt 3</span>
      </span>
    </h1>
  </div>

  <div class="flex flex-row justify-center flex-grow">
    <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] flex flex-col">
      <h3>Chapters</h3>
      <div class="space-y-1 mb-4 flex flex-col" v-for="chapter in chapters" :key="chapter.slug">
        <h4>{{ chapter.title }}</h4>
        <NuxtLink v-for="(lesson, index) in chapter.lessons" :to="lesson.path">
          <span>{{ index + 1 }}. </span>
          <span>{{ lesson.title }}</span>
        </NuxtLink>
      </div>
    </div>

    <div class="prose p-12 bg-white rounded-md w-[65ch]">
      <NuxtErrorBoundary>
        <NuxtPage />
        <template #error="{ error }">
          <p>
            Oh no, something broke in the lesson
            <code>{{ error }}</code>
          </p>
          <p>
            <button class="hover:curspr-pointer bg-gray-500 text-white font-bold" @click="resetError(error)">
              Reset
            </button>
          </p>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>

<script setup>
const { chapters } = useCourse();
/* definePageMeta({
  layout: false,
}) */

const resetError = async (error) => {
  await navigateTo(
    '/course/chapter/chapter-1/lesson/lesson-1'
  )
  error.value = null;
}
</script>

<style scoped>
.router-link-active {
  color: blue;
}
</style>