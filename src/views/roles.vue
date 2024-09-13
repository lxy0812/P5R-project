<template>
    <div class="common-layout" style="min-width: 1460px;">
        <Header />
        <el-main style="padding: 0;">
            <div class="image-container">
                <img src="../assets/chara_title.png" alt="" class="chara-title" />
                <img src="../assets/chara_star.png" alt="" class="chara-star" />
                <button class="arrow left" @click="switchPage(-1)"></button>
                <button class="arrow right" @click="switchPage(1)"></button>
                <div class="chara-mask">
                    <template v-for="(page, index) in pages" :key="index">
                        <div v-show="currentPage === index + 1" class="page-content">
                            <img :src="page.charaNameImage" alt="" class="chara-name" v-bind:style="page.styles.charaName"/>
                            <img :src="page.maskImage" alt="" class="mask" v-bind:style="page.styles.mask"/>
                            <img :src="page.personaNameImage" alt="" class="persona_name" v-bind:style="page.styles.personaName"/>
                            <img v-if="page.isCharacter1Visible" :src="page.characterImage" alt="" class="character" v-bind:style="page.styles.character"/>
                            <img v-else :src="page.character1Image" alt="" class="character1" v-bind:style="page.styles.character1"/>
                            <a href="#" class="change-btn" @click.prevent="toggleCharacter(index)">
                                <img :src="page.changeBtnImage" alt="" class="btn-img" />
                            </a>
                            <img :src="page.txtBgImage" alt="" class="chara-txt-bg" />
                            <p class="profile" v-html="page.profile"></p>
                        </div>
                    </template>
                </div>

                <div class="character-btn">
                    <div class="character-btn1">
                        <a href="#" title="主角" @click.prevent="switchTo(0)">
                            <img :class="{ active: currentPage === 1 }" src="../assets/changebtn1.png" alt="" />
                        </a>
                        <a href="#" title="坂本龙司" @click.prevent="switchTo(1)">
                            <img :class="{ active: currentPage === 2 }" src="../assets/changebtn2.png" alt="" />
                        </a>
                        <a href="#" title="高卷杏" @click.prevent="switchTo(2)">
                            <img :class="{ active: currentPage === 3 }" src="../assets/changebtn3.png" alt="" />
                        </a>
                        <a href="#" title="新岛真" @click.prevent="switchTo(3)">
                            <img :class="{ active: currentPage === 4 }" src="../assets/changebtn4.png" alt="" />
                        </a>
                        <a href="#" title="奥村春" @click.prevent="switchTo(4)">
                            <img :class="{ active: currentPage === 5 }" src="../assets/changebtn5.png" alt="" />
                        </a>
                    </div>
                    <div class="character-btn2">
                        <a href="#" title="芳泽霞" @click.prevent="switchTo(5)">
                            <img :class="{ active: currentPage === 6 }" src="../assets/changebtn6.png" alt="" />
                        </a>
                        <a href="#" title="摩尔加纳" @click.prevent="switchTo(6)">
                            <img :class="{ active: currentPage === 7 }" src="../assets/changebtn7.png" alt="" />
                        </a>
                        <a href="#" title="喜多川祐介" @click.prevent="switchTo(7)">
                            <img :class="{ active: currentPage === 8 }" src="../assets/changebtn8.png" alt="" />
                        </a>
                        <a href="#" title="佐仓双叶" @click.prevent="switchTo(8)">
                            <img :class="{ active: currentPage === 9 }" src="../assets/changebtn9.png" alt="" />
                        </a>
                        <a href="#" title="明智吾郎" @click.prevent="switchTo(9)">
                            <img :class="{ active: currentPage === 10 }" src="../assets/changebtn10.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </el-main>
        <Bottom />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './header.vue';
import Bottom from './bottom.vue';

const currentPage = ref(1);

