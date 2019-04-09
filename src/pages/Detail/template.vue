<template>
  <div class="detail">
    <div class="title">
      <img :src="user.avatar" :alt="user.username" :title="user.username">
      <h3>{{ title }}</h3>
      <div class="autho">
        <span class="user"><router-link :to="`/user/${user.id}`">{{ user.username }}</router-link></span>
        <span>{{ createdAt.substr(0,10)  }}发布 于{{ friendlyDate(createdAt) }}</span>
      </div>
    </div>
    <hr>
    <div class="markdown" v-html="markdown"></div>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" src="./template.less"></style>
