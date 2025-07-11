<template>
  <div class="flex flex-wrap items-center gap-4 p-4">
    <SkBadge :content="6">
      <SkButton>包装模式</SkButton>
    </SkBadge>
    <SkBadge :content="12" />
    <SkBadge shape="dot" color="success" />
    <SkBadge :content="999" color="danger" />
  </div>
</template>
