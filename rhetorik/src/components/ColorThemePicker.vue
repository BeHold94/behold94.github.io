<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Props
interface Props {
  variant?: 'desktop' | 'mobile'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'desktop'
})

// Emits
const emit = defineEmits<{
  close: []
}>()

// Farbpaletten-Definitionen - Professionelle & Seriöse Themes
const colorThemes = [
  {
    name: 'Anthrazit & Türkis',
    primary: {
      50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db',
      400: '#9ca3af', 500: '#6b7280', 600: '#374151', 700: '#1f2937',
      800: '#111827', 900: '#030712'
    },
    secondary: {
      50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9',
      400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490',
      800: '#155e75', 900: '#164e63'
    }
  },
  {
    name: 'Corporate Dunkelblau',
    primary: {
      50: '#f0f4f8', 100: '#d9e2ec', 200: '#bcccdc', 300: '#9fb3c8',
      400: '#829ab1', 500: '#627d98', 600: '#486581', 700: '#334e68',
      800: '#243b53', 900: '#102a43'
    },
    secondary: {
      50: '#fff9f0', 100: '#ffefd6', 200: '#ffd9a3', 300: '#ffbe6f',
      400: '#ffa23e', 500: '#ff8a1f', 600: '#e67700', 700: '#b85d00',
      800: '#8a4600', 900: '#5c2f00'
    }
  },
  {
    name: 'Taupe & Kupfer',
    primary: {
      50: '#faf9f7', 100: '#f5f1ed', 200: '#e8e0d5', 300: '#d9ccb9',
      400: '#c4b5a0', 500: '#a89984', 600: '#8b7a68', 700: '#6d5d4f',
      800: '#524539', 900: '#3a2f25'
    },
    secondary: {
      50: '#fef5f1', 100: '#fde7dd', 200: '#fbc9b8', 300: '#f7a68f',
      400: '#f17d5e', 500: '#e85735', 600: '#d13a1f', 700: '#b02a15',
      800: '#8f1f10', 900: '#70180d'
    }
  },
  {
    name: 'Schokobraun & Beige',
    primary: {
      50: '#faf8f5', 100: '#f2ebe3', 200: '#e0d0c1', 300: '#ccb39e',
      400: '#b4917a', 500: '#9a6f57', 600: '#7d5642', 700: '#614033',
      800: '#482d25', 900: '#321f19'
    },
    secondary: {
      50: '#fdfcfa', 100: '#faf7f2', 200: '#f5f0e8', 300: '#ebe3d5',
      400: '#ddd0ba', 500: '#cbb89f', 600: '#b39f85', 700: '#97866d',
      800: '#756857', 900: '#574d41'
    }
  },
  {
    name: 'Olivgrün & Sand',
    primary: {
      50: '#f8f9f5', 100: '#eef1e6', 200: '#d9e0c8', 300: '#c1cda5',
      400: '#a5b67e', 500: '#899d5b', 600: '#6d7e47', 700: '#556336',
      800: '#3f4a28', 900: '#2d341c'
    },
    secondary: {
      50: '#fdfcf9', 100: '#f9f5ed', 200: '#f2e9d6', 300: '#e8d9b8',
      400: '#dbc595', 500: '#ccaf72', 600: '#b89654', 700: '#9d7b3f',
      800: '#7d622e', 900: '#5c4720'
    }
  },
  {
    name: 'Aubergine & Gold',
    primary: {
      50: '#faf7f9', 100: '#f2ecf0', 200: '#e0d1dc', 300: '#cab0c3',
      400: '#b08ba5', 500: '#946787', 600: '#764d6a', 700: '#5c3a52',
      800: '#452a3d', 900: '#301d2b'
    },
    secondary: {
      50: '#fefbf3', 100: '#fdf5e1', 200: '#fae8b8', 300: '#f6d88a',
      400: '#f1c555', 500: '#e8af2a', 600: '#d49517', 700: '#b07612',
      800: '#8b5b10', 900: '#67420e'
    }
  },
  {
    name: 'Navy & Bernstein',
    primary: {
      50: '#f0f4f9', 100: '#dce5f2', 200: '#b9cce5', 300: '#96b3d8',
      400: '#5f87bc', 500: '#3d5f8f', 600: '#2d4672', 700: '#1f3152',
      800: '#14213d', 900: '#0a1628'
    },
    secondary: {
      50: '#fff9ed', 100: '#ffeed4', 200: '#ffdaa8', 300: '#ffc066',
      400: '#ffa229', 500: '#ff8800', 600: '#e67200', 700: '#c25d00',
      800: '#9e4a00', 900: '#7a3900'
    }
  },
]

