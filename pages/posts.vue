<template>
    <div class="container mt-5">
        <div class="row gy-4">
            <div v-for="post in posts" :key="post.id" class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        {{ post.title }}dsf
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{ post.body }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth'
})

const headers = useRequestHeaders(['cookie']);
const { data: posts, error } = await useFetch('/api/posts', {
    headers
})
// console.log(posts.value, error);

</script>