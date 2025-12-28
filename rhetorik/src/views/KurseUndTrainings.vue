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
    <!-- Hero Section -->
    <section class="pb-8 md:pb-12">
      <div class="mx-auto px-0 md:px-12 lg:px-24">
        <div class="bg-primary-600 flex flex-col md:grid md:grid-cols-12 items-stretch overflow-hidden">
          <!-- Image Left (7/12) -->
          <div class="md:col-span-7">
            <img src="@/assets/images/kursangebote.jpg" alt="Kursangebote"
              class="w-full h-full object-cover min-h-[400px] md:min-h-[600px]" />
          </div>

          <!-- Text Right (5/12) -->
          <div class="md:col-span-5 flex flex-col p-8 md:p-12 lg:p-16">
            <p class="text-md font-serif text-white uppercase tracking-wide mb-4 opacity-90">
              MEIN KURSANGEBOT
            </p>
            <div class="flex-grow"></div>
            <div>
              <h1 class="text-3xl md:text-4xl text-white font-semi-bold mb-6">
                Professionelle Rhetorikseminare für starke Redner&shy;persönlich&shy;keiten
              </h1>
              <p class="text-lg text-white leading-relaxed opacity-90">
                Ob im Beruf oder im privaten Umfeld: Überzeugende Kommunikation ist essentiell.
                Meine Rhetorikseminare vermitteln die Grundlagen mit unterschiedlichem Fokus und Tiefgang.
                Von Allgemeinen Trainings über Schwerpunkt-Module bis hin zu individuellem Coaching –
                hier finden Sie das passende Format für Ihre Ziele.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Courses Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-primary-600 mb-8">
          Trainingsangebot
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Ich biete Ihnen konkrete Kurse mit definierten Inhalten an. Jeder Kurs kann angepasst, erweitert oder gekürzt
          werden – ganz nach Ihren (zeitlichen) Vorstellungen. Gemeinsam entwickeln wir auf Wunsch ein für Sie
          angepasstes Seminar, das genau zu Ihren Zielen passt und auf Ihre Trainingsschwerpunkte eingeht. Sprechen Sie
          mich dazu gerne an.
        </p>
        <div class="grid md:grid-cols-3 gap-8">

          <!-- Karte 1: Allgemeines Rhetorik Training -->
          <RouterLink to="/kurse/allgemeines-rhetorik-training" class="cursor-pointer group flex flex-col">
            <div class="h-64 md:h-80 overflow-hidden">
              <img src="@/assets/images/allgtraining.jpg" alt="Allgemeines Rhetorik Training"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="bg-gray-50 p-6 flex flex-col flex-grow">
              <h3 class="text-2xl font-semibold text-primary-600 mb-3 group-hover:text-primary-500 transition-colors">
                Allgemeines Rhetorik Training
              </h3>
              <p class="text-gray-700 mb-4 flex-grow">
                Umfassendes Programm in zwei Modulen für Anfänger und Fortgeschrittene.
              </p>
              <div class="flex items-center gap-2">
                <span class="text-primary-600 font-semibold group-hover:text-primary-500 transition-colors">
                  Mehr erfahren
                </span>
                <span class="text-primary-600 transition-transform group-hover:translate-x-1">⟶</span>
              </div>
            </div>
          </RouterLink>

          <!-- Karte 2: Schwerpunkt Training -->
          <RouterLink to="/kurse/schwerpunkt-training" class="cursor-pointer group flex flex-col">
            <div class="h-64 md:h-80 overflow-hidden">
              <img src="@/assets/images/scherpunkt.png" alt="Schwerpunkt Training"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="bg-gray-50 p-6 flex flex-col flex-grow">
              <h3 class="text-2xl font-semibold text-primary-600 mb-3 group-hover:text-primary-500 transition-colors">
                Schwerpunkt Training
              </h3>
              <p class="text-gray-700 mb-4 flex-grow">
                Fokussierte Trainings zu 6 spezifischen Themen wie Körpersprache, Stimme und Argumentation.
              </p>
              <div class="flex items-center gap-2">
                <span class="text-primary-600 font-semibold group-hover:text-primary-500 transition-colors">
                  Mehr erfahren
                </span>
                <span class="text-primary-600 transition-transform group-hover:translate-x-1">⟶</span>
              </div>
            </div>
          </RouterLink>

          <!-- Karte 3: Individual Training -->
          <RouterLink to="/kurse/individual-training" class="cursor-pointer group flex flex-col">
            <div class="h-64 md:h-80 overflow-hidden">
              <img src="@/assets/images/individual.jpg" alt="Individual Training"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="bg-gray-50 p-6 flex flex-col flex-grow">
              <h3 class="text-2xl font-semibold text-primary-600 mb-3 group-hover:text-primary-500 transition-colors">
                Individual Training
              </h3>
              <p class="text-gray-700 mb-4 flex-grow">
                Maßgeschneidertes 1:1 Coaching für Ihre spezifischen Bedürfnisse und Ziele.
              </p>
              <div class="flex items-center gap-2">
                <span class="text-primary-600 font-semibold group-hover:text-primary-500 transition-colors">
                  Mehr erfahren
                </span>
                <span class="text-primary-600 transition-transform group-hover:translate-x-1">⟶</span>
              </div>
            </div>
          </RouterLink>

        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="py-20 bg-primary-600">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-semibold text-white mb-8">
          Allgemeine Informationen
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Gruppengröße
            </h3>
            <p class="text-white opacity-90">
              Für optimale Lernerfolge arbeite ich mit kleinen Gruppen von maximal 8 Teilnehmern.
              So kann ich auf jeden individuell eingehen.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Dauer
            </h3>
            <p class="text-white opacity-90">
              Die Trainings erstrecken sich je nach Format über ein bis drei Tage.
              Einzeltrainings werden individuell vereinbart.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Methodik
            </h3>
            <p class="text-white opacity-90">
              Praxisnahe Übungen, individuelles Feedback und Videoanalyse sind fester Bestandteil
              aller Trainings. Theorie wird nur vermittelt, wo sie direkt umsetzbar ist.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Termine
            </h3>
            <p class="text-white opacity-90">
              Die konkreten Termine stimmen wir gemeinsam ab. Sowohl Wochenend- als auch
              Wochentermine sind möglich.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CtaSection />
  </div>
</template>

<style scoped></style>
