import blog from '@/api/blog'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      blogs:[],
      page:1,
      total:0,
      userId:'',
      month:['', '一' , '二' , '三' , '四' , '五' , '六' , '七' , '八' , '九' , '十' , '十一' , '十二']
    }
  },
  created(){
    this.userId = this.user.id;
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.userId, {page: this.page})
      .then(res => {
        this.blogs = res.data;
        this.page = res.page;
        this.total = res.total;
        res.data.length > 0 ? this.user = res.data[0].user : '';
      })
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods:{
    onchangePage(newPage){
      blog.getBlogsByUserId(this.userId, {page: newPage})
        .then(res => {
          console.log(res.data)
          this.blogs = res.data;
          this.page = res.page;
          this.total = res.total;
          this.$router.push({ path: `/my`,query: {page: newPage }})
        })
    },
    async onDelete(blogId){
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await  blog.deleteBlog({ blogId });
      this.$message.success('删除成功!');
      this.blogs = this.blogs.filter((blog) => blog.id != blogId);
    }
  }
}
