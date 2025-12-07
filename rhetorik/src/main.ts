import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import './style.css'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { 
    routes,
    scrollBehavior(to, from, savedPosition) {
      // Immer nach oben scrollen bei Navigation
      return { top: 0 }
    }
  },
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  }
)
