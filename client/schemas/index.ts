import { schema } from 'normalizr';


export const userSchema = new schema.Entity('user');
export const messageSchema = new schema.Entity('message');


const schemas = [
  userSchema,
  messageSchema,
] as const;

export type Schemas =
  | typeof schemas[number]
  | Array<typeof schemas[number]>
  | Record<string, typeof schemas[number] | Array<typeof schemas[number]>>;
