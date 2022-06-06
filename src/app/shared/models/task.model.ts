import { Tags } from "./tags.model";
import { TaskStatus } from "./taskStatus.model";

export interface Task{
    taskName: string;
    taskDescription: string;
    tags: Tags[];
    status: TaskStatus;
    dateCreated: Date;
    dateModified: Date;
    dateCompleted: Date;
}
