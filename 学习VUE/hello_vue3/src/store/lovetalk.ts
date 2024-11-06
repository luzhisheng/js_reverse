import { defineStore } from 'pinia';

export const useTalkStore = defineStore('talk', {
    state() {
        // 获取 localStorage 中的数据，并判断是否存在
        const storedTalkList = localStorage.getItem('talkList');

        // 如果存储的 talkList 存在，则解析它，否则使用空数组
        return {
            talkList: storedTalkList ? JSON.parse(storedTalkList) : []
        };
    }
});
