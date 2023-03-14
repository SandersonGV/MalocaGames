<script >
import { RouterView } from 'vue-router'
import { MalocaController } from "./controllers/MalocaController"
import { DataStorage } from "./helpers/DataStorage"

export default {
  name: "SiteView",
  components: {
    RouterView, 
  },
   data() {
    return {
      maloca: {},
      malocaController: new MalocaController(),
      dataStorage: new DataStorage(),
      loading:true
    };
  },
  methods: {
    loadMalocainfo: async function () {
      this.maloca.info = await this.malocaController.getInfo();
      this.maloca.projetos  = await this.malocaController.getProjects();
      this.maloca.team = await this.malocaController.getTeam();
      this.maloca.partners = [];

      this.dataStorage.save( {id:"maloca", data: this.maloca} );

      this.loading=false;
    },
  },
  async created() {
    await this.loadMalocainfo();
  },
};

</script>

<template>
    <RouterView />
</template>

