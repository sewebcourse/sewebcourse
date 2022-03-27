<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">DIRI</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item px-2">
                        <router-link to="/">হোম</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/about">আমাদের সম্পর্কে</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/shejra-sharif">শাজরা শরীফ</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/news"> নিউজ </router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/admin-news"> Admin News </router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
</template>


<script>
export default {
  name: "Menu",
}
</script>

<style>

</style>