import { ref } from 'vue'

export const num = ref(0)

export function changeNum() {
    num.value += 1
}
