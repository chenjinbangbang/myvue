<template>
    <div class="editor">
        <!-- <quill-editor ref="myTextEditor"
                      v-model="content"
                      :config="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)"
                      @change="onEditorChange($event)">
        </quill-editor>
        <div v-html='content'></div> -->
    </div>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor'
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    export default {
        name: 'editor',
        components: {quillEditor},
        data(){
            return {
                content: '<h2>I am Example</h2>',
                editorOption: {}
            };
        },
        methods: {
            onEditorBlur(editor) {
                //console.log('editor blur!', editor)
            },
            onEditorFocus(editor) {
                //console.log('editor focus!', editor)
            },
            onEditorReady(editor) {
                //console.log('editor ready!', editor)
            },
            onEditorChange({ editor, html, text }) { //富文本内容改变时触发
                // console.log('editor change!', editor, html, text)
                this.content = html;
            }
        }
    }
</script>
