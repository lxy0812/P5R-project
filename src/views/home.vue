<template>
    <div class="common-layout" style="min-width: 1460px;">
        <Header />
        <el-container>
          <el-aside width="500px">
            <a href="#" @click.prevent="openVideo">
              <img src="../assets/pv.png" alt="PV" style="width: 480px;">
              <img src="../assets/play.png" alt="play" class="play-icon">
            </a>
          </el-aside>
          <el-main style="padding: 0;">
            <img src="../assets/poster.png" alt="poster">
            <img src="../assets/p5r.png" alt="p5r">
          </el-main>
        </el-container>
        <div class="image-container">
          <img src="../assets/red.png" alt="" class="base-image">
          <div class="overlay-content">
                <img src="../assets/intro_title.png" alt="" class="overlay-image">
                <p>少年主角因某个缘由转学到“东京”的高中后，开始做起了奇异的梦。<br />——你确实是命运之『囚』啊。<br />少年被告知不久之后他就会迎来毁灭。<br /><br /></p>
                <p>为了完成赋予他的“更生”任务，也为了将人们从邪恶欲望中拯救出来，<br />成为怪盗的主角与各种人邂逅，结下羁绊。<br />在度过了宝贵的一年后，等待你的将是……？</p>
            </div>
        </div>
          <img src="../assets/背景.png" alt="" style="width: 100%;">
        <Bottom />
        <div v-if="showVideo" class="video-modal" @click="closeVideo">
            <video controls autoplay class="video-player">
                <source src="../assets/p5r_pv.mp4" type="video/mp4">
            </video>
            <div class="close">
              <img src="../assets/x.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './header.vue';
import Bottom from './bottom.vue';

const showVideo = ref(false);

const openVideo = () => {
  console.log("Opening video...");
    showVideo.value = true;
};

const closeVideo = () => {
  console.log("Closing video...");
    showVideo.value = false;
};

</script>

<style lang="less" scoped>
.common-layout {
    background-color: black;
}
  .common-layout .el-aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 0;
        margin-left: 0;
    }

    .play-icon {
        position: absolute; 
        top: 380px; 
        left: 210px; 
        width: 120px;
    }

  .common-layout .el-main {
        position: relative; /* 设置相对定位 */
        img:first-child {
            display: block; /* 确保图片是块级元素 */
            margin: 0 auto; /* 水平居中 */
            height: 700px;
        }

        img:last-child {
            position: absolute; /* 绝对定位 */
            bottom: 0; /* 定位到底部 */
            left: 50%; /* 定位到中间 */
            transform: translateX(-50%); /* 向左移动自身宽度的50%来居中 */
            width: 360px;
        }
    }

.image-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  position: relative;
  width: 100%;

  .base-image {
    width: 70%;
  }

  .overlay-content {
    position: absolute; /* 绝对定位 */
    width: 100%;
    margin-top: -180px;
    display: flex;
    flex-direction: column; /* 子元素按列排列 */
    align-items: center;

    .overlay-image {
        width: 50%;
    }

    p {
        position: relative;
        text-align: center;
        color: #fff; 
    }
  }
}

.video-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.video-player {
    width: 60%;
}

.close {
    position: absolute;
    top: 3%;
    right: 20%;
    color: white;
    cursor: pointer;
}

</style>
