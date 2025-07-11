/**
 * useParent 组合式函数
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 */

import type { ComponentInternalInstance, InjectionKey } from 'vue'

import { computed, getCurrentInstance, inject, onUnmounted, ref } from 'vue'

export function useParent<T>(key: InjectionKey<T>) {
  const parent = inject<(T & {
    add: (children: ComponentInternalInstance) => void;
    remove: (child: ComponentInternalInstance) => void;
    children: ComponentInternalInstance[];
  }) | null>(key, null)

  if (!parent) {
    return {
      parent,
      index: ref(-1),
    }
  }

  const instance = getCurrentInstance()!
  const { add, remove, children } = parent

  add(instance)
  onUnmounted(() => remove(instance))

  const index = computed(() => children.indexOf(instance))

  return {
    parent,
    index,
  }
}
