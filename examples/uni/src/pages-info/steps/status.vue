<script setup lang="ts">
</script>

<template>
  <view class="page">
    <view class="demo-section">
      <view class="demo-title">
        等待状态
      </view>
      <view class="demo-desc">
        步骤处于等待状态
      </view>

      <SkSteps :active="0">
        <SkStep title="步骤一" />
        <SkStep title="步骤二" />
        <SkStep title="步骤三" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        进行中状态
      </view>
      <view class="demo-desc">
        当前步骤处于进行中
      </view>

      <SkSteps :active="1">
        <SkStep title="步骤一" />
        <SkStep title="步骤二" />
        <SkStep title="步骤三" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        完成状态
      </view>
      <view class="demo-desc">
        步骤已完成
      </view>

      <SkSteps :active="3">
        <SkStep title="步骤一" />
        <SkStep title="步骤二" />
        <SkStep title="步骤三" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        错误状态
      </view>
      <view class="demo-desc">
        步骤执行出错
      </view>

      <SkSteps :active="1">
        <SkStep title="步骤一" status="finish" />
        <SkStep title="步骤二" status="error" />
        <SkStep title="步骤三" status="wait" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        混合状态
      </view>
      <view class="demo-desc">
        不同步骤展示不同状态
      </view>

      <SkSteps :active="2">
        <SkStep title="订单创建" status="finish" description="2024-01-01 10:00" />
        <SkStep title="订单支付" status="finish" description="2024-01-01 10:05" />
        <SkStep title="商品发货" status="process" description="正在处理中..." />
        <SkStep title="确认收货" status="wait" description="等待发货" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        纵向状态展示
      </view>
      <view class="demo-desc">
        纵向布局展示不同状态
      </view>

      <SkSteps :active="2" direction="vertical">
        <SkStep title="用户注册" status="finish" description="账号注册成功" />
        <SkStep title="实名认证" status="finish" description="身份验证通过" />
        <SkStep title="绑定银行卡" status="error" description="银行卡验证失败，请重新绑定" />
        <SkStep title="开始使用" status="wait" description="完成所有步骤后即可使用" />
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
</style>
