<script setup lang="ts">
</script>

<template>
    <div class="startseite">
        <!-- Hero Section -->
        <section class="bg-[#153E75] py-10 w-full md:py-20">
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
                                class="inline-block bg-white text-[#153E75] px-6 md:px-8 py-3 md:py-4 font-semibold hover:bg-gray-100 transition-colors">
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
                        KURSFORMATE
                    </p>
                    <h2 class="text-3xl md:text-4xl font-semi-bold text-gray-900 mb-4">
                        Professionelle Rhetorikseminare für starke Rednerpersönlichkeiten
                    </h2>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <!-- Course 1 -->
                    <RouterLink to="/kurse" class="group cursor-pointer">
                        <h3 class="text-xl font-bold text-[#153E75] mb-3 flex items-center gap-2">
                            Grundlagentraining Rhetorik
                            <span class="text-[#153E75] transition-transform group-hover:translate-x-1">→</span>
                        </h3>
                        <p class="text-gray-700">
                            Basistraining für klare und überzeugende Kommunikation mit grundlegender Arbeit an Auftritt, Stimme und Struktur
                        </p>
                    </RouterLink>

                    <!-- Course 2 -->
                    <RouterLink to="/kurse" class="group cursor-pointer">
                        <h3 class="text-xl font-bold text-[#153E75] mb-3 flex items-center gap-2">
                            Körpersprache & Präsenz
                            <span class="text-[#153E75] transition-transform group-hover:translate-x-1">→</span>
                        </h3>
                        <p class="text-gray-700">
                            Training für Präsenz im Raum, selbstbewusstes Auftreten und lebendige Präsentation der eigenen Standpunkte
                        </p>
                    </RouterLink>

                    <!-- Course 3 -->
                    <RouterLink to="/kurse" class="group cursor-pointer">
                        <h3 class="text-xl font-bold text-[#153E75] mb-3 flex items-center gap-2">
                            Stimme & Atmung
                            <span class="text-[#153E75] transition-transform group-hover:translate-x-1">→</span>
                        </h3>
                        <p class="text-gray-700">
                            Training für die wichtigsten Werkzeuge in jeder Redesituation – Wege zu mehr Modulation und Varianz in der Stimme
                        </p>
                    </RouterLink>

                    <!-- Course 4 -->
                    <RouterLink to="/kurse" class="group cursor-pointer">
                        <h3 class="text-xl font-bold text-[#153E75] mb-3 flex items-center gap-2">
                            Inhalt & Struktur
                            <span class="text-[#153E75] transition-transform group-hover:translate-x-1">→</span>
                        </h3>
                        <p class="text-gray-700">
                            Fokus auf das gesprochene Wort durch Übungen zu Aufbau, Struktur und Formulierung von Argumenten und Reden
                        </p>
                    </RouterLink>

                    <!-- Course 5 -->
                    <RouterLink to="/kurse" class="group cursor-pointer">
                        <h3 class="text-xl font-bold text-[#153E75] mb-3 flex items-center gap-2">
                            Rhetorik für Fortgeschrittene
                            <span class="text-[#153E75] transition-transform group-hover:translate-x-1">→</span>
                        </h3>
                        <p class="text-gray-700">
                            Aufbaukurs mit Vertiefung zur Weiterentwicklung erfahrener Rednerpersönlichkeiten
                        </p>
                    </RouterLink>

                    <!-- Course 6 -->
                    <RouterLink to="/kurse" class="group cursor-pointer">
                        <h3 class="text-xl font-bold text-[#153E75] mb-3 flex items-center gap-2">
                            Individuelles Einzeltraining
                            <span class="text-[#153E75] transition-transform group-hover:translate-x-1">→</span>
                        </h3>
                        <p class="text-gray-700">
                            Ihr persönliches Training zur Vorbereitung einer konkreten Redesituation oder als begleitendes Feedback
                        </p>
                    </RouterLink>
                </div>

              
            </div>
        </section>

        <!-- Trainer Section -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex flex-col md:flex-row gap-24">
                    <!-- Image Left -->
                    <div class="w-full md:w-1/2">
                        <img src="@/assets/images/startbild.jpg" alt="Maximilian Höslinger"
                            class="w-full h-auto object-cover" />
                    </div>

                    <!-- Text Right -->
                    <div class="w-full md:w-1/2 flex flex-col">
                        <p class="text-md font-serif text-gray-500 uppercase tracking-wide mb-4">
                            IHR TRAINER
                        </p>
                        <div class="flex-grow"></div>
                        <div>
                            <h2 class="text-4xl text-[#153E75] font-semi-bold mb-6">
                                Maximilian Höslinger
                            </h2>
                            <p class="text-lg text-gray-700 leading-relaxed mb-8">
                                Als Rechtsanwalt, Marineoffizier, Dozent und in jahrelanger ehrenamtlicher
                                Tätigkeit habe ich umfangreiche Erfahrungen mit Redesituationen aller Art gesammelt.
                                Dieses Wissen gebe ich in meinen Seminaren weiter: Klar strukturiert, passgenau auf
                                Ihre Rednerpersönlichkeit abgestimmt und auf Augenhöhe.
                            </p>
                            <RouterLink to="/ueber"
                                class="inline-block border-2 border-[#153E75] text-[#153E75] px-8 py-3 font-semibold hover:bg-[#153E75] hover:text-white transition-colors">
                                WEITERLESEN
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>

<style scoped></style>
