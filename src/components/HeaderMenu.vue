<script>

export default {
    props: [
        "malocainfo"
    ]
}
</script>

<template>
    <div class="container-fluid bg-dark px-0">
            <div class="row gx-0">
                <div class="col-lg-3 bg-dark d-none d-lg-block">
                <router-link to="/" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <h1 class="m-0 text-primary text-uppercase">{{malocainfo?.titulo}}</h1>
                </router-link>
                </div>
                <div class="col-lg-9">
                    <div class="row gx-0 bg-white d-none d-lg-flex">
                        <div class="col-lg-7 px-5 text-start">
                            <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i class="fa fa-envelope text-primary me-2"></i>
                                <p class="mb-0">{{malocainfo?.email}}</p>
                            </div>
                            <div class="h-100 d-inline-flex align-items-center py-2">
                                <i class="fa fa-phone-alt text-primary me-2"></i>
                                <p class="mb-0">{{malocainfo?.telefone}}</p>
                            </div>
                        </div>
                        <div class="col-lg-5 px-5 text-end">
                            <div class="d-inline-flex align-items-center py-2">
                                <a v-show="malocainfo.instagram!=''" class="me-3" target="_blank" :href="malocainfo?.instagram"><i class="fab fa-instagram"></i></a>        
                                <a v-show="malocainfo.telegram!=''" class="me-3" target="_blank" :href="malocainfo?.telegram"><i class="fab fa-telegram"></i></a>        
                                <a v-show="malocainfo.whatsapp!=''" class="me-3" target="_blank" :href="malocainfo?.whatsapp"><i class="fab fa-whatsapp"></i></a>        
                                <a v-show="malocainfo.youtube!=''" class="me-3" target="_blank" :href="malocainfo?.youtube"><i class="fab fa-youtube"></i></a>        
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <router-link to="/" class="navbar-brand d-block d-lg-none">
                            <h1 class="m-0 text-primary text-uppercase">{{malocainfo?.titulo}}</h1>
                        </router-link>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto py-0">
                                <router-link to="/" class="nav-item nav-link active">Maloca</router-link>
                                <router-link to="/equipe" class="nav-item nav-link">Os Maloqueiros</router-link>
                                <router-link to="/trampos" class="nav-item nav-link">Trampos</router-link>
                                <router-link to="/qualfoi" class="nav-item nav-link">Qual foi?</router-link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
</template>

