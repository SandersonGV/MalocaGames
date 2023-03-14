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
    this.projeto = this.projetos.find(element => element.destaque==true)
  },
};
</script>

<template>
    <!-- Video Start -->
    <div class="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
            <div class="row g-0">
                <div class="col-md-6 bg-dark d-flex align-items-center">
                    <div class="p-5">
                        <h6 class="section-title text-start text-white text-uppercase mb-3">Ultimo Lançamento</h6>
                        <h1 class="text-white mb-4">{{projeto.nome}}</h1>
                        <p class="text-white mb-4">{{projeto.frase}}</p>
                        <a target="_blank" :href="projeto.linkcompra" class="btn btn-primary py-md-3 px-md-5 me-3">Comprar</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="video" :style="'background-image: url('+projeto.img +');'">
                        <button type="button" class="btn-play"  data-bs-toggle="modal" :data-src="projeto.videos" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content rounded-0">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- 16:9 aspect ratio -->
                        <div class="ratio ratio-16x9">
                            <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                                allow="autoplay" title=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Video Start -->
</template>

