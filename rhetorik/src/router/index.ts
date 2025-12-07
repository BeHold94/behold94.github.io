import type { RouteRecordRaw } from 'vue-router'
import Startseite from '@/views/Startseite.vue'
import Ueber from '@/views/Ueber.vue'
import KurseUndTrainings from '@/views/KurseUndTrainings.vue'
import Kontakt from '@/views/Kontakt.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'startseite',
    component: Startseite,
  },
  {
    path: '/ueber',
    name: 'ueber',
    component: Ueber,
  },
  {
    path: '/kurse',
    name: 'kurse',
    component: KurseUndTrainings,
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: Kontakt,
  },
]
