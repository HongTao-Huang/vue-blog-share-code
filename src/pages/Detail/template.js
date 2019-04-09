import blog from '@/api/blog'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

export default {
  data() {
    return {
      title:'',
      rawContent:'',
      user:{},
      createdAt:'',
      blogId: 1
    }
  },
  created(){
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      escaped : true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code, lang) {
        return hljs.highlightAuto(code).value;
      }
    });

    this.blogId = this.$route.params.blogId;
    blog.getDetail({ blogId: this.blogId})
      .then( res => {
        this.title = res.data.title;
        this.rawContent = res.data.content;
        this.user = res.data.user;
        this.createdAt = res.data.createdAt;
      })
  },
  computed:{
    markdown(){
      return marked(this.rawContent);
    }
  }
}
