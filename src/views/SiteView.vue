<script>
import { RouterView } from 'vue-router'
import FooterMenu from '../components/FooterMenu.vue'
import HeaderMenu from '../components/HeaderMenu.vue'
import { DataStorage } from "../helpers/DataStorage"

export default {
    components:{
      RouterView,
      FooterMenu,
      HeaderMenu,
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
    <HeaderMenu :malocainfo="maloca.info" />
    <RouterView />
    <FooterMenu :malocainfo="maloca"/>
  </main>
</template>
