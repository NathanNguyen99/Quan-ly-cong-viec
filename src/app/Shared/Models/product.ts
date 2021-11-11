import { Task } from './task.model';
import { User } from './user';

export interface Product {
  id: string;
  name: string;
  url: string;
  description: string;
  createdAt: string;
  updateAt: string;
  tasks: Task[];
  users: User[];
}