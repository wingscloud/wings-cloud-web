export type Callback = (data?: any) => void;

export interface IObject<T = any> {
  [key: string]: T;
}

export interface IFunction<T = any> {
  (x?: any): T;
}
