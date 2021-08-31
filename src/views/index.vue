// 検索・表示用
<template>
  <div>
    <div v-for="(comment, index) in lessons" v-bind:key="index" class="">
      <div v-if="todo.isDone" class="todo__text todo__text--done">
        {{ index }}:{{ lessons.text }}
      </div>
      <div v-else class="lesson__text">{{ index }}:{{ lessons.text }}</div>
      <div v-on:click="DeleteComment(index)" class="comment__delete">削除</div>
    </div>
  </div>
</template>
