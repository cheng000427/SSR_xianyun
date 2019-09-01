<template>
    <div class="header">

        <el-row type="flex" justify="space-between">
        <!-- logo -->
        <div class="logo">
            <img src="http://157.122.54.189:9093/images/logo.jpg" alt="">
        </div>
        <!-- 导航 -->
        <el-row type="flex" class="navs">
            <nuxt-link to="/">首页</nuxt-link>
            <nuxt-link to="/post">旅游攻略</nuxt-link>
            <nuxt-link to="/hotel">酒店</nuxt-link>
            <nuxt-link to="/air">国内机票</nuxt-link>
        </el-row>
        <!-- 登录注册 -->
        <div class="login">
            <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
        </div>
        </el-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    *{
        padding: 0;
        margin: 0;
    }
    ul,li,ol{
        list-style: none;
    }
    a{
        color:inherit;
        text-decoration: none;
    }

    .header{
        width: 1000px;
        margin: 0 auto;
        height: 60px;
        line-height: 60px;
        // box-shadow: 0 1px 1px #ddd;
        // border-bottom: 2px #ddd solid;
    }
    .logo{
        margin-top: 9px;
        img{
            width: 156px;
            height: 42px;
        }
    }
    .navs{
        flex: 1;
        margin-left: 30px;
        a{
            height: 60px;
            line-height: 60px;
            display: block;
            padding:0 10px;
            &:hover{
                color:#409eff;
                box-sizing:border-box;
                border-bottom: 5px #409eff solid
            }
        }
        .nuxt-link-exact-active{
            background: #409eff;
            color:#fff;
            &:hover{
                color:#fff
            }
        }
    }
</style>