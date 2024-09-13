<template>
    <div class="music-player">
      <div class="track-info">
        <span class="track-name">{{ currentTrackName }}</span>
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
      <div class="volume-control">
        <input type="range" v-model="volume" @input="adjustVolume" min="0" max="1" step="0.1" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref, watch } from 'vue';
  import { useStore } from 'vuex';
  import { VideoPlay, VideoPause, DArrowLeft, DArrowRight } from '@element-plus/icons-vue';
  
  const store = useStore();
  
  // 计算属性，用于获取当前播放状态和曲目
  const isPlaying = computed(() => store.state.music.isPlaying);
  const currentTrackIndex = computed(() => store.state.music.currentTrackIndex);
  const musicTracks = computed(() => store.state.music.musicTracks);
  const currentTrackName = computed(() => musicTracks.value[currentTrackIndex.value]?.split('/').pop() || '');
  
  // 音量控制
  const volume = ref(1);
  
  watch(volume, (newVolume) => {
    store.state.music.audio.volume = newVolume; // 更新音量
  });
  
  // 播放和暂停切换
  const togglePlay = () => {
    if (isPlaying.value) {
      store.dispatch('music/pause');
    } else {
      store.dispatch('music/play');
    }
  };
  
  // 播放下一曲目
  const nextTrack = () => {
    store.dispatch('music/nextTrack');
  };
  
  // 播放上一曲目
  const previousTrack = () => {
    store.dispatch('music/previousTrack');
  };
  
  // 调整音量
  const adjustVolume = () => {
    store.state.music.audio.volume = volume.value; // 设置音量
  };
  </script>
  
  <style lang="less" scoped>
  .music-player {
    position: fixed;
    bottom: 30px;
    right: 50px;
    width: 250px;
    background-color: rgba(169, 169, 169, 0.9);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
  
  .track-info {
    margin-bottom: 10px;
    font-size: 14px;
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
  
  .volume-control {
    margin-top: 10px;
    width: 100%;
  }
  
  input[type="range"] {
    width: 100%;
  }
  </style>