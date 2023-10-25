<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item>
        <el-icon :size="20" class="svg-container">
          <Edit />
        </el-icon>
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item>
        <el-icon :size="20" class="svg-container">
          <Edit />
        </el-icon>
        <el-input v-model="form.password"></el-input>
      </el-form-item>

      <el-button type="primary" class="login-button" @click="handleLogin">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Edit } from '@element-plus/icons-vue'
const form = reactive({
  username: '',
  password: ''
})

const handleLogin = () => {}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: center;

  .login-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    position: relative;
    width: 520px;

    :deep(.el-form-item__content) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      display: flex;
      flex-wrap: nowrap;

      .el-input__wrapper {
        height: 47px;
        flex: 1;
        background: transparent;
        // el-input的边框默认是通过box-shadow来设置的
        box-shadow: 0 0 0 0px
          var(--el-input-border-color, var(--el-border-color)) inset;
        // -webkit-appearance: none;
        padding: 12px 5px 12px 15px;

        .el-input__inner {
          color: $light_gray;
          caret-color: $cursor;
        }
      }
    }

    .login-button {
      width: 100%;
      box-sizing: border-box;
    }
  }

  // .tips {
  //   font-size: 16px;
  //   line-height: 28px;
  //   color: #fff;
  //   margin-bottom: 10px;

  //   span {
  //     &:first-of-type {
  //       margin-right: 16px;
  //     }
  //   }
  // }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    // display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    // :deep(.lang-select) {
    //   position: absolute;
    //   top: 4px;
    //   right: 0;
    //   background-color: white;
    //   font-size: 22px;
    //   padding: 4px;
    //   border-radius: 4px;
    //   cursor: pointer;
    // }
  }

  // .show-pwd {
  //   // position: absolute;
  //   // right: 10px;
  //   // top: 7px;
  //   font-size: 16px;
  //   color: $dark_gray;
  //   cursor: pointer;
  //   user-select: none;
  // }
}
</style>
