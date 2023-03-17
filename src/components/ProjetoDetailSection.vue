<script>
export default {
  props: {
    id:String,
    projetos: {type:Array } 
  },
  data() {
    return { 
      projeto: {}
    };
  },
  methods: {
    
  },
  async mounted() {
    this.projeto = this.projetos.find(element => element.id == this.id)
  },
};
</script>

<template>
    <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">Projeto</h6>
                    <h1 class="mb-5">Jogo <span class="text-primary text-uppercase">{{projeto.nome}}</span></h1>
                </div>
                <div class="row g-5">
                    <div class="col-lg-6">
                        <div class="row g-3">
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" :src="projeto.img" style="margin-top: 25%;" alt="">
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" :src="projeto.img" alt="">
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" :src="projeto.img" alt="">
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" :src="projeto.img" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                            <p> Idade: <span class="text-primary text-uppercase">{{projeto.idade}}</span></p>
                            <p>jogadores: <span class="text-primary text-uppercase">{{projeto.jogadores}}</span></p>
                            <p>Tempo de jogo: <span class="text-primary text-uppercase">{{projeto.tempo}}</span></p>
                            <p>Tipo: <span class="text-primary text-uppercase">{{projeto.tipo}}</span></p>
                            <p>complexidade: <small class="fa fa-star text-primary" v-for="item,index in Array(projeto.complexidade).fill()" :key="index"></small></p>
                            <p>Sobre: <span class="text-primary text-uppercase">{{projeto.sobre}}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

