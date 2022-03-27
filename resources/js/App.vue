<template>
    <div>
        <component :is="this.$route.meta.layout">    
            <router-view :key ='$route.params'/>
        </component>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>