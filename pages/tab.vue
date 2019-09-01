<template>
  <div>
    <div style="padding:20px;margin-bottom:20px">
      <span
        v-for="(item,index) in ['剑豪','锤石','盲僧']"
        :key="index"
        @click="hanleClick(index)"
        :class="{color:current===index}"
      >{{item}}</span>
    </div>

    <div v-show="current===0">
      <ul>
        <li>哈塞给</li>
        <li>哈塞给</li>
        <li>哈塞给</li>
      </ul>
    </div>

    <div v-show="current===1">
      <ul>
        <li>锁魂</li>
        <li>锁魂</li>
        <li>锁魂</li>
      </ul>
    </div>

    <div v-show="current===2">
      <ul>
        <li>杀戮</li>
        <li>杀戮</li>
        <li>杀戮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    hanleClick(index) {
      this.current = index;
    }
  }
};
</script>

<style>
span {
  cursor: pointer;
}
.color {
  color: skyblue;
}
</style>