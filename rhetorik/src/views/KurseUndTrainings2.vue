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
    <section class="py-16 md:py-24">
      <div class="max-w-7xl bg-primary-600  mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-8 md:gap-16">
          <!-- Left: Label -->
          <div class="md:w-1/4">
            <p class="text-md font-serif text-white uppercase tracking-wide opacity-90">
              MEIN KURSANGEBOT
            </p>
          </div>
          <!-- Right: Main Content -->
          <div class="md:w-3/4">
            <h1 class="text-4xl md:text-5xl font-semi-bold text-white mb-6">
              Professionelle <span class="text-secondary-500">Rhetorikseminare</span> für starke Rednerpersönlichkeiten
            </h1>
            <p class="text-xl text-white opacity-90">
              Rhetorik Training, Schwerpunkt Training oder individuelles Coaching – finden Sie Ihr passendes Format
            </p>
          </div>
        </div>
      </div>
    </section>

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
              
              <!-- Modul 1: Rhetorik Grundlagen -->
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
                Rhetorik Grundlagen
              </h3>
              <p class="text-lg text-gray-700 leading-relaxed mb-4">
                Das Fundament für überzeugende Kommunikation. In diesem Basistraining lernen Sie alle 
                wichtigen rhetorischen Grundlagen kennen und entwickeln ein Gefühl für Ihre Wirkung 
                als Redner.
              </p>
              <div class="mb-6">
                <h3 class="font-semibold text-gray-900 mb-2">Inhalte:</h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                  <li>Aufbau und Struktur von Reden</li>
                  <li>Körpersprache und Präsenz</li>
                  <li>Stimmliche Grundlagen</li>
                  <li>Umgang mit Lampenfieber</li>
                  <li>Interaktion mit dem Publikum</li>
                </ul>
              </div>
              <RouterLink to="/kontakt"
                class="inline-block bg-primary-600 text-white px-8 py-3 font-semibold hover:bg-primary-500 transition-colors">
                ANFRAGEN
              </RouterLink>
            </div>
          </div>

          <div class="border-t-2 border-gray-200"></div>

          <!-- Modul 2: Rhetorik Fortgeschritten -->
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
                Rhetorik Fortgeschritten
              </h3>
              <p class="text-lg text-gray-700 leading-relaxed mb-4">
                Verfeinern Sie Ihre rhetorischen Fähigkeiten auf Meisterniveau. Dieses Training 
                richtet sich an erfahrene Redner, die ihre Wirkung weiter optimieren möchten.
              </p>
              <div class="mb-6">
                <h3 class="font-semibold text-gray-900 mb-2">Inhalte:</h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                  <li>Fortgeschrittene rhetorische Techniken</li>
                  <li>Situative Anpassung und Flexibilität</li>
                  <li>Umgang mit schwierigen Redesituationen</li>
                  <li>Debattentechniken und Schlagfertigkeit</li>
                  <li>Feinschliff der persönlichen Rednerpersönlichkeit</li>
                </ul>
              </div>
              <RouterLink to="/kontakt"
                class="inline-block bg-primary-600 text-white px-8 py-3 font-semibold hover:bg-primary-500 transition-colors">
                ANFRAGEN
              </RouterLink>
            </div>
          </div>

          <!-- ============================================
               KATEGORIE 2: SCHWERPUNKT TRAINING
               ============================================ -->
          <div class="mt-24">
            <div class="mb-12">
              <h2 class="text-4xl font-bold text-primary-600 mb-4">
                Schwerpunkt Training
              </h2>
              <p class="text-xl text-gray-700 max-w-3xl">
                Fokussierte Trainings zu spezifischen Themen. Wählen Sie aus 6 Schwerpunkten 
                und vertiefen Sie gezielt Ihre Fähigkeiten in einem bestimmten Bereich.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              
              <!-- Schwerpunkt 1: Körpersprache & Präsenz -->
              <div class="border-2 border-gray-200 p-8 hover:border-primary-600 transition-colors">
                <div class="flex items-center gap-3 mb-4">
                  <span class="inline-block bg-secondary-500 text-white px-4 py-1 text-sm font-semibold">
                    SCHWERPUNKT
                  </span>
                </div>
                <h3 class="text-2xl font-semibold text-primary-600 mb-3">
                  Körpersprache & Präsenz
                </h3>
                <p class="text-gray-700 mb-4">
                  Ihre Körpersprache spricht oft lauter als Worte. Lernen Sie, bewusst mit Ihrer 
                  Körpersprache umzugehen und eine starke Präsenz im Raum zu entwickeln.
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm mb-6">
                  <li>Bewusste Körperhaltung und Gestik</li>
                  <li>Raumnutzung und Positionierung</li>
                  <li>Blickkontakt und Mimik</li>
                  <li>Authentische Präsenz entwickeln</li>
                </ul>
                <RouterLink to="/kontakt"
                  class="inline-block bg-primary-600 text-white px-6 py-2 text-sm font-semibold hover:bg-primary-500 transition-colors">
                  ANFRAGEN
                </RouterLink>
              </div>

              <!-- Schwerpunkt 2: Stimme & Atmung -->
              <div class="border-2 border-gray-200 p-8 hover:border-primary-600 transition-colors">
                <div class="flex items-center gap-3 mb-4">
                  <span class="inline-block bg-secondary-500 text-white px-4 py-1 text-sm font-semibold">
                    SCHWERPUNKT
                  </span>
                </div>
                <h3 class="text-2xl font-semibold text-primary-600 mb-3">
                  Stimme & Atmung
                </h3>
                <p class="text-gray-700 mb-4">
                  Ihre Stimme ist Ihr wichtigstes Werkzeug. Entdecken Sie das volle Potenzial 
                  Ihrer Stimme und lernen Sie, sie bewusst und wirkungsvoll einzusetzen.
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm mb-6">
                  <li>Atemtechnik für kraftvolles Sprechen</li>
                  <li>Stimmmodulation und Varianz</li>
                  <li>Artikulation und Deutlichkeit</li>
                  <li>Tempo und Pausen gezielt einsetzen</li>
                </ul>
                <RouterLink to="/kontakt"
                  class="inline-block bg-primary-600 text-white px-6 py-2 text-sm font-semibold hover:bg-primary-500 transition-colors">
                  ANFRAGEN
                </RouterLink>
              </div>

              <!-- Schwerpunkt 3: Inhalt & Struktur -->
              <div class="border-2 border-gray-200 p-8 hover:border-primary-600 transition-colors">
                <div class="flex items-center gap-3 mb-4">
                  <span class="inline-block bg-secondary-500 text-white px-4 py-1 text-sm font-semibold">
                    SCHWERPUNKT
                  </span>
                </div>
                <h3 class="text-2xl font-semibold text-primary-600 mb-3">
                  Inhalt & Struktur
                </h3>
                <p class="text-gray-700 mb-4">
                  Der richtige Aufbau und die präzise Formulierung machen den Unterschied. 
                  Lernen Sie, Ihre Argumente klar zu strukturieren und überzeugend zu präsentieren.
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm mb-6">
                  <li>Aufbau überzeugender Argumente</li>
                  <li>Strukturierungstechniken für Reden</li>
                  <li>Rhetorische Stilmittel gezielt einsetzen</li>
                  <li>Kernbotschaften formulieren</li>
                </ul>
                <RouterLink to="/kontakt"
                  class="inline-block bg-primary-600 text-white px-6 py-2 text-sm font-semibold hover:bg-primary-500 transition-colors">
                  ANFRAGEN
                </RouterLink>
              </div>

              <!-- Schwerpunkt 4: Argumentation & Überzeugung -->
              <div class="border-2 border-gray-200 p-8 hover:border-primary-600 transition-colors">
                <div class="flex items-center gap-3 mb-4">
                  <span class="inline-block bg-secondary-500 text-white px-4 py-1 text-sm font-semibold">
                    SCHWERPUNKT
                  </span>
                </div>
                <h3 class="text-2xl font-semibold text-primary-600 mb-3">
                  Argumentation & Überzeugung
                </h3>
                <p class="text-gray-700 mb-4">
                  Überzeugen Sie mit logischen und emotional ansprechenden Argumenten. 
                  Lernen Sie, wie Sie Ihr Publikum nachhaltig beeinflussen.
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm mb-6">
                  <li>Logische Argumentationsstrukturen</li>
                  <li>Emotionale Überzeugungskraft</li>
                  <li>Einwände entkräften</li>
                  <li>Gegenargumente vorwegnehmen</li>
                </ul>
                <RouterLink to="/kontakt"
                  class="inline-block bg-primary-600 text-white px-6 py-2 text-sm font-semibold hover:bg-primary-500 transition-colors">
                  ANFRAGEN
                </RouterLink>
              </div>

              <!-- Schwerpunkt 5: Schlagfertigkeit & Diskussion -->
              <div class="border-2 border-gray-200 p-8 hover:border-primary-600 transition-colors">
                <div class="flex items-center gap-3 mb-4">
                  <span class="inline-block bg-secondary-500 text-white px-4 py-1 text-sm font-semibold">
                    SCHWERPUNKT
                  </span>
                </div>
                <h3 class="text-2xl font-semibold text-primary-600 mb-3">
                  Schlagfertigkeit & Diskussion
                </h3>
                <p class="text-gray-700 mb-4">
                  Bleiben Sie souverän in Diskussionen und Debatten. Lernen Sie, spontan 
                  und geistreich zu reagieren und Ihre Position zu verteidigen.
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm mb-6">
                  <li>Spontane Reaktionsfähigkeit</li>
                  <li>Techniken der Schlagfertigkeit</li>
                  <li>Diskussionsführung und Moderation</li>
                  <li>Kritik souverän begegnen</li>
                </ul>
                <RouterLink to="/kontakt"
                  class="inline-block bg-primary-600 text-white px-6 py-2 text-sm font-semibold hover:bg-primary-500 transition-colors">
                  ANFRAGEN
                </RouterLink>
              </div>

              <!-- Schwerpunkt 6: Präsentationstechnik -->
              <div class="border-2 border-gray-200 p-8 hover:border-primary-600 transition-colors">
                <div class="flex items-center gap-3 mb-4">
                  <span class="inline-block bg-secondary-500 text-white px-4 py-1 text-sm font-semibold">
                    SCHWERPUNKT
                  </span>
                </div>
                <h3 class="text-2xl font-semibold text-primary-600 mb-3">
                  Präsentationstechnik
                </h3>
                <p class="text-gray-700 mb-4">
                  Meistern Sie die Kunst der professionellen Präsentation. Von der Vorbereitung 
                  bis zur Durchführung – alle wichtigen Techniken für erfolgreiche Vorträge.
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm mb-6">
                  <li>Effektive Präsentationsvorbereitung</li>
                  <li>Visualisierung und Medieneinsatz</li>
                  <li>Umgang mit Präsentationsangst</li>
                  <li>Q&A-Sessions souverän meistern</li>
                </ul>
                <RouterLink to="/kontakt"
                  class="inline-block bg-primary-600 text-white px-6 py-2 text-sm font-semibold hover:bg-primary-500 transition-colors">
                  ANFRAGEN
                </RouterLink>
              </div>

            </div>
          </div>

          <!-- ============================================
               KATEGORIE 3: INDIVIDUAL TRAINING
               ============================================ -->
          <div class="mt-24">
            <div class="mb-12">
              <h2 class="text-4xl font-bold text-primary-600 mb-4">
                Individual Training
              </h2>
              <p class="text-xl text-gray-700 max-w-3xl">
                Maßgeschneidertes Training für Ihre spezifischen Bedürfnisse. 
                Ob Vorbereitung auf eine konkrete Redesituation oder langfristige Begleitung.
              </p>
            </div>

          <!-- Individuelles Einzeltraining -->
          <div class="flex flex-col md:flex-row gap-12">
            <div class="w-full md:w-1/3">
              <div class="bg-gray-100 h-64 flex items-center justify-center">
                <span class="text-gray-400 text-lg">Kursbild</span>
              </div>
            </div>
            <div class="w-full md:w-2/3">
              <div class="flex items-center gap-3 mb-4">
                <span class="inline-block bg-secondary-500 text-white px-4 py-1 text-sm font-semibold">
                  1:1 COACHING
                </span>
              </div>
              <h3 class="text-3xl font-semibold text-primary-600 mb-4">
                Individuelles Einzeltraining
              </h3>
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                In persönlichen Einzelsitzungen gehe ich gezielt auf Ihre individuellen Ziele, 
                Herausforderungen und Wünsche ein. Das Training wird komplett auf Ihre Bedürfnisse 
                zugeschnitten und kann flexibel gestaltet werden.
              </p>
              <div class="mb-6">
                <h4 class="font-semibold text-gray-900 mb-2">Mögliche Themen:</h4>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                  <li>Vorbereitung auf wichtige Präsentationen oder Reden</li>
                  <li>Bewerbungsgespräche und Vorstellungsgespräche</li>
                  <li>Hochzeitsreden und private Anlässe</li>
                  <li>Medientraining und Interviews</li>
                  <li>Führungskommunikation</li>
                  <li>Alle anderen rhetorikbezogenen Themen</li>
                </ul>
              </div>
              <div class="bg-gray-50 p-6 mb-6">
                <h4 class="font-semibold text-gray-900 mb-2">Vorteile des Individual Trainings:</h4>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <span class="text-secondary-500 mt-1">✓</span>
                    <span>100% auf Ihre Bedürfnisse zugeschnitten</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-secondary-500 mt-1">✓</span>
                    <span>Flexible Terminvereinbarung</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-secondary-500 mt-1">✓</span>
                    <span>Intensive persönliche Betreuung</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-secondary-500 mt-1">✓</span>
                    <span>Schnelle und gezielte Fortschritte</span>
                  </li>
                </ul>
              </div>
              <RouterLink to="/kontakt"
                class="inline-block bg-primary-600 text-white px-8 py-3 font-semibold hover:bg-primary-500 transition-colors">
                ANFRAGEN
              </RouterLink>
            </div>
          </div>
          </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-semibold text-primary-600 mb-8">
          Allgemeine Informationen
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Gruppengröße
            </h3>
            <p class="text-gray-700">
              Für optimale Lernerfolge arbeite ich mit kleinen Gruppen von maximal 8 Teilnehmern. 
              So kann ich auf jeden individuell eingehen.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Dauer
            </h3>
            <p class="text-gray-700">
              Die Trainings erstrecken sich je nach Format über ein bis drei Tage. 
              Einzeltrainings werden individuell vereinbart.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Methodik
            </h3>
            <p class="text-gray-700">
              Praxisnahe Übungen, individuelles Feedback und Videoanalyse sind fester Bestandteil 
              aller Trainings. Theorie wird nur vermittelt, wo sie direkt umsetzbar ist.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Termine
            </h3>
            <p class="text-gray-700">
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

<style scoped>
</style>
