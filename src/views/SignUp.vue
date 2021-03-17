<template>
  <section>
    <form @submit="onSubmit">
      <h1>회원 가입</h1>
      <div>
        <label for="signup_email"></label>
        <input id="signup_email" type="email" v-model="form.email" placeholder="이메일">
      </div>
      <div>
        <label for="signup_password"></label>
        <input id="signup_password" type="password" v-model="form.password" placeholder="비밀번호">
      </div>
      <div>
        <label for="signup_confirm_password"></label>
        <input id="signup_confirm_password" type="password" v-model="form.confirmPassword" placeholder="확인 비밀번호">
      </div> 
      <div>
        <label for="signup_nickname"></label>
        <input id="signup_nickname" type="nickname" v-model="form.nickname" placeholder="닉네임">
      </div>
      <div>
        <label for="signup_address"></label>
        <input id="signup_address" type="address" v-model="form.address" placeholder="주소">
      </div>
      <button type="submit" @click="onSubmit">계정 등록</button>
    </form>
    </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: '',
        nickname: '',
        address: ''
      }
    }
  },
  methods: {
    // 이메일 중복 인증
    // 비밀번호 확인
    // 전화인증

    onSubmit(evt) {
      const sendData = {
        email: this.form.email,
        password: this.form.password,
        nickname: this.form.nickname,
        address: this.form.address
      };

      localStorage.setItem('data', JSON.stringify(sendData));

      /* 서버로 전송 */
      // this.axios.post('//jsonplaceholder.typicode.com/posts', sendData)
      // .then((response) => {
      //   console.log(response.data);
      // }, () => {
      //   console.log('failed');
      // });
    }
  }
}
</script>

<style>

</style>