<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { ref } from 'vue'
import CtaSection from '../components/CtaSection.vue'

useHead({
  title: 'Über mich | Maximilian Höslinger - Rhetoriktrainer',
  meta: [
    {
      name: 'description',
      content: 'Erfahren Sie mehr über Maximilian Höslinger - Rechtsanwalt, Marineoffizier und Rhetoriktrainer mit langjähriger Erfahrung.',
    },
  ],
})

const openItem = ref<number | null>(null)

const toggleItem = (index: number) => {
  openItem.value = openItem.value === index ? null : index
}
</script>

<template>
  <div class="ueber">
    <!-- Trainer Introduction Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-10">
          <!-- Image Left -->
          <div class="w-full md:w-5/12">
            <img src="@/assets/images/startbild.jpg" alt="Maximilian Höslinger"
              class="w-full h-auto object-cover" />
          </div>

          <!-- Text Right -->
          <div class="w-full md:w-7/12 flex flex-col">
            <div class="flex-grow"></div>
            <p class="text-md font-serif text-gray-500 uppercase tracking-wide mb-4">
              IHR TRAINER STELLT SICH VOR
            </p>
            
            <div>
              <h1 class="text-4xl text-primary-600 font-semi-bold mb-6">
                Maximilian Höslinger
              </h1>
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                Mein Name ist Maximilian Höslinger. Ich bin praktizierender Rechtsanwalt, 
                ausgebildeter Marineoffizier und ständiger Ausbilder bei der Deutschen Marine, 
                regelmäßiger Lehrbeauftragter an einer Hochschule, ausgebildeter Sänger, 
                ehrenamtlicher Vereinsvorstand – und Rhetoriktrainer.
              </p>
              <p class="text-lg text-gray-700 leading-relaxed">
                Seit vielen Jahren bewege ich mich täglich in unterschiedlichsten Redesituationen. 
                Meine Erfahrungen möchte ich mit Ihnen in meinen Trainings teilen – praxisnah, 
                fundiert und auf Augenhöhe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Summary & Details -->
    <section class="py-20 bg-primary-600">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-12">
          <!-- Left: Text and Accordion -->
          <div class="w-full md:w-7/12">
            <!-- Summary Text -->
            <div class="mb-12">
              <p class="text-xl md:text-2xl text-white leading-relaxed mb-6">
                Als Rechtsanwalt, Marineoffizier, Hochschuldozent und Rhetoriktrainer bringe ich 
                Erfahrungen aus unterschiedlichsten Bereichen zusammen: Präzise Argumentation vor Gericht, 
                souveräne Führung in der Marine, didaktische Klarheit in der Lehre und achtsames 
                Beobachten in Redesituationen.
              </p>
              <p class="text-lg text-white opacity-90">
                Diese vielfältigen Perspektiven fließen in meine Trainings ein und helfen Ihnen, 
                Ihre persönliche Rednerpersönlichkeit zu entwickeln.
              </p>
            </div>

            <!-- Accordion -->
            <div class="space-y-4">
              <!-- Werdegang -->
              <div class="border-1 border-white">
                <button
                  @click="toggleItem(0)"
                  class="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <h3 class="text-2xl font-bold text-white">
                    Mein Werdegang
                  </h3>
                  <span class="text-white text-3xl transition-transform" :class="{ 'rotate-180': openItem === 0 }">
                    ⌄
                  </span>
                </button>
                <div
                  v-show="openItem === 0"
                  class="px-8 pb-6 pt-2"
                >
                  <div class="text-white leading-relaxed opacity-90 space-y-4">
                    <p>
                      <strong>Rechtsanwalt:</strong> In meiner täglichen Arbeit vor Gericht und in Verhandlungen 
                      ist präzise Formulierung und strukturierte Argumentation unverzichtbar. Diese Fähigkeiten 
                      bilden das Fundament für überzeugende Kommunikation.
                    </p>
                    <p>
                      <strong>Marineoffizier:</strong> Als ausgebildeter Offizier und ständiger Ausbilder bei der 
                      Deutschen Marine habe ich gelernt, mit klarer Ansprache zu führen, Präsenz im Raum zu zeigen 
                      und in herausfordernden Situationen Orientierung zu geben.
                    </p>
                    <p>
                      <strong>Hochschuldozent:</strong> Als regelmäßiger Lehrbeauftragter vermittle ich komplexe 
                      Inhalte verständlich und strukturiert. Diese didaktische Erfahrung nutze ich, um Lernprozesse 
                      in meinen Seminaren wirksam zu gestalten.
                    </p>
                    <p>
                      <strong>Sänger:</strong> Durch meine Ausbildung als Sänger habe ich ein tiefes Verständnis 
                      für Stimme, Atmung und deren bewussten Einsatz entwickelt – essenzielle Werkzeuge für jeden Redner.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Engagement -->
              <div class="border-1 border-white">
                <button
                  @click="toggleItem(1)"
                  class="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <h3 class="text-2xl font-bold text-white">
                    Mein Engagement
                  </h3>
                  <span class="text-white text-3xl transition-transform" :class="{ 'rotate-180': openItem === 1 }">
                    ⌄
                  </span>
                </button>
                <div
                  v-show="openItem === 1"
                  class="px-8 pb-6 pt-2"
                >
                  <div class="text-white leading-relaxed opacity-90 space-y-4">
                    <p>
                      Seit vielen Jahren bin ich ehrenamtlich als Vereinsvorstand tätig. In dieser Rolle 
                      habe ich gelernt, unterschiedliche Perspektiven zusammenzubringen, Konsens zu finden 
                      und Menschen für gemeinsame Ziele zu begeistern.
                    </p>
                    <p>
                      <strong>Meine Philosophie:</strong> Zuhören und Beobachten sind die Voraussetzungen für 
                      die Entwicklung der Rednerpersönlichkeit. Ich achte auf Körpersprache, den Einsatz der 
                      Stimme sowie bewusste und unbewusste Reaktionen, um ein vollständiges Bild zu erfassen.
                    </p>
                    <p>
                      In meinen Trainings nutze ich diese Wahrnehmungen für präzises, persönliches Feedback, 
                      das die Wirkung meiner Teilnehmer auf ihr Publikum unmittelbar verbessert.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Image Placeholder -->
          <div class="w-full md:w-5/12 md:self-start">
            <div class="bg-white/10 w-full h-[400px] md:h-[600px] flex items-center justify-center border-2 border-white/30 md:sticky md:top-8">
              <span class="text-white text-lg opacity-50">Bildplatzhalter</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CtaSection />

  </div>
</template>

<style scoped>
</style>
