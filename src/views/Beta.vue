<script setup lang="ts">
import { getUnleashVariant } from "@/unleash";
import { mixpanel } from "@/mixpanel";
import { onBeforeMount, onMounted, ref } from "vue";
import type { IVariant } from "unleash-proxy-client";

const visibleButton = ref("flow-b");
const currentStep = ref(1);
let variant = ref<IVariant>();

const flag = "beta-experimentation";

const moveToStep = (step: number) => {
  mixpanel.track("Moved to step " + step, {
    flag,
    variant: variant.value?.name,
  });
  currentStep.value = step;
};

const evaluateFlag = async () => {
  variant.value = await getUnleashVariant(flag);

  if (variant.value.name !== "disabled") {
    visibleButton.value = variant.value.name;
  }
};

onBeforeMount(() => {
  evaluateFlag();
});

onMounted(() => {
  mixpanel.track("Started beta experimentation", {
    flag,
    variant: variant.value?.name,
  });
});
</script>

<template>
  <div>
    <p>Flag: {{ flag }}</p>
    <p v-if="variant">Variant: {{ variant.name }}</p>
  </div>
  <div v-if="currentStep === 1">
    <button
      class="button"
      @click.prevent="moveToStep(2)"
      v-if="visibleButton === 'flow-b'"
    >
      Button B
    </button>
    <button
      class="button"
      @click.prevent="moveToStep(2)"
      v-if="visibleButton === 'flow-c'"
    >
      Button C
    </button>
  </div>
  <div v-if="currentStep === 2">
    <button class="button" @click.prevent="moveToStep(3)">Button A</button>
  </div>
  <div v-if="currentStep === 3">
    <button class="button" @click.prevent="moveToStep(4)">Button D</button>
  </div>
  <div v-if="currentStep === 4">Awesome!!!</div>
</template>
