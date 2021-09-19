export interface Todo {
  text: string;
  id: string;
}

export type AddTodo = (text: string) => void;
