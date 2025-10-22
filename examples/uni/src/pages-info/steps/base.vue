<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)

function next() {
  if (active.value < 3) {
    active.value++
  }
}

function prev() {
  if (active.value > 0) {
    active.value--
  }
}
</script>

<template>
  <view class="page">
    <view class="demo-section">
      <view class="demo-title">
        基础用法
      </view>
      <view class="demo-desc">
        默认横向步骤条，通过 v-model:active 控制当前步骤
      </view>

      <SkSteps v-model:active="active">
        <SkStep title="步骤一" />
        <SkStep title="步骤二" />
        <SkStep title="步骤三" />
        <SkStep title="步骤四" />
      </SkSteps>

      <view class="demo-actions">
        <SkButton size="small" @click="prev">
          上一步
        </SkButton>
        <SkButton type="primary" size="small" @click="next">
          下一步
        </SkButton>
      </view>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        带描述的步骤条
      </view>
      <view class="demo-desc">
        为步骤添加描述信息
      </view>

      <SkSteps :active="1">
        <SkStep title="已完成" description="这是步骤的描述信息" />
        <SkStep title="进行中" description="这是步骤的描述信息" />
        <SkStep title="待进行" description="这是步骤的描述信息" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        自定义状态
      </view>
      <view class="demo-desc">
        可以通过 status 属性覆盖步骤状态
      </view>

      <SkSteps :active="1">
        <SkStep title="步骤一" status="finish" />
        <SkStep title="步骤二" status="error" />
        <SkStep title="步骤三" status="wait" />
      </SkSteps>
    </view>
  </view>
</template>

<style scoped>
.page {
  padding: 32rpx;
  background: #f5f5f5;
  min-height: 100vh;
}

.demo-section {
  margin-bottom: 32rpx;
  padding: 32rpx;
  background: #fff;
  border-radius: 16rpx;
}

.demo-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  margin-bottom: 16rpx;
}

.demo-desc {
  font-size: 28rpx;
  color: #666;
  margin-bottom: 32rpx;
}

.demo-actions {
  display: flex;
  gap: 16rpx;
  margin-top: 32rpx;
  justify-content: center;
}
</style>
