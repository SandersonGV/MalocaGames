<script>
import {NewsletterController} from '../controllers/NewsletterController'
import Swal from 'sweetalert2'

export default {
  props:{
    time:{ type:Array}
  },
  data() {
    return {
        enviando:false,
        newsletterController : new NewsletterController(),
        email : "",
        toast:{}
    };
  },
  methods: {
    async enviarInscrito(){
        this.enviando = true;
        if(!this.validarEmail(this.email)){
            await this.toast.fire({
                icon: 'error',
                title: 'Preencha um email válido'
            })
            this.enviando = false;
            return; 
        }
        let result = await this.newsletterController.addEmail(this.email);

        if(!result){
            await this.toast.fire({
                icon: 'warning',
                title: 'ocorreu um erro no servidor, tente novamente mais tarde'
            })
        }

        await this.toast.fire({
            icon: 'success',
            title: 'Email registrado com sucesso'
        })
        this.enviando = false;
    },
    validarEmail(email) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }

  },    
  async mounted() {
    this.toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1300,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
  },
};
</script>

<template>
        <!-- Newsletter Start -->
        <div class="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="row justify-content-center">
                <div class="col-lg-10 border rounded p-1">
                    <div class="border rounded text-center p-1">
                        <div class="bg-white rounded text-center p-5">
                            <h4 class="mb-4">Se inscreva para novidades <span class="text-primary text-uppercase">novidades</span></h4>
                            <div class="position-relative mx-auto" style="max-width: 400px;">
                                <input class="form-control w-100 py-3 ps-4 pe-5" type="text" v-model="email" placeholder="Seu email aqui...">
                                <button :disabled="enviando" type="button" class="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2" @click="enviarInscrito">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Newsletter Start -->
</template>

<style scoped>

</style>
