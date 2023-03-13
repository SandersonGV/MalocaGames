<script>
import HeroSection from '../components/HeroSection.vue'
import ProjetosSection from '../components/ProjetosSection.vue'
import DestaqueSection from '../components/DestaqueSection.vue'
import EquipeSection from '../components/EquipeSection.vue'
import NewsletterSection from '../components/NewsletterSection.vue'
import AboutSection from '../components/AboutSection.vue'
import { DataStorage } from "../helpers/DataStorage"

export default {
    components:{
      HeroSection,
      AboutSection,
      ProjetosSection,
      DestaqueSection,
      EquipeSection,
      NewsletterSection,
    },
    data: function () {
        return {
            maloca: {},
            dataStorage: new DataStorage(),
        }
    },
    async created() {
      let storagemaloca = this.dataStorage.get("maloca");
      this.maloca = storagemaloca.data
    },
}
</script>

<template>
  <main>
    <HeroSection :projetos="maloca.projetos" />
    <AboutSection :malocainfo="maloca" />
    <DestaqueSection />
    <ProjetosSection :projetos="maloca.projetos"/>
    <EquipeSection :time="maloca.team"/>
    <NewsletterSection />
  </main>
</template>
