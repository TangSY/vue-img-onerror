/**
* Description:    vue自定义指令实现img的onerror
* Author:         TSY
* CreateDate:     2019/2/25 19:04
* email:          t@tsy6.com
*/
<template>
    <div class="container">
        <div class="add">
            <span>添加图片：</span>
            <input type="text" v-model="addImgSrc">
            <button @click="addImg">添加</button>
            <button @click="delImg">删除</button>
        </div>
        <ul class="img-list">
            <li v-for="(item,index) in imgList" :key="index">
                <img src="./assets/logo.png" v-real-img="item" default-img="https://hxkj.vip/demo/vueImgOnerror/img/logo.16af1ba4.png" alt="">
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "imgError",
        data() {
            return {
                imgList: [
                    'https://upload.jianshu.io/users/upload_avatars/7412714/d16e0222-2645-41c7-b4c0-9719b4dbb1f6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
                ],//图片列表
                addImgSrc: 'https://upload.jianshu.io/users/upload_avatars/7412714/d16e0222-2645-41c7-b4c0-9719b4dbb1f6.jpg',//待添加的图片地址
            }
        },
        mounted() {

        },
        computed: {},
        methods: {
            addImg() {
                this.imgList.unshift(this.addImgSrc);
            },
            delImg() {
                if (this.imgList.length === 0) return;
                this.imgList.shift();
            }
        }
    }
</script>

<style lang="stylus">
    @import "./style/reset.styl";
    @import "./style/common.styl";

    .add {
        width 100%
        text-align center
        margin 10px 0
    }

    .add input {
        width 50%
        border 1px solid main-font-color
        padding 5px 10px
        border-radius 5px
    }

    .add button {
        border 1px solid main-color
        padding 5px 10px
        border-radius 5px
        color main-color
        margin 0 10px
        background none
        cursor pointer
    }

    .img-list {
        display flex
        align-items center
        flex-wrap wrap
    }

    .img-list li {
        width 150px
        margin 10px
    }

    .img-list img {
        width 100%
        text-align center
        border 3px solid main-color
        padding 5px
    }
</style>