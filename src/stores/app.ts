import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
  const loading = ref<boolean>(true);

  const loadingProgress = ref<number>(0);

  return {
    loading,
    loadingProgress,
  };
});
