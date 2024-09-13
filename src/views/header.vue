<template>
    <div class="common-layout" style="min-width: 1460px;">
        <el-header style="padding: 0;">
            <nav class="navbar">
                <div class="navbar-text">
                <div class="logo">
                    <img src="../assets/logo/phantom.png" alt="Logo" class="logo">
                </div>
                <ul class="nav-links">
                    <div class="left-items">
                        <li>
                        <router-link to="/home" class="nav-item" :class="{ 'is-active': isActive('/home') }">
                            首页
                        </router-link>
                        </li>
                        <li>
                        <router-link to="/roles" class="nav-item" :class="{ 'is-active': isActive('/roles') }">
                            角色
                        </router-link>
                        </li>
                        <li>
                        <router-link to="/gallery" class="nav-item" :class="{ 'is-active': isActive('/gallery') }">
                            画廊
                        </router-link>
                        </li>
                        <li>
                        <router-link to="/community" class="nav-item" :class="{ 'is-active': isActive('/community') }">
                            社区
                        </router-link>
                        </li>
                    </div>
                    <div class="right-items">
                        <li>
                        <router-link to="/community" class="nav-item">
                            登录
                        </router-link>
                        </li>
                        <li>
                        <router-link to="/community" class="nav-item">
                            注册
                        </router-link>
                        </li>
                    </div>
                </ul>
                </div>
            </nav>
        </el-header>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  // 使用 useRoute 钩子获取当前路由
    const route = useRoute();

    // 计算属性来判断当前激活的路由
    const isActive = (path) => {
        return route && route.path === path;
    };
  </script>
  
  <style lang="less" scoped>
  .navbar {
    background-image: url(../assets/header.png);
    height: 60px;
    width: 100%;
    display: flex; /* 启用 Flexbox 布局 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */

    .navbar-text{
        width: 80%;
        display: flex;
        justify-content: space-between; /* 分开左侧和右侧内容 */
        align-items: center; /* 垂直居中 */
    }
    
    .logo {
        height: 50px;
    }
    
    .nav-links {
        display: flex;
        justify-content: space-between; /* 将内部元素分开 */
        flex-grow: 1; /* 使链接部分占据剩余空间 */
    }

    .left-items {
        display: flex;
        gap: 40px; /* 链接之间的间隔 */
    }

    .right-items {
        display: flex;
        gap: 40px;
    }
    
    .nav-item {
        color: grey;
        font-weight: bold; /* 文字加粗 */
    }
    
    /* 当链接处于激活状态时 */
    .nav-item.is-active {
        color: white;
    }
    
    /* 添加对 .nav-item 的 hover 效果 */
    .nav-item:hover {
        color: white;
        cursor: pointer;
    }
  }

  </style>
  