<template>
    <header :class="{login: isLogin , 'no-login': !isLogin}">
      <template v-if="!isLogin">
        <h1>let's share</h1>
        <p>精品博客汇聚</p>
        <div class="btns">
          <router-link to="/login"><el-button>立即登陆</el-button></router-link>
          <router-link to="/register"><el-button>注册账号</el-button></router-link>
        </div>
      </template>
      <template v-if="isLogin">
        <h1><router-link to="/">let's share</router-link></h1>
        <i class="el-icon-edit edit" @click="toCreate"></i>
        <div class="user">
          <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar">
          <ul>
            <li><router-link to="/my">我的</router-link></li>
            <li><a href="#" @click="onLogout">注销</a></li>
          </ul>
        </div>
      </template>
    </header>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
      }
    },

    computed: {
      ...mapGetters([
        'isLogin',
        'user'
      ])
    },

    created() {
      this.checkLogin();
    },

    methods:{
      ...mapActions([
        'checkLogin',
        'logout'
      ]),
      onLogout() {
        this.logout().then(() => {
          this.$router.push({path: '/'})
        })
      },
      toCreate() {
        this.$router.push({path: '/create'})
      }
    }
  }
</script>

<style scoped lang="less">

  @import "../assets/var.less";
  .el-button {
    font-size: 13px;
    color: #006600;
    padding: 0 8px;
    height: 28px;
    line-height: 28px;
    border-radius: 4px;
    font-weight: normal;
    border: none;
  }
  header.no-login{
    padding-bottom: 30px;
    background-color: @header-bgc;
    display: grid;
    justify-items: center;
    color: #fff;
    h1{
      font-size: 40px;
      margin: 60px 0 0;
      text-transform: uppercase;
    }
    p{
      margin: 15px 0 0;
    }
    .btns {
      margin-top: 20px;
    }
    button{
      margin: 20px 5px 0;
    }
  }
  header.login{
    display: flex;
    align-items: center;
    background-color: @header-bgc;
    color: #fff;
    h1{
      font-size: 40px;
      text-transform: uppercase;
      flex: 1;
    }
    .edit{
      cursor: pointer;
      font-size: 30px;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-left: 15px;
    }
    .user{
      position: relative;
      ul{
        z-index: 999;
        display: none;
        background-color: #fff;
        position: absolute;
        right: 0;
        border: 1px solid #eaeaea;
        a{
          color: #333;
          font-size: 12px;
          display: block;
          padding: 5px 10px;
          &:hover{
            background-color: #eaeaea;
          }
        }
      }

      &:hover ul{
        display: block;
      }
    }
  }
</style>