const pages = ref([
{
        charaNameImage: 'src/assets/chara1_name.png',
        maskImage: 'src/assets/Arsene.png',
        personaNameImage: 'src/assets/persona1_name.png',
        characterImage: 'src/assets/ren.png',
        character1Image: 'src/assets/Joker.png',
        changeBtnImage: 'src/assets/change_btn2.png',
        txtBgImage: 'src/assets/chara1_txt_bg.png',
        profile: '本作的主角。春天来到东京，<br>转学到大城市的高二少年。<br>以某个事件为契机，<br>觉醒成为了“人格面具”<br>操控者。借住在父母熟人家，<br>一间偏僻的咖啡店。白天上学，<br>放学后化身怪盗活跃在都市中，震撼世间。<br>初始人格面具是“亚森”。<br>',
        isCharacter1Visible: true,
        styles: {
            charaName: { top: '12%', left: '10%' },
            mask: { top: '0%', left: '45%' },
            personaName: { top: '30%', left: '60%' },
            character: { top: '20%', left: '32%' },
            character1: { top: '20%', left: '18%' }
        }
    },
    {
        charaNameImage: 'src/assets/chara2_name.png',
        maskImage: 'src/assets/Kidd.png',
        personaNameImage: 'src/assets/persona2_name.png',
        characterImage: 'src/assets/chara2_costume.png',
        character1Image: 'src/assets/Skull.png',
        changeBtnImage: 'src/assets/change_btn2.png',
        txtBgImage: 'src/assets/chara2_txt_bg.png',
        profile: '和主角一样，是秀尽学园的二年级生。<br>人们一般会注意其粗暴的言行，但实际是个重感情、<br>有男子汉气概的行动派。因为某个事件，<br>成为了校内臭名远扬的<br>“问题学生”，被周围人疏远。和刚转学来的主角相遇后，<br>觉醒了人格面具能力。<br>初始人格面具是“船长基德”。<br>',
        isCharacter1Visible: true,
        styles: {
            charaName: { top: '16%', left: '10%' },
            mask: { top: '4%', left: '52%' },
            personaName: { top: '30%', left: '68%' },
            character: { top: '20%', left: '40%' },
            character1: { top: '20%', left: '32%' }
        }
    },
    {
        charaNameImage: 'src/assets/chara3_name.png',
        maskImage: 'src/assets/Carmen.png',
        personaNameImage: 'src/assets/persona3_name.png',
        characterImage: 'src/assets/chara3_costume.png',
        character1Image: 'src/assets/Panther.png',
        changeBtnImage: 'src/assets/change_btn2.png',
        txtBgImage: 'src/assets/chara3_txt_bg.png',
        profile: '秀尽学园的二年级生，是主角的同班同学。<br>有四分之一美国血统的美少女，<br>学业之外还在当模特。天真烂漫，性格直率，<br>但因为容貌出类拔萃而无法融入周围，<br>形单影只。和主角相遇后，<br>以某个事件为契机觉醒了人格面具能力。<br>初始人格面具是“卡门”。',
        isCharacter1Visible: true,
        styles: {
            charaName: { top: '14%', left: '10%' },
            mask: { top: '4%', left: '50%' },
            personaName: { top: '30%', left: '70%' },
            character: { top: '20%', left: '40%' },
            character1: { top: '20%', left: '32%' }
        }
    },
    {
        charaNameImage: 'src/assets/chara4_name.png',
        maskImage: 'src/assets/Johanna.png',
        personaNameImage: 'src/assets/persona4_name.png',
        characterImage: 'src/assets/chara4_costume.png',
        character1Image: 'src/assets/Queen.png',
        changeBtnImage: 'src/assets/change_btn2.png',
        txtBgImage: 'src/assets/chara4_txt_bg.png',
        profile: '秀尽学园的三年级生。<br>头脑聪慧，品行端正，担任学生会长。<br>冷静而责任感强，很有行动力，但也有死心眼、<br>不会妥协的一面。<br>以某个事件为契机觉醒了人格面具能力，<br>成为怪盗团的一员，是怪盗团中的大脑。<br>初始人格面具是“琼安”。',
        isCharacter1Visible: true,
        styles: {
            charaName: { top: '14%', left: '10%' },
            mask: { top: '8%', left: '45%' },
            personaName: { top: '30%', left: '60%' },
            character: { top: '20%', left: '40%' },
            character1: { top: '20%', left: '32%' }
        }
    },
    {
        charaNameImage: 'src/assets/chara5_name.png',
        maskImage: 'src/assets/Milady.png',
        personaNameImage: 'src/assets/persona5_name.png',
        characterImage: 'src/assets/chara5_costume.png',
        character1Image: 'src/assets/Noir.png',
        changeBtnImage: 'src/assets/change_btn2.png',
        txtBgImage: 'src/assets/chara5_txt_bg.png',
        profile: '秀尽学园的三年级生，大型餐饮制造商社长家的小姐。<br>外貌落落大方，性格稳重文雅，<br>所以平日里能和周围人顺利交流，<br>但因为成长的环境无法在人际关系中感到价值，<br>有些躲避与人深交。<br>这样的她是以什么为契机觉醒人格面具能力的呢……？<br>初始人格面具是“米莱迪”。',
        isCharacter1Visible: true,
        styles: {
            charaName: { top: '14%', left: '10%' },
            mask: { top: '8%', left: '45%' },
            personaName: { top: '30%', left: '64%' },
            character: { top: '20%', left: '42%' },
            character1: { top: '20%', left: '40%' }
        }
    },
    {
        charaNameImage: 'src/assets/chara6_name.png',
        maskImage: 'src/assets/Cendrillon.png',
        personaNameImage: 'src/assets/persona6_name.png',
        characterImage: 'src/assets/chara6_costume.png',
        character1Image: 'src/assets/Violet.png',
        changeBtnImage: 'src/assets/change_btn2.png',
        txtBgImage: 'src/assets/chara6_txt_bg.png',
        profile: '在主角转学的同年春天入学<br>秀尽学园的美少女。<br>初中时是艺术体操选手，<br>留下了优秀的成绩，<br>秀尽学园也对她的未来抱有很大的期待。<br>初始人格面具是“灰姑娘”。',
        isCharacter1Visible: true,
        styles: {
            charaName: { top: '14%', left: '10%' },
            mask: { top: '4%', left: '45%' },
            personaName: { top: '30%', left: '64%' },
            character: { top: '20%', left: '40%' },
            character1: { top: '20%', left: '34%' }
        }
    },
    {
        charaNameImage: 'src/assets/chara7_name.png',
        maskImage: 'src/assets/Zorro.png',
        personaNameImage: 'src/assets/persona7_name.png',
        characterImage: 'src/assets/Mona.png',
        character1Image: '',
        changeBtnImage: '',
        txtBgImage: 'src/assets/chara7_txt_bg.png',
        profile: '主角和龙司在异世界的宫殿遇到的神秘存在，<br>形似黑猫。之后和主角一行一起行动。可以说人话，<br>能变身成各种形状，<br>不过存在本身充满了谜团。嘴上不饶人，<br>但勇于牺牲自己帮助同伴们。<br>口头禅是“不是猫！”<br>初始人格面具是“佐罗”。',
        isCharacter1Visible: true,
        styles: {
            charaName: { top: '14%', left: '10%' },
            mask: { top: '4%', left: '45%' },
            personaName: { top: '30%', left: '60%' },
            character: { top: '26%', left: '38%' },
            character1: {}
        }
    },
    {
        charaNameImage: 'src/assets/chara8_name.png',
        maskImage: 'src/assets/Goemon.png',
        personaNameImage: 'src/assets/persona8_name.png',
        characterImage: 'src/assets/chara8_costume.png',
        character1Image: 'src/assets/Fox.png',
        changeBtnImage: 'src/assets/change_btn2.png',
        txtBgImage: 'src/assets/chara8_txt_bg.png',
        profile: '洸星高中的二年级生，<br>倾心于绘画的美术班特长生。<br>他是个相貌惹人注目的美少年，<br>但因为感性独特，有点无法融入社会。<br>借住在日本画大师斑目画伯家，是他的入门弟子。<br>以某个事件为契机与主角一行相遇，<br>觉醒了人格面具能力。<br>初始人格面具是“五右卫门”。',
        isCharacter1Visible: true,
        styles: {
            charaName: { top: '14%', left: '10%' },
            mask: { top: '4%', left: '42%' },
            personaName: { top: '30%', left: '60%' },
            character: { top: '16%', left: '36%' },
            character1: { top: '16%', left: '34%' }
        }
    },
    {
        charaNameImage: 'src/assets/chara9_name.png',
        maskImage: 'src/assets/Necronomicon.png',
        personaNameImage: 'src/assets/persona9_name.png',
        characterImage: 'src/assets/chara9_costume.png',
        character1Image: 'src/assets/Navi.png',
        changeBtnImage: 'src/assets/change_btn2.png',
        txtBgImage: 'src/assets/chara9_txt_bg.png',
        profile: '比主角小一岁的少女。<br>有超出常人的计算能力和天才般的编程技术，<br>但极不擅长与人交流，<br>再加上曾经被卷入某个事件，<br>现在在家闭门不出。因某个契机与主角一行相遇，<br>觉醒了人格面具能力。<br>初始人格面具是“死灵之书”。',
        isCharacter1Visible: true,
        styles: {
            charaName: { top: '14%', left: '10%' },
            mask: { top: '6%', left: '45%' },
            personaName: { top: '24%', left: '60%' },
            character: { top: '26%', left: '28%' },
            character1: { top: '20%', left: '34%' }
        }
    },
    {
        charaNameImage: 'src/assets/chara10_name.png',
        maskImage: 'src/assets/RobinHood.png',
        personaNameImage: 'src/assets/persona10_name.png',
        characterImage: 'src/assets/akechi.png',
        character1Image: 'src/assets/chara10_costume.png',
        changeBtnImage: 'src/assets/change_btn2.png',
        txtBgImage: 'src/assets/chara10_txt_bg.png',
        profile: '拥有侦探身份的高三少年。<br>此前曾为种种事件找到解决的方向，<br>刑侦机关的工作人员也格外看重他。<br>头脑聪慧，待人温和，再加上出众的相貌，<br>使他成为众人瞩目的焦点人物。<br>屡屡登上媒体节目，还被称作是“侦探王子归来”。<br>虽然处在追查怪盗团的立场，但因某个契机开始和主角一行一同行动。<br>初始人格面具是“罗宾汉”。',
        isCharacter1Visible: true,
        styles: {
            charaName: { top: '14%', left: '10%' },
            mask: { top: '0%', left: '36%' },
            personaName: { top: '34%', left: '66%' },
            character: { top: '20%', left: '36%' },
            character1: { top: '20%', left: '34%' }
        }
    },
]);

