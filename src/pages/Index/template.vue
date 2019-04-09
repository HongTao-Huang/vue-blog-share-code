<template>
  <div class="index">
    <template v-for="blog in blogs">
      <router-link class="indexBlog-wrapper" :to="`/detail/${blog.id}`">
        <div class="img-wrapper">
          <img :src="blog.user.avatar" :alt="blog.user.username" :title="blog.user.username">
          <span>{{ blog.user.username }}</span>
        </div>
        <h3>{{ blog.title }}<span>{{ blog.createdAt.substr(0,10) }}发布 于{{ friendlyDate( blog.createdAt) }}</span></h3>
        <p>{{ blog.description }}</p>
      </router-link>
    </template>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      class="pagination"
      :current-page.sync="page"
      @current-change="onchangePage"
    >
    </el-pagination>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./template.less"></style>
