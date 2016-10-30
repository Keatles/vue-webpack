<script>
    export default {
        el: "#app",
        data() {
            return {
                name: "mike",
                age: "25"
            }
        }
    }
</script>
<template>
    <div>
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
    </div>
</template>
<style>
    $darkgreen:#098;
    body {
        background-color: $darkgreen;
        h1{
            background-color: #eee;
            color: red;
            transform: translate(10%, 10%);  //测试自动添加前缀
			width:300px;
        }

        h1:hover {
            height: 100px;
        }

        h2 {
            background-color: #999;
			width:300px;
        }
    }
</style>
