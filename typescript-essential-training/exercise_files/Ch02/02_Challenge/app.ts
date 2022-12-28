interface TodoItem {
    id: number;
    title: string;
    status: StatusEnum;
    completedOn?: Date;
}

enum StatusEnum {
    Done = "done",
    InProgress = "in-progress",
    Todo = "todo"
}

const todoItems: TodoItem[] = [
    { id: 1, title: "Learn HTML", status: StatusEnum.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: StatusEnum.InProgress },
    { id: 3, title: "Write the best app in the world", status: StatusEnum.Todo },
]

function addTodoItem(todo: string) {
    const id = getNextId(todoItems)

    const newTodo: TodoItem = {
        id,
        title: todo,
        status: StatusEnum.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends { id: number }>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))