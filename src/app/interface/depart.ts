import { Task } from "./task";
import { User } from "./user";


export interface Depart {
    createdAt: string,
    name: string,
    fromDate: string,
    toDate: string,
    id: string,
    tasks: Task[]
    users: User[];
  }
  