import { TupleToUnion, UnionToTuple } from './tsTools';

/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-05-10 12:42:31
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-05-10 21:37:13
 * @FilePath: /WebWizard/WebWizard-UI/src/utils/tools.ts
 * @Description: 封装对ts的操作
 */

type MyType<T> = T extends infer U
  ? U extends object
    ? UnionToTuple<keyof U>
    : unknown
  : unknown;

/**
 * @description: 根据omitKeys过滤 obj对象
 * @param {T} obj
 * @param {Array} omitKeys
 * @return {*}
 */
export function omitObject<T extends object, Y extends keyof T>(
  obj: T,
  omitKeys: Array<Y>,
) {
  // 获取对象的所有属性
  const keys = Object.keys(obj) as MyType<T>;
  return keys.reduce((result, key) => {
    // 如果该属性不在 omitKeys 数组中，则复制到新对象中
    if (!omitKeys.includes(key)) {
      result[key] = obj[key];
    }
    return result;
  }, {}) as Omit<T, TupleToUnion<Array<Y>>>;
}
