<template>
    <div class="container">
        {{ fruits }}
        <button class="btn btn-danger" v-on:click="changeFruits()">ランダムにフルーツを変更する</button>
        <router-link v-bind:to="{name: 'fruits.information',params: {param_fruits: fruits}}">
            <button class="btn btn-primary">フルーツ紹介ページ</button>
        </router-link>
        <!-- <table class="table table-hover">
            <thead class="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Person In Charge</th>
                <th scope="col">Show</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <th scope="row">{{ task.id }}</th>
                    <td>{{ task.title }}</td>
                    <td>{{ task.content }}</td>
                    <td>{{ task.person_in_charge }}</td>
                    <td>
                        <router-link v-bind:to="{name: 'task.show', params: {taskId: task.id}}">
                        <button class="btn btn-primary">Show</button>
                        </router-link>
                    </td>
                    <td>
                        <router-link v-bind:to="{name: 'task.edit', params: {taskId: task.id}}">
                            <button class="btn btn-success">Edit</button>
                        </router-link>
                    </td>
                    <td>
                        <button class="btn btn-danger" v-on:click="deleteTask(task.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table> -->
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data: function () {
            return {
                tasks: [],
                fruits: "",
                fruits_message: "ランダムでフルーツが出るよ"
            }
        },
        methods: {
            getTasks() {
                axios.get('/api/tasks')
                    .then((res) => {
                        console.log(res.data);
                        this.fruits = res.data;
                    });
            },
            deleteTask(id) {
                axios.delete('/api/tasks/' + id)
                    .then((res) => {
                        this.getTasks();
                    })
            },
            changeFruits(){
                axios.get('/api/fruits')
                    .then((res) => {
                        this.fruits = res.data;
                    })
            }
        },
        mounted() {
            this.getTasks();
        }
    }
</script>
