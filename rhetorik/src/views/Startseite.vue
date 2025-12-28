<script setup lang="ts">
import { useHead } from '@unhead/vue'
import CtaSection from '../components/CtaSection.vue'

useHead({
  title: 'Rhetoriktraining | Maximilian Höslinger',
  meta: [
    {
      name: 'description',
      content: 'Rhetoriktrainings für authentische Kommunikation. Souverän auftreten, Menschen erreichen, Wirkung entfalten.',
    },
  ],
})
</script>

<template>
    <div class="startseite">
        <!-- Hero Section -->
        <section class="bg-primary-600 py-10 w-full md:py-20">
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-end md:h-[700px]">
                    <!-- Text Left -->
                    <div class="flex items-end w-full py-8 md:py-0">
                        <div class="">
                            <h1 class="text-3xl md:text-5xl font-semi-bold text-white mb-4 md:mb-6 leading-tight">
                                Souverän auftreten.<br />
                                Menschen erreichen.<br />
                                Wirkung entfalten.
                            </h1>
                            <p class="text-lg md:text-xl text-white mb-6 md:mb-8">
                                Rhetoriktrainings für authentische Kommunikation.
                            </p>
                            <RouterLink to="/kontakt"
                                class="inline-block bg-white text-primary-600 px-6 md:px-8 py-3 md:py-4 font-semibold hover:bg-gray-100 transition-colors">
                                JETZT ANMELDEN
                            </RouterLink>
                        </div>
                    </div>

                    <!-- White Separator Line (Center) -->
                    <div class="md:hidden w-full h-px bg-white my-8"></div>
                    <div class="hidden md:block w-px bg-white self-stretch mx-12"></div>

                    <!-- Image Right -->
                    <div class="w-full h-[500px] md:h-full overflow-hidden">
                        <img src="@/assets/images/startbild2.jpg" alt="Trainer"
                            class="w-full h-full object-cover object-bottom md:object-bottom" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Course Formats Section -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                <div class="mb-12">
                    <p class="text-md font-serif text-gray-500 uppercase tracking-wide mb-4">
                        TRAININGSANGEBOT
                    </p>
                    <h2 class="text-3xl md:text-4xl font-semi-bold text-gray-900 mb-4">
                        Professionelle Rhetorikseminare für starke Rednerpersönlichkeiten
                    </h2>
                </div>

                <div class="grid md:grid-cols-3 gap-8 mb-12">
                    <!-- Course 1 -->
                    <RouterLink to="/kurse/allgemeines-rhetorik-training" class="group cursor-pointer bg-gray-50 p-6">
                        <h3 class="text-xl font-bold text-primary-600 mb-3 flex items-center gap-2">
                            Allgemeines Rhetorik Training
                            <span class="text-primary-600 transition-transform group-hover:translate-x-1">⟶</span>
                        </h3>
                        <p class="text-gray-700">
                            Umfassendes Programm in zwei Modulen für Anfänger und Fortgeschrittene.
                        </p>
                    </RouterLink>

                    <!-- Course 2 -->
                    <RouterLink to="/kurse/schwerpunkt-training" class="group cursor-pointer bg-gray-50 p-6">
                        <h3 class="text-xl font-bold text-primary-600 mb-3 flex items-center gap-2">
                            Schwerpunkt Training
                            <span class="text-primary-600 transition-transform group-hover:translate-x-1">⟶</span>
                        </h3>
                        <p class="text-gray-700">
                            Fokussierte Trainings zu spezifischen Themen wie Körpersprache, Stimme und Argumentation.
                        </p>
                    </RouterLink>

                    <!-- Course 3 -->
                    <RouterLink to="/kurse/individual-training" class="group cursor-pointer bg-gray-50 p-6">
                        <h3 class="text-xl font-bold text-primary-600 mb-3 flex items-center gap-2">
                            Individual Training
                            <span class="text-primary-600 transition-transform group-hover:translate-x-1">⟶</span>
                        </h3>
                        <p class="text-gray-700">
                            Maßgeschneidertes 1:1 Coaching für Ihre spezifischen Bedürfnisse und Ziele.
                        </p>
                    </RouterLink>
                </div>

              
            </div>
        </section>

        <!-- Trainer Section -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
                    <!-- Image Left -->
                    <div class="w-full">
                        <img src="@/assets/images/startbild.jpg" alt="Maximilian Höslinger"
                            class="w-full h-auto object-cover" />
                    </div>

                    <!-- Gray Separator Line (Center) -->
                    <div class="md:hidden w-full h-px bg-gray-300 my-8"></div>
                    <div class="hidden md:block w-px bg-gray-300 self-stretch mx-12"></div>

                    <!-- Text Right -->
                    <div class="w-full flex flex-col">
                        <p class="text-md font-serif text-gray-500 uppercase tracking-wide mb-4">
                            IHR TRAINER
                        </p>
                        <div class="flex-grow"></div>
                        <div>
                            <h2 class="text-4xl text-primary-600 font-semi-bold mb-6">
                                Maximilian Höslinger
                            </h2>
                            <p class="text-lg text-gray-700 leading-relaxed mb-8">
                                Als Rechtsanwalt, Marineoffizier, Dozent und in jahrelanger ehrenamtlicher
                                Tätigkeit habe ich umfangreiche Erfahrungen mit Redesituationen aller Art gesammelt.
                                Dieses Wissen gebe ich in meinen Seminaren weiter: Klar strukturiert, passgenau auf
                                Ihre Rednerpersönlichkeit abgestimmt und auf Augenhöhe.
                            </p>
                            <RouterLink to="/ueber"
                                class="inline-block border-2 border-primary-600 text-primary-600 px-8 py-3 font-semibold hover:bg-primary-600 hover:text-white transition-colors">
                                WEITERLESEN
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <CtaSection />

    </div>
</template>

<style scoped></style>
