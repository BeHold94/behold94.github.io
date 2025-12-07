<script setup lang="ts">
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
              <h1 class="text-4xl text-[#153E75] font-bold mb-6">
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

    <!-- Experience Sections -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-16">
          <!-- Card 1: Überzeugungskraft und Präzision -->
          <div class="bg-white p-8 shadow-sm">
            <h3 class="text-2xl font-bold text-[#153E75] mb-4">
              Überzeugungskraft und Präzision
            </h3>
            <p class="text-gray-700 leading-relaxed">
              Als Rechtsanwalt arbeite ich täglich mit Sprache. Vor Gericht oder in Verhandlungen 
              ist es meine Aufgabe, präzise zu formulieren, Argumente klar und strukturiert vorzubringen 
              und auf jedes Detail zu achten, sowohl als überzeugender Redner wie auch als achtsamer 
              Beobachter.
            </p>
          </div>

          <!-- Card 2: Präsenz und Klarheit -->
          <div class="bg-white p-8 shadow-sm">
            <h3 class="text-2xl font-bold text-[#153E75] mb-4">
              Präsenz und Klarheit
            </h3>
            <p class="text-gray-700 leading-relaxed">
              Teamführung und Ausbildung sind Kernaufgaben eines Marineoffiziers. In dieser Rolle 
              sind klare Ansprache, souveräne Präsenz und die Orientierungsfähigkeit unverzichtbar. 
              Ich helfe Ihnen, Sicherheit im Auftritt in Redesituationen zu erreichen, um die 
              beabsichtigte Wirkung zu erzielen.
            </p>
          </div>

          <!-- Card 3: Verständlichkeit und Struktur -->
          <div class="bg-white p-8 shadow-sm">
            <h3 class="text-2xl font-bold text-[#153E75] mb-4">
              Verständlichkeit und Struktur
            </h3>
            <p class="text-gray-700 leading-relaxed">
              Wer komplexe Themen verständlich vermitteln will, muss Inhalte strukturiert aufbauen 
              und so erklären, dass sie nachhaltig im Gedächtnis bleiben. Diese didaktische Klarheit 
              setze ich in meinen Seminaren ein, um Lernprozesse wirksam zu gestalten.
            </p>
          </div>

          <!-- Card 4: Zuhören und Beobachten -->
          <div class="bg-white p-8 shadow-sm">
            <h3 class="text-2xl font-bold text-[#153E75] mb-4">
              Zuhören und Beobachten
            </h3>
            <p class="text-gray-700 leading-relaxed italic mb-4">
              „Zuhören und Beobachten sind die Voraussetzungen für die Entwicklung der 
              Rednerpersönlichkeit."
            </p>
            <p class="text-gray-700 leading-relaxed">
              Ich achte auf Körpersprache, den Einsatz der Stimme sowie bewusste und unbewusste 
              Reaktionen, um ein vollständiges Bild einer Redesituation zu erfassen. In meinen 
              Trainings nutze ich diese Wahrnehmungen, um durch präzises und persönliches Feedback 
              die Wirkung meiner Teilnehmer auf ihr Publikum unmittelbar zu verändern.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-[#153E75]">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Starten Sie jetzt.
        </h2>
        <p class="text-xl text-white mb-8">
          Melden Sie sich noch heute an. Gemeinsam bringen wir Ihre rhetorischen Fähigkeiten 
          auf ein neues Level.
        </p>
        <RouterLink to="/kontakt"
          class="inline-block bg-white text-[#153E75] px-8 py-4 font-semibold hover:bg-gray-100 transition-colors">
          JETZT ANMELDEN
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
