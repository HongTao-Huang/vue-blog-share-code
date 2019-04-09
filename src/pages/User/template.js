import blog from '@/api/blog'

export default {
  data () {
    return {
      blogs:[],
      user:{},
      page:1,
      total:0,
      userId:'',
      month:['', '一' , '二' , '三' , '四' , '五' , '六' , '七' , '八' , '九' , '十' , '十一' , '十二']
    }
  },
  created(){
    this.userId = this.$route.params.userId;
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.userId, {page: this.page})
      .then(res => {
        this.blogs = res.data;
        this.page = res.page;
        this.total = res.total;
        res.data.length > 0 ? this.user = res.data[0].user : '';
      })
  },
  methods:{
    onchangePage(newPage){
      blog.getBlogsByUserId(this.userId, {page: newPage})
        .then(res => {
          this.blogs = res.data;
          this.page = res.page;
          this.total = res.total;
          res.data.length > 0 ? this.user = res.data[0].user : '';
          this.$router.push({ path: `/user/${this.userId}`,query: {page: newPage }})
        })
    }
  }
}
