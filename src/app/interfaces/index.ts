export type TodoType = {
    id?: number;
    description?: string;
    completed?: boolean;
    createdAt?: string;
    updatedAt?: string;
};

export type TodoActionType = {
    type: "init" | "add" | "delete" | "update" | "edit";
    payload: TodoType;
};


export type ParamType = {
    params: { id: number }
}
