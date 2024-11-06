import { createRouter, createWebHistory } from 'vue-router'
import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_custom-event/Father.vue'
import Bus from '@/pages/03_mitt/Father.vue'
import Model from '@/pages/04_v-model/Father.vue'
import AttrsListeners from '@/pages/05_$attrs/Father.vue'
import RefChildrenParent from '@/pages/06_$refs-$parent/Father.vue'
import ProvideInject from '@/pages/07_provide-inject/Father.vue'
import Pinia from '@/pages/08_pinia/Father.vue'
import Slot from '@/pages/09_slot/Father.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/props',
            component: Props
        },
        {
            path: '/event',
            component: Event
        },
        {
            path: '/mitt',
            component: Bus
        },
        {
            path: '/model',
            component: Model
        },
        {
            path: '/attrs',
            component: AttrsListeners
        },
        {
            path: '/ref-parent',
            component: RefChildrenParent
        },
        {
            path: '/provide-inject',
            component: ProvideInject
        },
        {
            path: '/pinia',
            component: Pinia
        },
        {
            path: '/slot',
            component: Slot
        },
    ]
})