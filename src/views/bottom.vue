<template>
    <div class="common-layout" style="min-width: 1460px;">
      <el-backtop :bottom="168">
        <div
          style="
            height: 100%;
            width: 100%;
            background-color: var(--el-bg-color-overlay);
            box-shadow: var(--el-box-shadow-lighter);
            text-align: center;
            line-height: 8px;
            color: #1989fa;
            border-radius: 50%;
          "
        >
          <el-icon><Top /></el-icon>
          <h6 style="display: inline;">Top</h6>
        </div>
      </el-backtop>
      
      <div class="music-player" v-if="isMusicPlayerVisible">
        <div class="track-info">
          <span class="track-name">{{ currentTrackName }}</span>
        </div>
        <div class="progress-container" @mouseover="isHovered = true" @mouseleave="isHovered = false">
          <span class="current-time">{{ formatTime(currentTime) }}</span>
          <div class="progress-bar" @click="setProgress($event)">
            <div
              class="progress"
              :style="{ width: `${progressWidth}%` }"
              :class="{ 'hovered': isHovered }"
            ></div>
            <div
              class="slider-thumb"
              :style="{ left: `${progressWidth}%`, display: isHovered || isDragging ? 'block' : 'none' }"
              @mousedown.prevent="startDragging"
            ></div>
          </div>
          <span class="total-time">{{ formatTime(totalDuration) }}</span>
        </div>
        <div class="controls">
          <a href="#" @click.prevent="previousTrack" class="icon-link" title="上一曲">
            <el-icon><DArrowLeft /></el-icon>
          </a>
          <a href="#" @click.prevent="togglePlay" class="icon-link" title="播放/暂停">
            <el-icon>
              <VideoPlay v-if="!isPlaying" />
              <VideoPause v-else />
            </el-icon>
          </a>
          <a href="#" @click.prevent="nextTrack" class="icon-link" title="下一曲">
            <el-icon><DArrowRight /></el-icon>
          </a>
        </div>
      </div>
      
      <el-footer class="end">
        <div class="logos">
          <img src="../assets/logo/sega_logo.png" alt="SEGA">
          <img src="../assets/logo/p_studio_logo.png" alt="P-STUDIO">
          <img src="../assets/logo/atlus_logo.png" alt="ATLUS">
        </div>
        <p class="text">本页面仅为个人练习</p>
        <div class="logos">
          <img src="../assets/logo/ps5_logo.png" alt="PS5">
          <img src="../assets/logo/steam_logo.png" alt="STEAM">
          <img src="../assets/logo/switch_logo.png" alt="SWITCH">
          <img src="../assets/logo/xbox_xs_logo.png" alt="XBOX">
          <img src="../assets/logo/xbox_one_logo.png" alt="XBOX-ONE">
        </div>
        <p class="text">Microsoft Xbox Series X, Xbox Series S, Xbox One and related Xbox logos are trademarks and/or registered trademarks of Microsoft Corporation 
          <br>
          and the Microsoft group of companies.</p>
        <p class="text">The Nintendo Switch LOGO, Nintendo Switch is a trademark of Nintendo.</p>
        <p class="text">©2021 Valve Corporation. Steam are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.</p>
        <p class="text">©ATLUS ©SEGA All rights reserved.</p>
      </el-footer>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import { Top, VideoPlay, VideoPause, DArrowLeft, DArrowRight } from '@element-plus/icons-vue';
  
  const musicTracks = [
    'src/assets/music/01 Life Will Change.mp3',
    'src/assets/music/02 Mass Destruction.mp3',
    'src/assets/music/03 Brand New Days.mp3',
    'src/assets/music/04 Beneath the Mask.mp3',
    'src/assets/music/05 Wake Up, Get Up, Get Out There.mp3',
    'src/assets/music/06 紧迫.mp3',
    'src/assets/music/07 觉醒.mp3',
    'src/assets/music/08 Will Power.mp3',
    'src/assets/music/09 Last Surprise.mp3',
    'src/assets/music/10 全人类灵魂之诗.mp3'
  ];
  
  const currentTrackIndex = ref(0);
  const isPlaying = ref(false);
  const isDragging = ref(false); // 拖动状态
  const isHovered = ref(false); // 鼠标悬停状态
  const isMusicPlayerVisible = ref(true); // 控制播放器可见性
  let audio = new Audio();
  const totalDuration = ref(0); // 总时长
  const currentTime = ref(0); // 当前时间
  
  // 确保当组件挂载时加载第一首曲目
  onMounted(() => {
    audio.src = musicTracks[currentTrackIndex.value];
    audio.loop = false; // 不默认循环
    audio.addEventListener('ended', nextTrack); // 监听音乐结束事件
    audio.addEventListener('timeupdate', updateCurrentTime); // 更新当前播放时间
    audio.addEventListener('loadedmetadata', () => {
      totalDuration.value = audio.duration; // 加载时获取总时长
    });
  
    // 鼠标移动和释放事件管理
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mousemove', onMouseMove);
  });
  
  // 当前曲目名称计算属性
  const currentTrackName = computed(() => {
    return musicTracks[currentTrackIndex.value].split('/').pop().replace('.mp3', '');
  });
  
  // 更新当前播放时间
  const updateCurrentTime = () => {
    currentTime.value = audio.currentTime;
  };
  
  // 进度条宽度计算
  const progressWidth = computed(() => {
    return (currentTime.value / totalDuration.value) * 100 || 0;
  });
  
  // 设置播放位置
  const setProgress = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left; // 鼠标相对于进度条的偏移量
    const percentage = offsetX / rect.width; // 百分比
    audio.currentTime = percentage * totalDuration.value; // 更新音频播放时间
  };
  
  // 播放和暂停切换
  const togglePlay = () => {
    isPlaying.value = !isPlaying.value;
    if (isPlaying.value) {
      audio.play();
      console.log("Playing music");
    } else {
      audio.pause();
      console.log("Paused music");
    }
  };
  
  // 播放下一曲目
  const nextTrack = () => {
    currentTrackIndex.value = (currentTrackIndex.value + 1) % musicTracks.length; // 循环播放
    playCurrentTrack();
  };
  
  // 播放上一曲目
  const previousTrack = () => {
    currentTrackIndex.value = (currentTrackIndex.value - 1 + musicTracks.length) % musicTracks.length; // 循环播放
    playCurrentTrack();
  };
  
  // 播放当前曲目
  const playCurrentTrack = () => {
    audio.src = musicTracks[currentTrackIndex.value];
    if (isPlaying.value) {
      audio.play();
    }
    console.log(`Playing track: ${musicTracks[currentTrackIndex.value]}`);
  };
  
  // 格式化时间输出
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  
  // 拖动调整进度
  const startDragging = () => {
    isDragging.value = true;
  };
  
  const stopDragging = () => {
    isDragging.value = false;
  };
  
  const onMouseMove = (event) => {
    if (isDragging.value) {
      const progressBar = document.querySelector('.progress-bar');
      const rect = progressBar.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1); // 保证在范围内
      audio.currentTime = percentage * totalDuration.value;
    }
  };
  
  // 在组件销毁前清理 Audio 对象的事件
  onUnmounted(() => {
    audio.pause();
    audio.src = '';
    audio.removeEventListener('ended', nextTrack);
    audio.removeEventListener('timeupdate', updateCurrentTime);
    document.removeEventListener('mouseup', stopDragging);
    document.removeEventListener('mousemove', onMouseMove);
  });
  </script>
  
  <style lang="less" scoped>
  .music-player {
    position: fixed;
    z-index: 1;
    bottom: 30px;
    right: 50px;
    width: 200px; /* 扩大宽度 */
    height: 120px; /* 扩大高度 */
    background-color: rgba(169, 169, 169, 0.9);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
  
  .track-info {
    margin-bottom: 10px;
    font-size: 14px;
    text-align: center;
    white-space: nowrap; /* 防止曲名换行 */
    overflow: hidden;
    text-overflow: ellipsis; /* 超出部分使用省略号 */
    width: 100%;
  }
  
  .progress-container {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .current-time,
  .total-time {
    font-size: 12px;
    width: 50px;
  }
  
  .progress-bar {
    flex: 1;
    height: 4px;
    background-color: lightgray;
    position: relative;
    cursor: pointer;
    margin: 0 10px; /* 适当添加边距 */
  }
  
  .progress {
    height: 100%;
    background-color: blue; /* 已进度部分的颜色 */
  }
  
  .slider-thumb {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: white; /* 滑块颜色 */
    border-radius: 50%;
    top: -4px; /* 提高滑块 */
    cursor: pointer;
    transition: width 0.2s ease, height 0.2s ease;
  }
  
  .progress-bar.hovered .slider-thumb {
    width: 16px;
    height: 16px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* 提升悬停效果 */
  }
  
  .controls {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  
  .icon-link {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  
    &:hover {
      color: #1989fa;
    }
  }
  
  .end {
    width: 100%;
    height: auto;
    background-color: black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
  
    .logos {
      margin: auto;
      height: 64px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  
    .logos img {
      height: 64px;
      width: 128px;
      object-fit: contain;
      margin-right: 10px;
    }
  
    .text {
      color: #fff;
      text-align: center;
    }
  }
  </style>