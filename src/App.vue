<script setup>
</script>

<template>
  <div>
    <router-link to="/task1"><button>Go to Task 1</button></router-link>
    <router-link to="/task2"><button>Go to Task 2</button></router-link>

    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
button {
  margin: 10px;
  background-color: #007BFF;
  color: white;
  padding: 12px 20px;
  text-align: center;
  font-size: 14px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
}
</style>