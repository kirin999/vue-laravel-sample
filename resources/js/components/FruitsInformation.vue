<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">フルーツの説明</div>

                    <div class="card-body">
                        <p v-if="fruits === 'りんご'">
                            りんご：赤い果物
                        </p>
                        <div v-else-if="fruits === 'バナナ'">
                            バナナ：黄色い果物
                        </div>
                        <div v-else>
                            まだ登録されていません
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            param_fruits: String
        },
        data: function () {
            return {
                fruits: ""
            }
        },
        mounted() {
            this.fruits = this.param_fruits
        }
        
    }
</script>
