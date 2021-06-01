<template>
<section class="profile-card">
    <div>
        <slot /> <!-- This is where your markdown content will be inserted -->
    </div>
</section>
</template>

<style scoped>
.profile-card {
    max-width: 350px;
    margin: 2em auto;
    border-radius: .5em;
    background-color: hsla(0,0%,100%,.07);
    box-shadow: .1em .1em .5em .5em rgba(0,0,0,.2);
    /* ... more styles ...*/
}

.profile-img {
    border-radius: 50%;
    /* ... more styles ...*/
}
</style>
