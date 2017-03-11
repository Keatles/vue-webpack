<script>
    export default {
        el: "#app",
        data() {
            return {
                todos:[
                    {text:"Learn JavaScript"},
                    {text:"Learn Vue"},
                    {text:"Build something awesome"}
                ]
            }
        }
    }
</script>
<template>

    <div>
        <ol>
            <li v-for="todo in todos">
                {{todo.text}}
             </li>
        </ol>
    </div>
</template>
<style>
    $darkgreen:#098;
    body {
        background-color: $darkgreen;
    }
</style>