const selectedTheme = ref(0)
const customPrimaryColor = ref('#374151')
const customSecondaryColor = ref('#06b6d4')
const isCustomMode = ref(false)

const selectTheme = (index: number) => {
  selectedTheme.value = index
  isCustomMode.value = false
  const theme = colorThemes[index]
  if (theme) {
    applyTheme(theme)
  }
  if (props.variant === 'desktop') {
    emit('close')
  }
}

const selectCustomMode = () => {
  selectedTheme.value = -1
  isCustomMode.value = true
  applyCustomColors()
}

const applyTheme = (theme: typeof colorThemes[0]) => {
  const root = document.documentElement
  
  // Primary Colors
  Object.entries(theme.primary).forEach(([shade, color]) => {
    root.style.setProperty(`--color-primary-${shade}`, color)
  })
  
  // Secondary Colors
  Object.entries(theme.secondary).forEach(([shade, color]) => {
    root.style.setProperty(`--color-secondary-${shade}`, color)
  })
}

const applyCustomColors = () => {
  const root = document.documentElement
  
  // Einfache Custom Colors (nur die Hauptfarben)
  root.style.setProperty('--color-primary-600', customPrimaryColor.value)
  root.style.setProperty('--color-secondary-500', customSecondaryColor.value)
  
  // Generiere hellere/dunklere Varianten (vereinfacht)
  root.style.setProperty('--color-primary-500', lightenColor(customPrimaryColor.value, 20))
  root.style.setProperty('--color-primary-700', darkenColor(customPrimaryColor.value, 20))
  root.style.setProperty('--color-secondary-600', darkenColor(customSecondaryColor.value, 15))
}

const lightenColor = (color: string, percent: number): string => {
  const num = parseInt(color.replace('#', ''), 16)
  const amt = Math.round(2.55 * percent)
  const R = Math.min(255, (num >> 16) + amt)
  const G = Math.min(255, (num >> 8 & 0x00FF) + amt)
  const B = Math.min(255, (num & 0x0000FF) + amt)
  return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)
}

const darkenColor = (color: string, percent: number): string => {
  const num = parseInt(color.replace('#', ''), 16)
  const amt = Math.round(2.55 * percent)
  const R = Math.max(0, (num >> 16) - amt)
  const G = Math.max(0, (num >> 8 & 0x00FF) - amt)
  const B = Math.max(0, (num & 0x0000FF) - amt)
  return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)
}

onMounted(() => {
  // Initiales Theme anwenden
  const initialTheme = colorThemes[selectedTheme.value]
  if (initialTheme) {
    applyTheme(initialTheme)
  }
})
</script>

