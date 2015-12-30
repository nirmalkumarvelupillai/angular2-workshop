export class TodoService {
    todos: string[] = [
        'eat',
        'play',
        'sleep'        
    ];
    
    addTodo(todo:string){
        if(!todo || 0 === todo.length) return false;
        this.todos.push(todo);
    }
}