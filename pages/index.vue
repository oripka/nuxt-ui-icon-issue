<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/mycontent').findOne())
if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
<div>
        <ULandingSection :title="page.features.title" :description="page.features.description">
            <UPageGrid>
                <ULandingCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" />
            </UPageGrid>
        </ULandingSection>


        <ULandingHero title="Access to Courses" description="Register or login to access courses."
          :links="[{ label: 'Register', icon: 'i-heroicons-rocket-launch', size: 'lg', to: '/' }, { label: 'Sign in', color: 'gray', size: 'lg', to: '/' }]" />

    </div>
</template>

<style scoped>

</style>