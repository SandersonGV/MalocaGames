<script>

export default {
    props: [
        "malocainfo"
    ]
}
</script>

<template>
      <div class="container-xxl py-5">
        <div  class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <h6 class="section-title text-start text-primary text-uppercase">Sobre nós</h6>
                    <h1 class="mb-4">Bem vindos à <span class="text-primary text-uppercase">{{malocainfo?.info?.titulo}}</span></h1>
                    <p class="mb-4">{{malocainfo?.info?.sobre}}</p>
                    <div class="row g-3 pb-4">
                        <div class="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                            <div class="border rounded p-1">
                                <div class="border rounded text-center p-4">
                                    <i class="far fa-object-group fa-2x text-primary mb-2"></i>
                                    <h2 class="mb-1" data-toggle="counter-up">{{malocainfo?.projetos?.length}}</h2>
                                    <p class="mb-0">Projetos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                            <div class="border rounded p-1">
                                <div class="border rounded text-center p-4">
                                    <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                    <h2 class="mb-1" data-toggle="counter-up">{{malocainfo?.team?.length}}</h2>
                                    <p class="mb-0">Equipe</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                            <div class="border rounded p-1">
                                <div class="border rounded text-center p-4">
                                    <i class="fas fa-handshake fa-2x text-primary mb-2"></i>
                                    <h2 class="mb-1" data-toggle="counter-up">{{malocainfo?.partners?.length}}</h2>
                                    <p class="mb-0">Parceiros</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <router-link to="/equipe" class="btn btn-primary py-3 px-5 mt-2" >Conheça mais</router-link>
                </div>
                <div class="col-lg-6">
                    <div class="row g-3">
                        <div class="col-6 text-end">
                            <img class="img-fluid rounded w-75 wow zoomIn mt-5" data-wow-delay="0.1s" src="/src/assets/img/about-3.png"  alt=""/>
                        </div>
                        <div class="col-6 text-start">
                            <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="/src/assets/img/about-2.png" alt=""/>
                        </div>
                        <div class="col-6 text-end">
                            <img class="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="/src/assets/img/about-4.png" alt=""/>
                        </div>
                        <div class="col-6 text-start">
                            <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="/src/assets/img/about-1.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

