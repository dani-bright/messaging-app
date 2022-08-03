import { schema } from 'normalizr';


export const user = new schema.Entity('user');
export const message = new schema.Entity('message');


const schemas = [
  user,
  message,
] as const;

export type Schemas =
  | typeof schemas[number]
  | Array<typeof schemas[number]>
  | Record<string, typeof schemas[number] | Array<typeof schemas[number]>>;
