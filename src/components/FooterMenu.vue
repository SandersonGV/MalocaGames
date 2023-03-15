<script>

export default {
  props: {malocainfo:Object}
};
</script>
<template>
 <div
    class="container-fluid bg-dark text-light footer wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div class="container pb-5">
      <div class="row g-5">
        <div class="col-md-6 col-lg-4">
          <div class="bg-primary rounded p-4">
            <router-link to="/" 
              ><h1 class="text-white text-uppercase mb-3">
                {{ malocainfo.info?.titulo }}
              </h1></router-link
            >
            <p class="text-white mb-0">
              {{ malocainfo.info?.frase }}
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <h6 class="section-title text-start text-primary text-uppercase mb-4">
            Contato
          </h6>
          <p class="mb-2 text-start">
            <i class="fa fa-map-marker-alt me-3"></i>{{ malocainfo.info?.endereco }}
          </p>
          <p class="mb-2 text-start">
            <i class="fa fa-phone-alt me-3"></i>{{ malocainfo.info?.telefone }}
          </p>
          <p class="mb-2 text-start">
            <i class="fa fa-envelope me-3"></i>{{ malocainfo.info?.email }}
          </p>
          <div class="d-flex pt-2">
            <a
              class="btn btn-outline-light btn-social"
              v-for="item in malocainfo.info?.social"
              :key="item.id"
              :href="item.url"
              ><i :class="item.icone"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="row gy-5 g-4">
            <div class="col-md-6">
              <h6
                class="
                  section-title
                  text-start text-primary text-uppercase
                  mb-4
                "
              >
                Empresa
              </h6>
              <router-link to="/equipe" class="btn btn-link">Sobre nós</router-link>
              <router-link to="/qualfoi" class="btn btn-link">Entre em contato</router-link>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0"></div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-menu">
              <router-link to="/">Inicio</router-link>
              <a >Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
