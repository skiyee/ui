<template>
  <div class="p-4 w-full">
    <SkRollerGroup>
      <SkRoller
        :options="[
          { label: '苹果', value: 'apple' },
          { label: '香蕉', value: 'banana' },
          { label: '橙子', value: 'orange' },
          { label: '葡萄', value: 'grape' },
          { label: '草莓', value: 'strawberry' },
        ]"
      />
    </SkRollerGroup>
  </div>
</template>
