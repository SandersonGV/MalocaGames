<script>
import NewsletterSection from '../components/NewsletterSection.vue'
import ContatoSection from '../components/ContatoSection.vue'
import { DataStorage } from "../helpers/DataStorage"

export default {
    components:{
      ContatoSection,
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
    <ContatoSection />
    <NewsletterSection />
  </main>
</template>