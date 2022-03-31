<script setup lang="ts"></script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

button,
a {
  text-decoration: none;
  transition: 0.4s;
  color: var(--color-text);
}

.green {
  color: hsla(160, 100%, 37%, 1);
}

.scenario {
  margin-top: 50px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  align-items: center;
}

.button {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 15px 5px;
  min-width: 200px;
  cursor: pointer;
}

.button:hover {
  background-color: hsla(160, 100%, 37%, 0.7);
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
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
</style>
