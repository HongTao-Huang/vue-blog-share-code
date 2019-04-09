<template>
  <div class="my">
    <div class="title">
      <img :src="user.avatar" :alt="user.username" :title="user.username">
      <h3>{{ user.username }}</h3>
    </div>
    <hr>
    <template v-for="blog in blogs">
      <router-link class="indexBlog-wrapper" :to="`/detail/${blog.id}`">
        <div class="day">
          <span class="day">{{ blog.createdAt.substr(8,2)}}</span>
        </div>
        <div class="year-month">
          <span class="month">{{ month[parseInt(blog.createdAt.substr(5,2))] }}月</span>
          <span class="year">{{ blog.createdAt.substr(0,4)}}</span>
        </div>
        <h3>{{ blog.title }}<span>{{ blog.createdAt.substr(0,10) }}发布 于{{ friendlyDate(blog.createdAt) }}</span></h3>
        <p>{{ blog.description }}</p>
      </router-link>
      <div class="actions">
        <router-link :to="`/edit/${blog.id}`">编辑</router-link>
        <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
      </div>
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
