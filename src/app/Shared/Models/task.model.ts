







export enum TaskStatus {
  SELECTED = 'Selected',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  IN_PROGRESS = 'InProgress',
  DONE = 'Done'
}

export const TaskStatusDisplay = {
  [TaskStatus.SELECTED]: 'Trễ hạn',
  [TaskStatus.IN_PROGRESS]: 'Đang thực hiện',
  [TaskStatus.DONE]: 'Hoàn thành'
};

export const TaskStatusColors = {
  [TaskStatus.SELECTED]: '#DB504A',
  [TaskStatus.IN_PROGRESS]: '#2BD9FE',
  [TaskStatus.DONE]: '#6bc950'
};

export interface Task {
  name: string;
  fromDate: string;
  toDate: string;
  id: number;
  status: TaskStatus;
  listPosition: number;
  userIds: string[];
}
