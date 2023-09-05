<script setup>
defineProps(['title'])

</script>


<template>
    <div class="card">
        <div class="card-header">
            Featured
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ 'Article ' + title }}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Velit egestas dui id ornare. Volutpat odio facilisis mauris sit amet massa
                vitae tortor condimentum. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et
                tortor consequat id porta nibh. Donec ultrices tincidunt arcu non sodales neque sodales. Magna etiam tempor
                orci eu lobortis elementum nibh. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
                Ultricies leo integer malesuada nunc vel. Lectus urna duis convallis convallis tellus id interdum velit
                laoreet. Purus semper eget duis at tellus at urna condimentum mattis. Egestas purus viverra accumsan in nisl
                nisi scelerisque. Id diam vel quam elementum pulvinar. Dapibus ultrices in iaculis nunc sed augue. Arcu
                dictum varius duis at consectetur lorem donec massa sapien. Vel turpis nunc eget lorem dolor sed viverra
                ipsum nunc. Eget mauris pharetra et ultrices neque ornare aenean. Gravida neque convallis a cras. Id aliquet
                lectus proin nibh nisl condimentum id venenatis a.</p>
        </div>
    </div>
</template>
  

  
<style scoped lang="scss">
.card {
    margin: 1rem;
}
</style>