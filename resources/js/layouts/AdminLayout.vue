<template>
    <section class="">
        <section class="row m-2">
            <h5 class="text-center col-md-3" >মাইজভান্ডার দরবার শরীফ</h5>
            <!-- <ScrollNews class="col-md-9"/> -->
        </section>
        <Menu  class="sticky-top"/>
        <slot/>
        <Footer class="3" />
    </section>   
</template>

<script>
    import Menu from '../components/admin/AdminMenu.vue';
    // import ScrollNews from '@/components/main/ScrollNews';
    import Footer from '../components/admin/AdminFooter.vue';
    
    export default {
        name:'Default Layout',
        components : {
            Menu,
            // ScrollNews,
            Footer,
        
        }
    }
</script>

<style scoped >
    
</style>