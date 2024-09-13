import { reactive } from 'vue';

const state = reactive({
    currentTrackIndex: 0,
    isPlaying: false,
    musicTracks: [
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
    ],
    audio: new Audio(),
});

const actions = {
    play({ state }) {
        state.isPlaying = true;
        state.audio.play();
    },
    pause({ state }) {
        state.isPlaying = false;
        state.audio.pause();
    },
    nextTrack({ state }) {
        state.currentTrackIndex = (state.currentTrackIndex + 1) % state.musicTracks.length;
        playTrack(state);
    },
    previousTrack({ state }) {
        state.currentTrackIndex = (state.currentTrackIndex - 1 + state.musicTracks.length) % state.musicTracks.length;
        playTrack(state);
    },
};

// 播放当前曲目并更新音频源
const playTrack = (state) => {
    state.audio.src = state.musicTracks[state.currentTrackIndex];
    if (state.isPlaying) {
        state.audio.play();
    }
};

// 初始化音频播放结束事件监听
state.audio.addEventListener('ended', () => {
    actions.nextTrack({ state });
});

export default {
    state,
    actions,
};