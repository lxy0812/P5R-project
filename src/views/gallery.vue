<template>
    <div class="common-layout" style="min-width: 1460px;">
        <Header />
        <el-main style="padding: 0;">
            <div class="container">
                <img class="imgtitle" src="../assets/news_bg.png" alt="">
                <p class="title photo" data-text="纪念照">纪念照</p>
                <div class="row">
                    <img src="../assets/Gallery/1.png" alt="">
                    <img src="../assets/Gallery/2.png" alt="">
                    <img src="../assets/Gallery/3.png" alt="">
                </div>
                <div class="row">
                    <img src="../assets/Gallery/4.png" alt="">
                    <img src="../assets/Gallery/5.png" alt="">
                    <img src="../assets/Gallery/6.png" alt="">
                </div>
                <div class="row">
                    <img src="../assets/Gallery/7.png" alt="">
                    <img src="../assets/Gallery/8.png" alt="">
                    <img src="../assets/Gallery/9.png" alt="">
                </div>
                <img class="imgtitle" src="../assets/news_bg.png" alt="">
                <p class="title attack" data-text="总攻击处决动画">总攻击处决动画</p>
                <div class="row">
                    <img src="../assets/Gallery/e1.png" alt="">
                    <img src="../assets/Gallery/e2.png" alt="">
                    <img src="../assets/Gallery/e3.png" alt="">
                </div>
                <div class="row">
                    <img src="../assets/Gallery/e4.png" alt="">
                    <img src="../assets/Gallery/e5.png" alt="">
                    <img src="../assets/Gallery/e6.png" alt="">
                </div>
                <div class="row">
                    <img src="../assets/Gallery/e7.png" alt="">
                    <img src="../assets/Gallery/e8.png" alt="">
                    <img src="../assets/Gallery/e9.png" alt="">
                </div>
                <div class="row">
                    <img src="../assets/Gallery/e10.png" alt="">
                    <img src="../assets/Gallery/e11.png" alt="">
                    <img src="../assets/Gallery/e12.png" alt="">
                </div>
                <div class="footer"></div>
            </div>
        </el-main>
        <Bottom />
    </div>
</template>

<script setup>
import Header from './header.vue';
import Bottom from './bottom.vue';
</script>

<style lang="less" scoped>
.common-layout {
    background-color: black;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(../assets/reddot1.png);
    background-size: cover;
    background-position: center;
    position: relative;
}

.imgtitle {
    width: 40%;
    margin-top: 2%;
}

.title {
    position: absolute;
    color: white;
    z-index: 1;
}

.title::before {
    content: attr(data-text); /* 复制文本内容 */
    position: absolute;
    top: 0;
    left: 0;
    color: red; /* 阴影颜色 */
    filter: blur(8px); /* 背景模糊 */
    z-index: 2; /* 放置在文字后面 */
}

.photo {
    top: 1.5%;
}

.attack {
    top: 47.2%;
}

.row {
    display: flex;
    justify-content: center;
    width: 98%;
}

.row img {
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 2%;
    width: 30%;
    &:hover {
                transform: scale(1.08);
            }
}

.footer {
    height: 50px;
    width: 100%;
}
</style>