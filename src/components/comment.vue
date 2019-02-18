<template>
    <div class="cmt-comtent">
        <h2>发表评论</h2>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多BB120个文字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-itme" v-for="(item,index) in commentList" :key="index">
                <div class="cmt-hd">
                    第{{index+1}}楼 &nbsp;&nbsp; 评论人:{{item.user_name}}&nbsp;&nbsp;评论时间:{{item.add_time | dataFormat}}
                </div>
                <div class="cmt-bd">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="gitMore">加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {

    data(){
        return {
            pageindex:1,
            commentList:[],
            msg:''
        }
    },
    created(){
        this.gitCommentInfor()
    },
    methods:{
        gitCommentInfor(){
            this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageindex}`).then(result=>{
               this.commentList=this.commentList.concat(result.body.message)
            })
        },
        gitMore(){
            this.pageindex++
            this.gitCommentInfor()
        },
        postComment(){
            if(this.msg.trim().length===0) return Toast('请输入评论内容')
            this.$http.post(`api/postcomment/${this.id}`,{content:this.msg}).then(result=>{
                // this.commentList=[]
                // this.pageindex=1
                // this.gitCommentInfor()
                // this.msg=''
                var  cmt={
                    user_name:'匿名用户',
                    add_time:new Date(),
                    content:this.msg.trim()
                }
                this.commentList.unshift(cmt)
                this.msg=''
            })
            
            
        }
        
    },
    props:['id']
}
</script>
<style lang="less" scoped>
.cmt-comtent {
    h2 {
        font-size: 16px;
    }
    textarea {
        font-size: 12px;
        height: 85px;
        margin: 0;
    }
    .cmt-list {
        margin: 5px 0;
        .cmt-itme {
            font-size: 14px;
            .cmt-hd{
                background-color: #ccc;
                font-size: 12px;
                line-height: 30px;
            }
            .cmt-bd { 
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>


