export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export type Filter = 'ALL' | 'ACTIVE' | 'COMPLETED';

export interface AppState {
    todos: Todo[],
    filter?: Filter
}