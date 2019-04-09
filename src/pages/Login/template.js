import { mapActions } from 'vuex'
export default {
  data () {
    return {
      'userError': false,
      'passwordError': false,
      'usernameMessage':'',
      'passwordMessage':'',
      'username':'',
      'password':''
    }
  },

  methods: {
    ...mapActions([
      'login',
    ]),
    clearMessage(){
      if(!this.userError)return
      this.userError = false;
      this.passwordError = false;
    }
    ,
    onLogin(){
      if( this.username === ''){
        this.userError = true;
        this.usernameMessage = '用户名不能为空';
      }
      if( this.password === ''){
        this.passwordError = true;
        this.passwordMessage = '密码不能为空';
      }

      this.login({username: this.username , password: this.password})
        .then(() => {
          this.$router.push({path: this.$route.query.redirect || '/'})
        })
    }
  }
}
