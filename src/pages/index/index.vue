<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <custom-button type="primary" @click="handleClick">Primary Button</custom-button>
    <custom-button type="default" size="mini" plain>Default Mini Plain</custom-button>
    <custom-button type="warn" disabled>Warn Disabled</custom-button>

    <view class="input-container">
      <custom-input v-model="inputValue" placeholder="Enter something..."></custom-input>
      <text>You entered: {{ inputValue }}</text>
    </view>
  </view>
</template>

<script>
import CustomButton from '@/components/button.vue';
import CustomInput from '@/components/input.vue';

export default {
  components: {
    CustomButton,
    CustomInput,
  },
  data() {
    return {
      title: 'Hello',
      inputValue: '',
    };
  },
  onLoad() {},
  methods: {
    handleClick() {
      console.log('Button clicked!');
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.input-container {
  margin-top: 20px;
  width: 80%;
}
</style>