<template>
  <!-- Desktop Variant -->
  <div v-if="variant === 'desktop'" class="p-2">
    <button
      v-for="(theme, index) in colorThemes"
      :key="index"
      @click="selectTheme(index)"
      :class="['w-full text-left px-4 py-3 rounded hover:bg-gray-100 transition-colors flex items-center justify-between', selectedTheme === index && !isCustomMode ? 'bg-gray-100' : '']"
    >
      <span class="font-medium text-gray-800">{{ theme.name }}</span>
      <div class="flex gap-1">
        <div 
          class="w-6 h-6 rounded-full border border-gray-300"
          :style="{ backgroundColor: theme.primary[600] }"
        ></div>
        <div 
          class="w-6 h-6 rounded-full border border-gray-300"
          :style="{ backgroundColor: theme.secondary[500] }"
        ></div>
      </div>
    </button>
    
    <!-- Custom Color Option -->
    <div class="border-t border-gray-200 mt-2 pt-2">
      <div :class="['w-full px-4 py-3 rounded', isCustomMode ? 'bg-gray-100' : '']">
        <div class="flex items-center justify-between mb-3">
          <span class="font-medium text-gray-800">Custom</span>
          <button
            @click="selectCustomMode"
            class="text-xs bg-primary-600 text-white px-3 py-1 rounded hover:bg-primary-500 transition-colors"
          >
            Aktivieren
          </button>
        </div>
        <div v-if="isCustomMode" class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-xs text-gray-600 w-24">Primary:</label>
            <input 
              type="color" 
              v-model="customPrimaryColor"
              @input="applyCustomColors"
              class="w-12 h-8 rounded cursor-pointer border border-gray-300"
            />
            <span class="text-xs text-gray-500 font-mono">{{ customPrimaryColor }}</span>
          </div>
          <div class="flex items-center gap-2">
            <label class="text-xs text-gray-600 w-24">Secondary:</label>
            <input 
              type="color" 
              v-model="customSecondaryColor"
              @input="applyCustomColors"
              class="w-12 h-8 rounded cursor-pointer border border-gray-300"
            />
            <span class="text-xs text-gray-500 font-mono">{{ customSecondaryColor }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Variant -->
  <div v-else class="space-y-2">
    <button
      v-for="(theme, index) in colorThemes"
      :key="index"
      @click="selectTheme(index); $emit('close')"
      :class="['w-full px-4 py-3 rounded-lg border-2 transition-all flex items-center justify-between', selectedTheme === index && !isCustomMode ? 'border-primary-600 bg-primary-50' : 'border-gray-200 hover:border-gray-300']"
    >
      <span class="font-medium text-gray-800 text-left">{{ theme.name }}</span>
      <div class="flex gap-2">
        <div 
          class="w-8 h-8 rounded-full border border-gray-300"
          :style="{ backgroundColor: theme.primary[600] }"
        ></div>
        <div 
          class="w-8 h-8 rounded-full border border-gray-300"
          :style="{ backgroundColor: theme.secondary[500] }"
        ></div>
      </div>
    </button>
    
    <!-- Custom Color Option Mobile -->
    <div :class="['w-full px-4 py-4 rounded-lg border-2 transition-all', isCustomMode ? 'border-primary-600 bg-primary-50' : 'border-gray-200']">
      <div class="flex items-center justify-between mb-3">
        <span class="font-medium text-gray-800">Custom</span>
        <button
          @click="selectCustomMode"
          class="text-xs bg-primary-600 text-white px-3 py-1.5 rounded hover:bg-primary-500 transition-colors"
        >
          Aktivieren
        </button>
      </div>
      <div v-if="isCustomMode" class="space-y-3 mt-4">
        <div class="flex items-center gap-3">
          <label class="text-sm text-gray-700 font-medium w-24">Primary:</label>
          <input 
            type="color" 
            v-model="customPrimaryColor"
            @input="applyCustomColors"
            class="w-16 h-10 rounded cursor-pointer border border-gray-300"
          />
          <span class="text-xs text-gray-500 font-mono">{{ customPrimaryColor }}</span>
        </div>
        <div class="flex items-center gap-3">
          <label class="text-sm text-gray-700 font-medium w-24">Secondary:</label>
          <input 
            type="color" 
            v-model="customSecondaryColor"
            @input="applyCustomColors"
            class="w-16 h-10 rounded cursor-pointer border border-gray-300"
          />
          <span class="text-xs text-gray-500 font-mono">{{ customSecondaryColor }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles für den Color Picker */
</style>
