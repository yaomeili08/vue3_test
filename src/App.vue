<script setup>
import { RouterLink, RouterView} from 'vue-router'
import { ref} from 'vue'
let isCollapse = ref(true)
const handleOpen = ()=>{
  isCollapse.value = true
}
const handleClose = ()=>{
  isCollapse.value = true
}
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/search">Search</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
  <div class="common-layout">
    <el-container>
      <el-header>vue3项目练习</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1" :route="{path: '/search'}">
              <template #title>
                <el-icon><location /></el-icon>
                <span>search</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2" :route="{path: '/about'}">
              <el-icon><icon-menu /></el-icon>
              <span>adout</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
