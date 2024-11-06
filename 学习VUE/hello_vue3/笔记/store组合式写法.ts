import {defineStore} from 'pinia';
import {reactive} from 'vue'

// 组合式
export const useTalkStore = defineStore('talk', () => {
    const storedTalkList = localStorage.getItem('talkList');
    const talkList = reactive(storedTalkList ? JSON.parse(storedTalkList) : [])
    return {talkList}
});
