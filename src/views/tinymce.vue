<template>
  <div class="components-container">
    <!-- <code>
      {{$t('components.tinymceTips')}}
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/#/rich-editor"> {{$t('components.documentation')}}</a>
    </code> -->
      <el-input v-model="content"></el-input>
    <div>
      <tinymce :height="300" v-model="content" :val="content"></tinymce>
    </div>
    <div class="editor-content" v-html="content"></div>

  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'tinymce-demo',
  components: { Tinymce },
  data() {
    return {
      content:
      `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1>`
    }
  }
}
</script>

<style scoped>
.editor-content{
  margin-top: 20px;
}
</style>


