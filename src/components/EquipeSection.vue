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
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title text-center text-primary text-uppercase">
          Nosso time
        </h6>
        <h1 class="mb-5">
          Conheça nossa <span class="text-primary text-uppercase">Equipe</span>
        </h1>
      </div>
      <div class="row g-4">
        <div
          class="col-lg-3 col-md-6 wow fadeInUp"
          data-wow-delay="0.1s"
          v-for="item, index in team"
          :key="index"
        >
          <div class="rounded shadow overflow-hidden">
            <div class="position-relative">
              <img class="img-fluid" :src="item.img" alt="" />
              <div
                class="
                  position-absolute
                  start-50
                  top-100
                  translate-middle
                  d-flex
                  align-items-center
                "
              >
                <a
                  v-for="itemSocial, indexSocial in item.social"
                  :key="indexSocial"
                  class="btn btn-square btn-primary mx-1"
                  :href="itemSocial.url"
                  target="_black"
                  ><i :class="itemSocial.icone"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4 mt-3">
              <h5 class="fw-bold mb-0">{{ item.nome }}</h5>
              <small>{{ item.cargo }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-fluid{
    width: 300px;
    height: 300px;
}
</style>
