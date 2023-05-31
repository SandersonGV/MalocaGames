<script>
export default {
  props: {
    exibir: {type:Number , default:0},
    projetos: {type:Object },
  },
  data() {
    return {
      destaques: this.projetos,
    };
  },
  methods: {
  },
  async mounted() {
    if(this.exibir>0){
        this.destaques = this.projetos.filter((e,i)=>{if(i<this.exibir)return e});
      }  
    },
};
</script>

<template>
    <div class="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div v-for="item,index in destaques" :key="index" :class="'carousel-item '+ (index==0 ? 'active':'') ">
              <div class="image-block">
                <img class="h-100 py-5" :src="item.capa" alt="" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3" >
                        <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">{{item.nome}}</h6>
                        <h1 class="display-3 text-white mb-4 animated slideInDown">{{item.frase}}</h1>
                        <router-link to="/trampos"  href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Nossos Projetos</router-link>
                        <router-link :to="'/trampo/'+item.id" href="#" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Conheça este Projeto</router-link>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Proximo</span>
        </button>
      </div>
    </div>
</template>

<style scoped>
.image-block {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>