<template>
    <div>
        <h1>This is About Us</h1>
        <Menu/>

        <Footer/>
    </div>
</template>

<script>
import Menu from "./components/Menu.vue"
import Footer from "./coponents/Footer.vue"
export default {
    components: {
    Menu,
    Footer,
  }
}
</script>