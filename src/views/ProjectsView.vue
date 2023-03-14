<script>
import ProjetosSection from '../components/ProjetosSection.vue'
import DestaqueSection from '../components/DestaqueSection.vue'
import NewsletterSection from '../components/NewsletterSection.vue'
import { DataStorage } from "../helpers/DataStorage"

export default {
    components:{
      ProjetosSection,
      DestaqueSection,
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
    <DestaqueSection :projetos="maloca.projetos"/>
    <ProjetosSection :projetos="maloca.projetos"/>
    <NewsletterSection />
  </main>
</template>