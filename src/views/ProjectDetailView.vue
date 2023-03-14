<script>
import ProjetoDetailSection from '../components/ProjetoDetailSection.vue'
import NewsletterSection from '../components/NewsletterSection.vue'
import { DataStorage } from "../helpers/DataStorage"

export default {
    components:{
      ProjetoDetailSection,
      NewsletterSection,
    },
    props: {
      malocaprop: Object,
      id:{type:String},
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
    <ProjetoDetailSection :projetos="maloca.projetos" :id="id"/>
    <NewsletterSection />
  </main>
</template>
