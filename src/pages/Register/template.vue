<template>
  <div class="register">
    <h4>用户名</h4>

    <el-input v-model="username" placeholder="用户名" clearable @change="clearMessage"></el-input>
    <div class="p"><p class="error" v-if="userError">{{ usernameMessage }}</p></div>
    <h4>密码</h4>
    <el-input v-model="password" type="password" placeholder="密码" clearable @keyup.enter.native="onRegister"></el-input>
    <div class="p"><p class="error" v-if="passwordError">{{ passwordMessage }}</p></div>
    <el-button size="medium" @click="onRegister">立即注册</el-button>
    <p class="notice">已有账号？<router-link to="/login">直接登录</router-link></p>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped src="./template.less"></style>
