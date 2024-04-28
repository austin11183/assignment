<template>
  <div class="outer-frame" :style="{ width: isExpanded ? '800px' : '400px' }">
    <div class="editor-container">
      <Editor v-model="text" :readonly="!isEditable" />
    </div>
    <div class="buttons-container">
      <Button @click="toggleEdit" class="button">{{ isEditable ? 'Save' : 'Edit' }}</Button>
      <Button @click="toggleSize" class="button">Resize</Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Editor from 'primevue/editor';

const text = ref('Editable text');
const isEditable = ref(false);
const isExpanded = ref(false);

const toggleEdit = () => {
  isEditable.value = !isEditable.value;
};

const toggleSize = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
.outer-frame {
  border: 1px solid red;
  padding: 20px;
  box-sizing: border-box;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}

.editor-container {
  flex: 1;
  margin-right: 20px;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.button {
  margin-bottom: 20px;
  width: 100px;
}

@media (max-width: 400px) {
  .outer-frame {
    flex-direction: column;
    align-items: flex-start;
  }

  .buttons-container {
    margin-top: 20px;
    align-items: flex-start;
  }
}
</style>