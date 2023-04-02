<script>
import axios from "axios";

export default {
  props: {
    image: String,
    title: String,
    likes: Number,
    id: [String, Number],
  },
  data() {
    return {
      localLikes: this.likes,
      wasLiked: false,
    }
  },
  methods: {
    handleLike() {
      if (!this.wasLiked) {
        this.localLikes += 1;
        this.wasLiked = true;
        this.sendLike();
      } else {
        this.localLikes -= 1;
        this.wasLiked = false;
        this.sendUnlike();
      }
    },

    sendLike() {
      axios.get(`http://80.90.190.25:5243/api/article/${this.id}/like`);
    },

    sendUnlike() {
      axios.get(`http://80.90.190.25:5243/api/article/${this.id}/unlike`);
    },
  },
}
</script>

<template>
  <div @click="$router.push(`/article/${id}`)" class="ac-card"
       :style="`background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.75) 100%), url(${image})`">
    <h5 class="ac-title">
      {{ title }}
    </h5>
    <span class="ac-likes" @click.stop="handleLike">
      {{ localLikes }}
      <svg class="ac-icon" :class="{'ac-icon-active': wasLiked}" width="22" height="22" viewBox="0 0 512 512"><path
          d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"
          fill="currentColor"/></svg>
    </span>
  </div>
</template>

<style scoped>
.ac-card {
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  min-height: 200px;
  align-items: flex-end;
  background-size: cover !important;
  cursor: pointer;
}

.ac-title {
  margin-bottom: 0;
  font-size: 16px;
}

.ac-likes {
  white-space: nowrap;
  font-size: 16px;
  display: flex;
  margin-left: 10px;
}

.ac-icon {
  margin-left: 5px;
}

.ac-icon-active {
  color: #c81414;
}
</style>