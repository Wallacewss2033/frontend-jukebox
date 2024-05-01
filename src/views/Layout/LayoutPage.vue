<!-- src/components/Layout.vue -->

<template>
		<header-component />
    <main class="layout-container">
      <router-view/>
    </main>
</template>

<script>
import './styles.css';
import HeaderComponent from '@/components/Header/HeaderComponent.vue';
export default {
  name: "LayoutPage",
	components: {
		HeaderComponent
	}
};
</script>
