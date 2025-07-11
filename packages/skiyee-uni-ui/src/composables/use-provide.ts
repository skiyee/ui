/**
 * useProvide 组合式函数
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 */

import type { ComponentInternalInstance, ComponentPublicInstance, ConcreteComponent, InjectionKey, VNode, VNodeNormalizedChildren } from 'vue'

import { getCurrentInstance, markRaw, provide, shallowReactive } from 'vue'

export function useProvide<T>(key: InjectionKey<T>, activeChildrenName?: string) {
  const parent = getCurrentInstance()!

  const publicChildren: ComponentPublicInstance<object, any>[] = shallowReactive([])
  const internalChildren: ComponentInternalInstance[] = shallowReactive([])

  const add = (children: ComponentInternalInstance) => {
    if (!children.proxy) {
      return
    }

    internalChildren.push(markRaw(children))
    publicChildren.push(markRaw(children.proxy))
    sortChildren(parent, internalChildren, activeChildrenName)
  }

  const remove = (child: ComponentInternalInstance) => {
    if (child.proxy) {
      internalChildren.splice(internalChildren.indexOf(markRaw(child)), 1)
      publicChildren.splice(publicChildren.indexOf(markRaw(child.proxy)), 1)
    }
  }

  return (value?: T) => {
    provide(key, Object.assign({
      add,
      remove,
      children: internalChildren,
    }, value))

    return {
      internalChildren,
      publicChildren,
    }
  }
}

export function sortChildren(
  parent: ComponentInternalInstance,
  internalChildren: ComponentInternalInstance[],
  childName?: string,
) {
  const vnodes = flattenVNodes(parent && parent.subTree && parent.subTree.children, childName)
  internalChildren.sort((a, b) => vnodes.indexOf(a.vnode) - vnodes.indexOf(b.vnode))
}

export function flattenVNodes(rootChildren: VNodeNormalizedChildren, childName?: string) {
  const result: VNode[] = []

  const traverse = (children: VNodeNormalizedChildren) => {
    if (!Array.isArray(children)) {
      return
    }

    children.forEach((child) => {
      if (!isVNode(child)) {
        return
      }

      if (childName) {
        if (child.type && (child.type as ConcreteComponent).name === childName) {
          result.push(child)
          return
        }
      }
      else {
        result.push(child)
      }

      if (child.component?.subTree) {
        traverse(child.component.subTree.children)
      }

      if (child.children) {
        traverse(child.children)
      }
    })
  }

  traverse(rootChildren)

  return result
}

export function isVNode(value: any): value is VNode {
  return value ? value.__v_isVNode === true : false
}
