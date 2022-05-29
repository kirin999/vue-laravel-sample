<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form v-on:submit.prevent="submit">
                    <div class="form-group row mb-2">
                        <label for="id" class="col-sm-3 col-form-label">ID</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control-plaintext" readonly id="id" v-model="taskId">
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label for="title" class="col-sm-3 col-form-label">Title</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="title" v-model="task.title">
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label for="content" class="col-sm-3 col-form-label">Content</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="content" v-model="task.content">
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label for="person-in-charge" class="col-sm-3 col-form-label">Person In Charge</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="person-in-charge" v-model="task.person_in_charge">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        props: {
            taskId: String
        },
        data: function () {
            return {
                task: {}
            }
        },
        methods: {
            getTask() {
                axios.get('/api/tasks/' + this.taskId)
                    .then((res) => {
                        this.task = res.data;
                    });
            },
            submit() {
                axios.put('/api/tasks/' + this.taskId, this.task)
                    .then((res) => {
                        this.$router.push({name: 'task.list'})
                    });
            }
        },
        mounted() {
            this.getTask();
        }
    }
</script>