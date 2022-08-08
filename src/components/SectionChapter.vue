<template>
    <div class="section-chapter">
        <div class="section-chapter__container">
            <p class="section-chapter__text">{{part}}</p>
            <i class="fas fa-long-arrow-alt-right section-chapter__icon"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chapter',
    props: {
        part: String
    }
}
</script>