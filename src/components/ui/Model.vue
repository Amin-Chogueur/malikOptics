<script setup>
import { ref } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const showModal = ref(false);
const emit = defineEmits(["closeModel"]);
</script>

<template>
  <!-- Button to open modal -->

  <!-- Modal overlay with blur background -->
  <div
    class="fixed inset-0 flex items-center justify-center z-[9999] backdrop-blur-sm bg-black/40"
  >
    <!-- Modal box -->
    <div class="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 relative">
      <!-- Close icon -->
      <button
        @click="emit('closeModel')"
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        <XMarkIcon class="w-6 h-6" />
      </button>

      <!-- Modal content -->
      <slot></slot>
    </div>
  </div>
</template>
