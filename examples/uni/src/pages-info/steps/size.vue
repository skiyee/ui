<script setup lang="ts">
</script>

<template>
  <view class="page">
    <view class="demo-section">
      <view class="demo-title">
        小尺寸
      </view>
      <view class="demo-desc">
        size="small" 小尺寸步骤条
      </view>

      <SkSteps :active="1" size="small">
        <SkStep title="步骤一" />
        <SkStep title="步骤二" />
        <SkStep title="步骤三" />
        <SkStep title="步骤四" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        中等尺寸（默认）
      </view>
      <view class="demo-desc">
        size="medium" 中等尺寸步骤条
      </view>

      <SkSteps :active="1" size="medium">
        <SkStep title="步骤一" />
        <SkStep title="步骤二" />
        <SkStep title="步骤三" />
        <SkStep title="步骤四" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        大尺寸
      </view>
      <view class="demo-desc">
        size="large" 大尺寸步骤条
      </view>

      <SkSteps :active="1" size="large">
        <SkStep title="步骤一" />
        <SkStep title="步骤二" />
        <SkStep title="步骤三" />
        <SkStep title="步骤四" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        纵向小尺寸
      </view>
      <view class="demo-desc">
        纵向布局的小尺寸步骤条
      </view>

      <SkSteps :active="2" direction="vertical" size="small">
        <SkStep title="步骤一" description="这是步骤的描述" />
        <SkStep title="步骤二" description="这是步骤的描述" />
        <SkStep title="步骤三" description="这是步骤的描述" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        纵向中等尺寸
      </view>
      <view class="demo-desc">
        纵向布局的中等尺寸步骤条
      </view>

      <SkSteps :active="2" direction="vertical" size="medium">
        <SkStep title="步骤一" description="这是步骤的描述" />
        <SkStep title="步骤二" description="这是步骤的描述" />
        <SkStep title="步骤三" description="这是步骤的描述" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        纵向大尺寸
      </view>
      <view class="demo-desc">
        纵向布局的大尺寸步骤条
      </view>

      <SkSteps :active="2" direction="vertical" size="large">
        <SkStep title="步骤一" description="这是步骤的描述" />
        <SkStep title="步骤二" description="这是步骤的描述" />
        <SkStep title="步骤三" description="这是步骤的描述" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        不同尺寸对比
      </view>
      <view class="demo-desc">
        带图标和描述的不同尺寸对比
      </view>

      <view class="size-compare">
        <view class="size-item">
          <view class="size-label">
            小
          </view>
          <SkSteps :active="1" size="small">
            <SkStep title="步骤一" icon="i-lucide:check" />
            <SkStep title="步骤二" icon="i-lucide:loader" />
            <SkStep title="步骤三" icon="i-lucide:circle" />
          </SkSteps>
        </view>

        <view class="size-item">
          <view class="size-label">
            中
          </view>
          <SkSteps :active="1" size="medium">
            <SkStep title="步骤一" icon="i-lucide:check" />
            <SkStep title="步骤二" icon="i-lucide:loader" />
            <SkStep title="步骤三" icon="i-lucide:circle" />
          </SkSteps>
        </view>

        <view class="size-item">
          <view class="size-label">
            大
          </view>
          <SkSteps :active="1" size="large">
            <SkStep title="步骤一" icon="i-lucide:check" />
            <SkStep title="步骤二" icon="i-lucide:loader" />
            <SkStep title="步骤三" icon="i-lucide:circle" />
          </SkSteps>
        </view>
      </view>
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

.size-compare {
  display: flex;
  flex-direction: column;
  gap: 32rpx;
}

.size-item {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.size-label {
  font-size: 28rpx;
  color: #999;
  font-weight: 500;
}
</style>
