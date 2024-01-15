import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()
  const onScrollLower = () => {
    guessRef.value?.getMore()
  }
  return {
    guessRef,
    onScrollLower
  }
}
