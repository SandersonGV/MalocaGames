<script>
import NewsletterSection from '../components/NewsletterSection.vue'
import EquipeSection from '../components/EquipeSection.vue'
import { DataStorage } from "../helpers/DataStorage"

export default {
    components:{
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
    <EquipeSection :time="maloca.team"/>
    <NewsletterSection />
  </main>
</template>