const toggleCharacter = (pageIndex) => {
    const page = pages.value[pageIndex];
    if (page) {
        page.isCharacter1Visible = !page.isCharacter1Visible;
        page.changeBtnImage = page.isCharacter1Visible 
            ? 'src/assets/change_btn2.png' 
            : 'src/assets/change_btn1.png';
    }
};

const switchPage = (direction) => {
    const maxPage = pages.value.length;
    currentPage.value = (currentPage.value - 1 + direction + maxPage) % maxPage + 1;
    // console.log("Current Page:", currentPage.value);

    const currentPageIndex = currentPage.value - 1; // 因为 currentPage 从1开始，所以减去1
    const page = pages.value[currentPageIndex];

    if (page) {
        page.isCharacter1Visible = true;
        if(currentPage.value != 7){
            page.changeBtnImage = 'src/assets/change_btn2.png';
        }
    }
};

const switchTo = (index) => {
    if (index >= 0 && index < pages.value.length) {
        currentPage.value = index + 1;
    }

    // 重置按钮图标和角色可见性
    const page = pages.value[index];
    if (page) {
        page.isCharacter1Visible = true; // 默认显示 characterImage
        if(currentPage.value != 7){
            page.changeBtnImage = 'src/assets/change_btn2.png'; // 默认按钮图标
        }
    }
    // console.log(currentPage.value)
};
</script>

