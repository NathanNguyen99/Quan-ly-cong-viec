


import { Comment } from "./comment";




export enum TaskStatus {
  TODO = 'Todo',
  SELECTED = 'Selected',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  IN_PROGRESS = 'InProgress',
  DONE = 'Done'
}

export const TaskStatusDisplay = {
  [TaskStatus.TODO]: 'Việc cần làm',
  [TaskStatus.SELECTED]: 'Trễ hạn',
  [TaskStatus.IN_PROGRESS]: 'Đang thực hiện',
  [TaskStatus.DONE]: 'Hoàn thành'
};

export const TaskStatusColors = {
  [TaskStatus.TODO]: '#D3D3D3',
  [TaskStatus.SELECTED]: '#DB504A',
  [TaskStatus.IN_PROGRESS]: '#2BD9FE',
  [TaskStatus.DONE]: '#6bc950'
};

export interface Task {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  fromDate: string;
  toDate: string;
  id: string;
  status: TaskStatus;
  listPosition: number;
  userIds: string[];
  comments: Comment[];
}
