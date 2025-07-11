<template>
  <div class="flex flex-wrap items-center gap-4 p-4">
    <SkBadge content="6" :hidden="false">
      <SkButton>显示</SkButton>
    </SkBadge>
    <SkBadge content="6" hidden>
      <SkButton>隐藏</SkButton>
    </SkBadge>
    <SkBadge shape="dot" color="success">
      <SkButton>点状显示</SkButton>
    </SkBadge>
    <SkBadge shape="dot" color="warning" hidden>
      <SkButton>点状隐藏</SkButton>
    </SkBadge>
  </div>
</template>
