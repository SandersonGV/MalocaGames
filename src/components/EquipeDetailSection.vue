<script>
export default {
  props:{
    time:{ type:Array}
  },
  data() {
    return {
      team: []
    };
  },
  mounted() {
    this.team=this.time;
  },
};
</script>

<template>
<div class="container-xxl py-5">
            <div class="container">
                <div v-for="(item, index) in team" :key="index" class="mb-4">
                    <div class="text-center wow fadeInUp " data-wow-delay="0.1s">
                        <h1 class="section-title text-center text-primary text-uppercase">{{item.nome}}</h1>
                        <h5 class="mb-3"><span class="text-primary text-uppercase">{{item.cargo}}</span></h5>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-6">
                            <div class="row g-3 justify-content-end">
                                <div class="col-8 ">
                                    <img class="img-fluid rounded wow zoomIn" data-wow-delay="0.1s" :src="item.img" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="wow fadeInUp" data-wow-delay="0.2s">
                                <p> {{item.sobre}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