<style lang="less" scoped>
.common-layout {
    background-color: black;
}

.image-container {
    position: relative;
    width: 100%;
    height: 1220px;
    background-image: url(../assets/reddot.png);
    background-size: cover;

    .chara-mask {
        position: absolute;
        top: 0; 
        left: 0; 
        width: 100%;
        height: 100%;
    }

    .page-content {
        position: absolute; 
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .chara-title {
        position: absolute;
        top: 20px;
        left: 8%;
        width: 32%;
    }

    .chara-star {
        position: absolute;
        top: 80px;
        left: 36%;
        width: 54%;
    }

    .arrow {
        padding: 0;
        border: 0;
        color: transparent;
        cursor: pointer;
        transition: transform 0.3s ease;
        width: 62px;
        height: 99px;
        z-index: 1;

        &.left {
            position: absolute;
            top: 40%;
            left: 6%;
            background: url(../assets/carousel_arrow_left.png);
        }

        &.right {
            position: absolute;
            top: 40%;
            right: 6%;
            background: url(../assets/carousel_arrow_right.png);
        }
    }

    .character-btn {
        position: relative;
        top: 68%;
        width: 80%;

        img {
            width: 120px;
            margin-left: 48px;
            transition: opacity 0.3s ease;

            &.active, 
            &:hover {
                opacity: 0.5; 
            }
        }

        .character-btn1 {
            position: relative;
            left: 20%;
        }

        .character-btn2 {
            position: absolute;
            top: 80%;
            left: 25%;
        }
    }

    .chara-name, 
    .mask, 
    .persona_name, 
    .character, 
    .character1, 
    .change-btn,
    .chara-txt-bg, 
    .profile {
        position: absolute;
    }

    .change-btn {
        top: 50%;
        left: 60%;

        .btn-img {
            &:hover {
                transform: scale(1.1);
            }
        }
    }

    .chara-txt-bg {
        top: 36%;
        left: 12%;
    }

    .profile {
        color: #fff;
        font-size: 18px;
        line-height: 2;
        top: 38%;
        left: 14%;
    }
}
</style>
