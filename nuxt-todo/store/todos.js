import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
// import { _ } from 'core-js'

// データベース設定
const db = firebase.firestore()
const todosRef = db.collection('todos')

export const state = () => ({
  todos: []
})

export const actions = {
  // 初期化
  // firestoreActionの第1引数はコンテキスト
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('todos', todosRef)
  }),
  // 追加
  // 第1引数にtodoの名前
  add: firestoreAction((context, name) => {
    // 入力値が空白でないか確認
    if(name.trim()) {
      todosRef.add({
        name: name,
        done: false,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  // 削除
  remove: firestoreAction((context, id) => {
    todosRef.doc(id).delete()
  }),
  // todoの完了未完了の確認
  toggle: firestoreAction((context, todo) => {
    todosRef.doc(todo.id).update({
      done: !todo.done
    })
  })
}

export const getters = {
  orderdTodos: state => {
    return _.sortBy(state.todos, 'created')
  }
}

