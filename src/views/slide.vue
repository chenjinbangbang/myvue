<template>
    <div class="slide">
        <swiper :options="swiperOption" ref="mySwiper" class="xx">
            <swiper-slide>
                <img src="../assets/img/3.jpg" alt="">
                <img src="../assets/img/3.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/img/3.jpg" alt="">
                <img src="../assets/img/3.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/img/3.jpg" alt="">
                <img src="../assets/img/3.jpg" alt="">
            </swiper-slide>

            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </div>
</template>

<script score>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'slide',
        components: {swiper,swiperSlide},
        data () {
            return {
                swiperOption: {
                    // 所有配置均为可选（同Swiper配置）
                    notNextTick: true,
                    autoplay: 3000,
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                    scrollbar:'.swiper-scrollbar',
                    mousewheelControl : true,
                    observeParents:true,
                    onTransitionStart(swiper){
                        console.log(swiper)
                    }
                }
            }
        },
        computed: {
            /*mySwiper(){
                return this.$refs.mySwiper.swiper;
            }*/
        },
        methods: {
            /*//鼠标移上停止轮播
            stopPlay(){
                this.mySwiper.stopAutoplay();
            },
            play(){
                this.mySwiper.startAutoplay();
            }*/
        }
    }
</script>

<style lang="scss">
    .slide{
        .xx{ //width:200px;
            .swiper-wrapper{ //width:1200px !important;
                .swiper-slide{ //width:400px !important; float:left;
                    img{ width:100px;}
                }
            }
        }
    }

</style>
