<template>
<section class="container">
  <div>
    <!-- クラシックモード -->

    <!-- <p>{{ $store.state.message }}</p> -->
    <!-- commitメソッドはミューテートを呼び出すメソッド -->
    <!-- <button v-on:click="$store.commit('updateMessage')">update</button> -->
    <!-- commitメソッドの第2引数に値を渡せる -->
    <!-- <button v-on:click="$store.commit('updateMessage', 'Commit with payload')">update</button> -->

    <!-- dispatchはテンプレートからストアのアクションを呼ぶメソッド -->
    <!-- <button v-on:click="$store.dispatch('updateMessageAction')">Dispatch</button> -->
     <!-- dispatchメソッドの第2引数に値を渡せる -->
    <!-- <button v-on:click="$store.dispatch('updateMessageAction', 'Dispatch with payload')">Dispatch</button> -->


    <!-- モジュールモード -->
    <p>{{ $store.state.hello.message }}</p>
    <button v-on:click="$store.dispatch('hello/updateMessageAction', 'Dispatch with payload')">Dispatch</button>
    </div>
</section>
</template>

<script>
export default {}
</script>
