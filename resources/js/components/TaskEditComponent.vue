<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form>
                    <div class="form-group row mb-2">
                        <label for="id" class="col-sm-3 col-form-label">ID</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control-plaintext" readonly id="id" v-bind:value="taskId">
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label for="title" class="col-sm-3 col-form-label">Title</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="title">
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label for="content" class="col-sm-3 col-form-label">Content</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="content">
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label for="person-in-charge" class="col-sm-3 col-form-label">Person In Charge</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="person-in-charge">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            taskId: String
        }
    }
</script>