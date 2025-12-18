<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ColorThemePicker from './components/ColorThemePicker.vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isColorDropdownOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  isColorDropdownOpen.value = false
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleColorDropdown = () => {
  isColorDropdownOpen.value = !isColorDropdownOpen.value
}

const closeColorDropdown = () => {
  isColorDropdownOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="app-layout">
    <!-- Header with Logo and Navigation -->
    <header 
      :class="['bg-white flex items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'py-3' : 'py-6']"
    >
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
        <!-- Logo Left -->
        <div>
          <RouterLink to="/" class="no-underline" @click="closeMenu">
            <div>
              <h2 
                :class="['m-0 font-bold leading-tight text-primary-600 transition-all duration-300', isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl']"
              >
                Maximilian Höslinger
              </h2>
              <p 
                :class="['m-0 text-secondary-500 font-semi-bold transition-all duration-300', isScrolled ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm']"
              >
                Wirkungsvoll kommunizieren.
              </p>
            </div>
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex gap-6 items-center">
          <RouterLink to="/" class="nav-link">Startseite</RouterLink>
          <RouterLink to="/ueber" class="nav-link">Über</RouterLink>
          <RouterLink to="/kurse" class="nav-link">Kurse & Trainings</RouterLink>
          
          <!-- Color Theme Dropdown -->
          <div class="relative">
            <button 
              @click="toggleColorDropdown"
              class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              Farben
            </button>
            
            <div 
              v-show="isColorDropdownOpen"
              class="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
            >
              <ColorThemePicker variant="desktop" @close="closeColorDropdown" />
            </div>
          </div>
          
          <RouterLink to="/kontakt" class="bg-secondary-500 text-white px-6 py-2 font-semibold hover:bg-secondary-600 transition-colors no-underline">
            Kontakt
          </RouterLink>
        </nav>

        <!-- Burger Menu Button -->
        <button 
          @click="toggleMenu"
          class="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 relative"
          aria-label="Toggle menu"
        >
          <span 
            :class="['block w-6 h-0.5 bg-gray-800 transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-2' : '']"
          ></span>
          <span 
            :class="['block w-6 h-0.5 bg-gray-800 transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"
          ></span>
          <span 
            :class="['block w-6 h-0.5 bg-gray-800 transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"
          ></span>
        </button>
      </div>
    </header>

    <!-- Full Screen Mobile Menu -->
    <div 
      :class="['fixed inset-0 bg-white z-40 flex items-center justify-center transition-all duration-300 lg:hidden overflow-y-auto', isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible']"
    >
      <nav class="flex flex-col gap-8 items-center text-center py-20">
        <RouterLink 
          to="/" 
          class="text-3xl font-semibold text-gray-800 hover:text-gray-600 transition-colors"
          @click="closeMenu"
        >
          Startseite
        </RouterLink>
        <RouterLink 
          to="/ueber" 
          class="text-3xl font-semibold text-gray-800 hover:text-gray-600 transition-colors"
          @click="closeMenu"
        >
          Über
        </RouterLink>
        <RouterLink 
          to="/kurse" 
          class="text-3xl font-semibold text-gray-800 hover:text-gray-600 transition-colors"
          @click="closeMenu"
        >
          Kurse & Trainings
        </RouterLink>
        <RouterLink 
          to="/kontakt" 
          class="text-3xl font-semibold text-gray-800 hover:text-gray-600 transition-colors"
          @click="closeMenu"
        >
          Kontakt
        </RouterLink>
      </nav>
    </div>

    <!-- Main Content -->
    <main class="main-content pt-[80px] md:pt-[100px]">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-100 py-12 mt-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-wrap gap-8 mb-8">
          <div class="flex-1 min-w-[250px]">
            <h3 class="text-xl font-bold mb-2 text-white">Maximilian Höslinger</h3>
            <p class="text-gray-300 leading-relaxed">Wirkungsvoll kommunizieren.</p>
          </div>
          
          <div class="flex-1 min-w-[250px]">
            <h4 class="text-base font-bold mb-4 text-white">Navigation</h4>
            <ul class="list-none p-0 m-0 space-y-2">
              <li><RouterLink to="/" class="footer-link">Startseite</RouterLink></li>
              <li><RouterLink to="/ueber" class="footer-link">Über</RouterLink></li>
              <li><RouterLink to="/kurse" class="footer-link">Kurse & Trainings</RouterLink></li>
              <li><RouterLink to="/kontakt" class="footer-link">Kontakt</RouterLink></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-700 pt-6 text-center">
          <p class="text-gray-400 text-sm m-0">&copy; 2025 Maximilian Höslinger. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  width: 100%;
}

/* Navigation Links */
.nav-link {
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: #1f2937;
}

.nav-link.router-link-active {
  color: #1f2937;
  border-bottom: 2px solid #1f2937;
}

/* Footer Links */
.footer-link {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #ffffff;
}
</style>
