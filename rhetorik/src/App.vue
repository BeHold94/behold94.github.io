<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
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
      :class="['bg-white border-b border-gray-300 flex items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'py-3' : 'py-6']"
    >
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
        <!-- Logo Left -->
        <div>
          <RouterLink to="/" class="no-underline" @click="closeMenu">
            <div>
              <h2 
                :class="['m-0 font-bold leading-tight text-[#153E75] transition-all duration-300', isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl']"
              >
                Maximilian Höslinger
              </h2>
              <p 
                :class="['m-0 text-orange-500 font-normal transition-all duration-300', isScrolled ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm']"
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
          <RouterLink to="/kontakt" class="bg-orange-500 text-white px-6 py-2 font-semibold hover:bg-orange-600 transition-colors no-underline">
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
      :class="['fixed inset-0 bg-white z-40 flex items-center justify-center transition-all duration-300 lg:hidden', isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible']"
    >
      <nav class="flex flex-col gap-8 items-center text-center">
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
