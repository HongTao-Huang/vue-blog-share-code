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
      'register',
    ]),
    clearMessage(){
      this.userError = false;
      this.passwordError = false;
    }
    ,
    onRegister(){
      if( this.username === ''){
        this.userError = true;
        this.usernameMessage = '用户名不能为空';
      }
      if( this.password === ''){
        this.passwordError = true;
        this.passwordMessage = '密码不能为空';
      }

      this.register({username: this.username , password: this.password})
        .then(() => {
          this.$router.push({path: '/'})
        })
    }
  }
}
