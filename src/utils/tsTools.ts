type UnionToIntersection<U> = (
  U extends any ? (a: (k: U) => void) => void : never
) extends (a: infer I) => void
  ? I
  : never;
type UnionLast<U> = UnionToIntersection<U> extends (a: infer I) => void
  ? I
  : never;
// 联合转元祖
export type UnionToTuple<U> = [U] extends [never]
  ? []
  : [...UnionToTuple<Exclude<U, UnionLast<U>>>, UnionLast<U>];

// 元祖转联合
export type TupleToUnion<T extends any[]> = T[number];
