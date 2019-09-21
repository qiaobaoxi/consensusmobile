<template>
  <section >
    <div class="title">
      <img class="" v-lazy="imgAddress" alt="" srcset=""  :style="`margin:${imgMargin}`">
    </div>
  </section>
</template>

<script>
export default {
  props:['imgAddress',"imgMargin"],
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scoped>
    .title{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 602px;
        }
    }
</style>
