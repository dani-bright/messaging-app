import { Schemas } from "../schemas/index";
import moment from 'moment-timezone';

export function isObject(item: any): boolean {
  return (
    item &&
    typeof item === 'object' &&
    !Array.isArray(item) &&
    !moment.isMoment(item)
  );
}

export function groupBy<K>(list:K[], keyGetter: (item: any) => any){
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

export function mergeDeep(target: any, ...sources: any): any {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }

        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

export const defaultFunctionParameter = async (...params: any) => {
  void params;
};

export type Actions<T> = {
  type: T;
  payload?: any;
  meta?: any;
  schema?: Schemas;
};