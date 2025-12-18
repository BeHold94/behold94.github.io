<script setup lang="ts">
import { useHead } from '@unhead/vue'
import CtaSection from '../components/CtaSection.vue'

useHead({
  title: 'Kurse & Trainings | Rhetoriktraining Maximilian Höslinger',
  meta: [
    {
      name: 'description',
      content: 'Professionelle Rhetorikseminare: Grundlagentraining, Körpersprache & Präsenz, Stimme & Atmung, Inhalt & Struktur und mehr.',
    },
  ],
})
</script>

<template>
  <div class="kurse-und-trainings">
    
    <!-- Courses Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="space-y-20">
          
          <!-- ============================================
               KATEGORIE 1: RHETORIK TRAINING
               ============================================ -->
          <div>
            <div class="mb-12">
              <h2 class="text-4xl font-bold text-primary-600 mb-4">
                Allgemeines Rhetorik Training
              </h2>
              <p class="text-xl text-gray-700 max-w-3xl">
                Das umfassende Programm in zwei aufeinander aufbauenden Modulen. Hier lernen Sie alle Grundlagen 
                der Rhetorik und können Ihre Fähigkeiten im Fortgeschrittenen-Modul weiter vertiefen.
              </p>
            </div>

            <div class="space-y-16">
              
              <!-- Modul 1: Grundlagentraining Rhetorik -->
              <div class="flex flex-col md:flex-row gap-12">
                <div class="w-full md:w-1/3">
                  <div class="bg-gray-100 h-64 flex items-center justify-center">
                    <span class="text-gray-400 text-lg">Kursbild</span>
                  </div>
                </div>
                <div class="w-full md:w-2/3">
                  <div class="flex items-center gap-3 mb-4">
                    <span class="inline-block bg-primary-600 text-white px-4 py-1 text-sm font-semibold">
                      MODUL 1
                    </span>
                    <span class="inline-block bg-gray-200 text-gray-700 px-4 py-1 text-sm font-semibold">
                      ANFÄNGER
                    </span>
                  </div>
                  <h3 class="text-3xl font-semibold text-primary-600 mb-4">
                    Grundlagentraining Rhetorik
                  </h3>
                  <p class="text-lg text-gray-700 leading-relaxed mb-4">
                    Basistraining für klare und überzeugende Kommunikation mit grundlegender Arbeit an Auftritt, Stimme und Struktur
                  </p>
                  
                  <div class="bg-gray-50 p-6 mb-6">
                    <h4 class="text-xl font-semibold text-gray-900 mb-3">
                      Ohne Grundlagen ist alles nichts
                    </h4>
                    <p class="text-gray-700 mb-4">
                      Der Basiskurs ist geeignet für alle, die eine Auffrischung für ihre rhetorischen 
                      Fähigkeiten suchen oder sich zum ersten Mal vertieft mit Rhetorik auseinandersetzen wollen. 
                      Neben wichtigen theoretischen Einheiten werden vor allem praktische Übungen durchgeführt. 
                      Wir arbeiten an Sprache, Ausdruck und Verständlichkeit. Sie lernen, Reden und Beiträge 
                      sicher aufzubauen, zu strukturieren und zu präsentieren. Das Training vermittelt Ihnen 
                      die Grundlagen, die in jeder Redesituation tragen.
                    </p>
                  </div>

                 

                  <div class="mb-6">
                    <h4 class="font-semibold text-gray-900 mb-3">Inhalte & Module:</h4>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                      <li>Grundlagen der Kommunikation</li>
                      <li>Nonverbale & paraverbale Kommunikation</li>
                      <li>Aufbau: Redeziel & Kernbotschaft</li>
                      <li>Wirkung: Verständlichkeit, Stilmittel & Auftritt</li>
                      <li>Video- und Live-Coaching</li>
                    </ul>
                  </div>

                  <div class="bg-blue-50 border-l-4 border-primary-600 p-4 mb-6">
                    <h4 class="font-semibold text-gray-900 mb-2">Organisatorisches:</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• Präsenztraining in Ihren Räumlichkeiten oder externen Seminarräumen</li>
                      <li>• Gruppentraining, ca. 5-15 Teilnehmer pro Training</li>
                      <li>• Umfang 2,5 Tage (z.B. Donnerstag 19:00 Uhr – Sonntag 13:00 Uhr) oder nach Vereinbarung</li>
                      <li>• Termine nach Verfügbarkeit oder Vereinbarung</li>
                    </ul>
                  </div>

                  <RouterLink to="/kontakt"
                    class="inline-block bg-primary-600 text-white px-8 py-3 font-semibold hover:bg-primary-500 transition-colors">
                    JETZT ANMELDEN
                  </RouterLink>
                </div>
              </div>

              <div class="border-t-2 border-gray-200"></div>

              <!-- Modul 2: Rhetorik für Fortgeschrittene -->
              <div class="flex flex-col md:flex-row-reverse gap-12">
                <div class="w-full md:w-1/3">
                  <div class="bg-gray-100 h-64 flex items-center justify-center">
                    <span class="text-gray-400 text-lg">Kursbild</span>
                  </div>
                </div>
                <div class="w-full md:w-2/3">
                  <div class="flex items-center gap-3 mb-4">
                    <span class="inline-block bg-primary-600 text-white px-4 py-1 text-sm font-semibold">
                      MODUL 2
                    </span>
                    <span class="inline-block bg-gray-600 text-white px-4 py-1 text-sm font-semibold">
                      FORTGESCHRITTEN
                    </span>
                  </div>
                  <h3 class="text-3xl font-semibold text-primary-600 mb-4">
                    Rhetorik für Fortgeschrittene
                  </h3>
                  <p class="text-lg text-gray-700 leading-relaxed mb-4">
                    Aufbaukurs mit Vertiefung zur Weiterentwicklung erfahrener Rednerpersönlichkeiten
                  </p>

                  <div class="bg-gray-50 p-6 mb-6">
                    <h4 class="text-xl font-semibold text-gray-900 mb-3">
                      Übung und Feedback machen den Meister
                    </h4>
                    <p class="text-gray-700 mb-4">
                      Der Kurs richtet sich an Teilnehmer, die über grundlegende Redeerfahrung verfügen 
                      und ihre Wirkung durch Übung und Feedback gezielt weiterentwickeln möchten. 
                      Schwerpunkte sind die Verfeinerung von Präsenz, Stimme und Ausdruck durch die 
                      Arbeit an komplexeren Redesituationen und spontanen Wortmeldungen. Ergänzend 
                      vertiefen wir Techniken zur Argumentation, zur Dramaturgie einer Rede und zum 
                      bewussten Einsatz von Sprache und Körpersprache. Das Ziel ist die Verbesserung 
                      des eigenen Auftritts, um nicht nur sicher, sondern in jeder Situation die 
                      beabsichtigte Wirkung erzielen zu können.
                    </p>
                  </div>

                 

                  <div class="mb-6">
                    <h4 class="font-semibold text-gray-900 mb-3">Inhalte & Module:</h4>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                      <li>Wiederholung: Grundlagen der Kommunikation</li>
                      <li>Nonverbale & paraverbale Kommunikation</li>
                      <li>Struktur und Aufbau: Storytelling, umfassender Einsatz von Stilmitteln (Schwerpunkte: Pathos und Ethos)</li>
                      <li>Souveränität im Umgang mit unbekannten Redesituationen</li>
                      <li>Video- und Live-Coaching</li>
                    </ul>
                  </div>

                  <div class="bg-blue-50 border-l-4 border-primary-600 p-4 mb-6">
                    <h4 class="font-semibold text-gray-900 mb-2">Organisatorisches:</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• Präsenztraining in Ihren Räumlichkeiten oder externen Seminarräumen</li>
                      <li>• Gruppentraining, ca. 5-15 Teilnehmer pro Training</li>
                      <li>• Umfang 2,5 Tage (z.B. Donnerstag 19:00 Uhr – Sonntag 13:00 Uhr) oder nach Vereinbarung</li>
                      <li>• Termine nach Verfügbarkeit oder Vereinbarung</li>
                    </ul>
                  </div>

                  <RouterLink to="/kontakt"
                    class="inline-block bg-primary-600 text-white px-8 py-3 font-semibold hover:bg-primary-500 transition-colors">
                    JETZT ANMELDEN
                  </RouterLink>
                </div>
              </div>

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
