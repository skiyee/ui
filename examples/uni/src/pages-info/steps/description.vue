<script setup lang="ts">
import { ref } from 'vue'

const active = ref(1)
</script>

<template>
  <view class="page">
    <view class="demo-section">
      <view class="demo-title">
        带描述的步骤条
      </view>
      <view class="demo-desc">
        为每个步骤添加详细描述信息
      </view>

      <SkSteps v-model:active="active">
        <SkStep
          title="填写信息"
          description="请填写您的个人信息"
        />
        <SkStep
          title="上传资料"
          description="上传身份证照片等资料"
        />
        <SkStep
          title="审核"
          description="等待平台审核"
        />
        <SkStep
          title="完成"
          description="审核通过，开始使用"
        />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        纵向带描述
      </view>
      <view class="demo-desc">
        纵向布局下的描述信息展示
      </view>

      <SkSteps :active="2" direction="vertical">
        <SkStep
          title="订单创建"
          description="您的订单已创建成功，订单号: 202401010001"
        />
        <SkStep
          title="支付完成"
          description="支付成功，金额: ¥99.00"
        />
        <SkStep
          title="商品发货"
          description="商品正在打包，预计今天发货"
        />
        <SkStep
          title="确认收货"
          description="预计3-5天送达"
        />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        长描述文本
      </view>
      <view class="demo-desc">
        支持较长的描述文本内容
      </view>

      <SkSteps :active="1" direction="vertical">
        <SkStep
          title="注册账号"
          description="使用手机号或邮箱注册账号，注册完成后请妥善保管您的账号密码，如有问题请联系客服。"
        />
        <SkStep
          title="实名认证"
          description="根据国家相关法律法规要求，需要进行实名认证。请准备好身份证正反面照片，确保照片清晰可见。认证信息仅用于身份验证，我们将严格保护您的隐私安全。"
        />
        <SkStep
          title="开始使用"
          description="认证通过后即可正常使用平台所有功能"
        />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        时间轴样式
      </view>
      <view class="demo-desc">
        使用描述展示时间信息
      </view>

      <SkSteps :active="3" direction="vertical">
        <SkStep
          title="订单已创建"
          description="2024-01-01 10:00:00"
          icon="i-lucide:shopping-bag"
        />
        <SkStep
          title="等待支付"
          description="2024-01-01 10:01:00"
          icon="i-lucide:credit-card"
        />
        <SkStep
          title="支付成功"
          description="2024-01-01 10:05:30"
          icon="i-lucide:check-circle"
        />
        <SkStep
          title="订单完成"
          description="2024-01-01 10:06:00"
          icon="i-lucide:package-check"
        />
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
