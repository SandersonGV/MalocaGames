
<script>
export default {
  name: "ProjectsComponent",
  props: {
    exibir: {type:String , default:'0'},
    projetos: {type:Object } 
  },
  data() {
    return { 
      projects: this.projetos
    };
  },
  methods: {
    
  },
  async mounted() {
    if(this.exibir>0){
        this.projects = this.projects.filter((e,i)=>{if(i<this.exibir)return e});
      }
  },
};
</script>

<template>
  <div  class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title text-center text-primary text-uppercase">
          Nossos Projetos
        </h6>
        <h1 class="mb-5">
          Conheça nossos
          <span class="text-primary text-uppercase">Projetos</span>
        </h1>
      </div>
      <div class="row g-4">
        <div v-for="item in projects" :key="item.id" class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="room-item shadow rounded overflow-hidden">
            <div class="position-relative image-block">
              <img class="img-fluid py-3" :src="item.img" alt="" />
              <small
                class="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4"
                >{{item.tipo}}</small
              >
            </div>
            <div class="p-4 mt-2">
              <div class="d-flex justify-content-between mb-3">
                <h5 class="mb-0">{{item.nome}}</h5>
                <div class="ps-2" >
                  <small class="fa fa-star text-primary" v-for="item,index in Array(parseInt(item.complexidade)).fill()" :key="index"></small>
                </div>
              </div>
              <div class="d-flex mb-3">
                <small class="border-end me-3 pe-3"
                  ><i class="fas fa-user-friends text-primary me-2"></i
                  >{{item.jogadores}}</small
                >
                <small class="border-end me-3 pe-3"><i class="fas fa-clock text-primary me-2"></i
                  >{{item.tempo}}</small
                >
                <small
                  ><i class="fas fa-user-plus text-primary me-2"></i
                  >{{item.idade}}</small
                >
              </div>
              <p class="text-body mb-3">{{item.sobre}}</p>
              <div class="d-flex justify-content-between">
                <router-link :to="'/trampo/'+item.id" class="btn btn-sm btn-primary rounded py-2 px-4"
                  >ver mais
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.room-item img{
    max-height: 300px ;
}

.image-block {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>