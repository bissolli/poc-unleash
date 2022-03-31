<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import Header from "../components/Header.vue";
import { identifyUnleash, startUnleash, isUnleashReady } from "../unleash";
import { identifyMixpanel, startMixpanel, isMixpanelReady } from "../mixpanel";
import { computed, onBeforeMount } from "vue";

const { query } = useRoute();

const userId = computed(() => {
  const id = Array.isArray(query.id) ? query.id[0] : query.id;
  return typeof id === "string" ? id : null;
});

const setupUnleash = async () => {
  if (isUnleashReady()) {
    return true;
  }

  if (userId.value) {
    await identifyUnleash(userId.value);
  }

  await startUnleash();

  return true;
};

const setupMixPanel = async () => {
  if (isMixpanelReady()) {
    return true;
  }

  await startMixpanel();

  if (userId.value) {
    await identifyMixpanel(userId.value);
  }

  return true;
};

onBeforeMount(async () => {
  await Promise.all([setupMixPanel(), setupUnleash()]);
});
</script>

<template>
  <header>
    <div class="wrapper">
      <Header msg="A/B Testing POC - Unleash" />

      <nav>
        <RouterLink :to="{ name: 'alpha', query: query }">Alpha</RouterLink>
        <RouterLink :to="{ name: 'beta', query: query }">Beta</RouterLink>
      </nav>
    </div>
  </header>

  <div class="scenario">
    <RouterView />
  </div>
</template>
