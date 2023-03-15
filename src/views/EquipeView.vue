<script>
import NewsletterSection from '../components/NewsletterSection.vue'
import EquipeDetailSection from '../components/EquipeDetailSection.vue'
import { DataStorage } from "../helpers/DataStorage"

export default {
    components:{
      EquipeDetailSection,
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
    <EquipeDetailSection :time="maloca.team"/>
    <NewsletterSection />
  </main>
</template>