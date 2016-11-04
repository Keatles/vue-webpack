<script>
    import hello from "./hello.vue"
    export default {
        data () {
            return {
                name:"mike",
                age:"25"
            }
        },

        methods :{
            golist (){
                this.$route.router.go({name:"list"});
            }
        },
        components:{
            hello
        }


    }
</script>

<template>
<div>
	<div class="info">
		<h2>姓名：{{name}}</h1>
		<h2>{{age}}</h2>
	</div>
	<div class="btn">
		<button @click="golist">$route.router.go方法查看</button>
	</div>
	<div class="router">
		<a v-link="{ name: 'list' }">v-link查看列表</a>
		<a v-link="{ name: 'index' }">回去主页</a>
		<a v-link="{ name: 'hello' }">嵌套的路由</a>
	</div>
    <hello></hello>
    <router-view></router-view>

</div>
</template>

<style lang="sass">
    
    body{
        background-color: #ffffff;
        color:red;
    }
	.info{
		background-color:#000;
		width:60%;
		margin:0 auto;
	}
	.btn{
		margin:0 auto;
		width:60%;
		text-align:center;
	}
	.router{
		margin:20px auto;
		width:60%;
		a{
			font-size:24px;
			color:black;
		}
	}
	.hello{
		width:60%;
		margin:0 auto;
	}
    
</style>
