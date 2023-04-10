<template>
  <div class="my-todo">

    <div class="title has-text-centered">
      My Todo List
    </div>

    <form
      @submit.prevent="addTodo"
    >
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input
            v-model="newTodoText"
            class="input"
            type="text"
            placeholder="Add Todo"
          >
        </p>
        <p class="control">
          <button
            :disabled="!newTodoText"
            class="button is-info"
          >
            Add
          </button>
        </p>
      </div>
    </form>

    <div
      v-for="todo in todoList"
      :key="todo.id"
      class="card mb-5"
      :class="{ 'has-background-success-light': todo.done }"
    >
      <div class="card-content">
        <div class="content">

          <div class="columns is-mobile is-vcentered">
            <div
              class="column"
              :class="{ 'has-text-success line-through' : todo.done }"
            >
              {{ todo.text }}
            </div>
            <div class="column is-5 has-text-right">
              <button
                @click="markAsDone(todo.id)"
                class="button"
                :class="todo.done ? 'is-success' : 'is-light'"
              >
                &check;
              </button>
              <button
                @click="deleteTodo(todo.id)"
                class="button is-danger ml-2"
              >
                  &cross;
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// IMPORTS
import { ref, onMounted } from'vue'
import { 
  collection, onSnapshot, 
  doc, addDoc, deleteDoc, updateDoc, 
  query, orderBy, limit
} from "firebase/firestore"
import { db } from '@/firebase'

//FIREBASE REFS
const todosCollectionRef = collection(db, "todos")
const todosCollectionQuery = query(todosCollectionRef, orderBy("date", "desc"))

// MY TODO LIST ARRAY
const todoList = ref([
  // {
  //   id: 'id1',
  //   text: 'Cook Pasta for lunch',
  //   done: false
  // }
])

//GET TODO ITEMS FROM BACKEND
onMounted(() => {
  onSnapshot(todosCollectionQuery, (querySnapshot) => {
    const fbTodos = []
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        text: doc.data().text,
        done: doc.data().done
      }
      fbTodos.push(todo)
    })
    todoList.value = fbTodos
  })

})

// ADD A NEW TODO ITEM
const  newTodoText = ref('')

const addTodo = () => {
  addDoc(todosCollectionRef, {
    text: newTodoText.value,
    done: false,
    date: Date.now()
  })
  newTodoText.value = ''
}

//DELETE A TODO ITEM
const deleteTodo = (id) => {
  deleteDoc(doc(todosCollectionRef, id))
}

//MARK OR UNMARK A TODO ITEM AS DONE 
const markAsDone = (id) => {
  const index = todoList.value.findIndex(todo => todo.id === id)
  updateDoc(doc(todosCollectionRef, id), {
    done: !todoList.value[index].done
  })
}
</script>

<style>
@import 'bulma/css/bulma.min.css';

.my-todo {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.line-through {
  text-decoration: line-through;
}
</style>