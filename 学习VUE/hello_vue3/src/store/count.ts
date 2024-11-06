import {defineStore} from 'pinia'

export const useCountStore = defineStore('count', {
        // 动作函数响应动作
        actions: {
            increment(val: Number) {
                if (this.sum < 10) {
                    this.sum += val
                }
            },
            reduce(val: Number) {
                if (this.sum > -10) {
                    this.sum -= val
                }
            },
        },
        state() {
            return {sum: 6}
        },

        // 放大 函数 state的返回值，有点hook的感觉
        getters : {
            bigSum(state){
                return state.sum * 10
            }
        }
    }
)