<template>
  <div class="home">
    <el-carousel :interval="4000" 
                  type="card" 
                  height="200px">
    <el-carousel-item v-for="item in 6" 
                  :key="item">
      <h3 class="medium">
        <img :src="item"
              alt="">
      </h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs:[
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1474435601,3442233261&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=636746493,1015625227&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603108722652&di=c5ff0de5dfa83729cb1a05d5cd0ee694&imgtype=0&src=http%3A%2F%2Fwww.gamesoft.com.cn%2Fuploads%2Fallimg%2F171019%2F1G1444515-4.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603108805398&di=e5d88ecbabda22decc7c875385354fcd&imgtype=0&src=http%3A%2F%2Fm.iqiyipic.com%2Fu2%2Fimage%2F20180728%2F85%2F72%2Fuv_20024317409_m_601_720_405.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2455361351,3020171358&fm=26&gp=0.jpg"
      ]
    }
  }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>