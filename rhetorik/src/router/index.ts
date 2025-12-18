import type { RouteRecordRaw } from 'vue-router'
import Startseite from '@/views/Startseite.vue'
import Ueber from '@/views/Ueber.vue'
import KurseUndTrainings from '@/views/KurseUndTrainings.vue'
import KurseUndTrainings2 from '@/views/KurseUndTrainings2.vue'
import AllgemeinesRhetorikTraining from '@/views/AllgemeinesRhetorikTraining.vue'
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
    path: '/kurse/allgemeines-rhetorik-training',
    name: 'allgemeines-rhetorik-training',
    component: AllgemeinesRhetorikTraining,
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: Kontakt,
  },
]
