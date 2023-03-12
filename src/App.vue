<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import SideBar from './components/SideBar.vue'
import Content from './components/Content.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";


</script>

<template>
  <header>
    <div>
      <!-- This is an example component -->
      <div>
        <Navbar />
        <div class="flex overflow-hidden bg-white pt-16">
          <SideBar />
          <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
          <Content />
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>
