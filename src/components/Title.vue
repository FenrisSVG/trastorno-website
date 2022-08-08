<template>
    <h2 class="article-header__title">{{title}} <span>{{subtitle}}</span></h2>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: String,
        subtitle: String
    }
}
</script>