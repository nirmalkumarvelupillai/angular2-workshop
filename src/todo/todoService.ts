export class TodoService {
    todos: string[] = [
        "dance",
        "play",
        "sleep"
    ];

    addTodo(todo: string) {
        if (!todo || 0 === todo.length) return false;
        this.todos.push(todo);
    }
}