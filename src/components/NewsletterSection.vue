<script>
import mailchimp  from '@mailchimp/mailchimp_marketing'

export default {
  props:{
    time:{ type:Array}
  },
  data() {
    return {
      team: []
    };
  },
  async mounted() {
    await mailchimp.setConfig({
        apiKey: process.env.VITE_APP_MAILCHIMP_API_KEY,
        server: process.env.VITE_APP_MAILCHIMP_SERVER_PREFIX,
    });
    const response = await mailchimp.ping.get();
    console.log(response);
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
                                <input class="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Seu email aqui...">
                                <button type="button" class="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
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
