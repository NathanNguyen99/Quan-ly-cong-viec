
import { JComment } from './comment';

/* eslint-disable no-shadow */
export enum IssueType {
  STORY = 'Story',
  TASK = 'Task',
  BUG = 'Bug'
}

export enum IssueStatus {
  SELECTED = 'Selected',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  IN_PROGRESS = 'InProgress',
  DONE = 'Done'
}

export const IssueStatusDisplay = {
  [IssueStatus.SELECTED]: 'Trễ hạn',
  [IssueStatus.IN_PROGRESS]: 'Đang thực hiện',
  [IssueStatus.DONE]: 'Hoàn thành'
};

export enum IssuePriority {
  LOWEST = 'Thấp nhất',
  LOW = 'Thấp',
  MEDIUM = 'Trung bình',
  HIGH = 'Cao',
  HIGHEST = 'Cao nhất'
}

export const IssuePriorityColors = {
  [IssuePriority.HIGHEST]: '#CD1317',
  [IssuePriority.HIGH]: '#E9494A',
  [IssuePriority.MEDIUM]: '#E97F33',
  [IssuePriority.LOW]: '#2D8738',
  [IssuePriority.LOWEST]: '#57A55A'
};
export interface JIssue {
  id: string;
  title: string;
  type: IssueType;
  status: IssueStatus;
  priority: IssuePriority;
  listPosition: number;
  description: string;
  estimate: number;
  timeSpent: number;
  timeRemaining: number;
  createdAt: string;
  updatedAt: string;
  reporterId: string;
  userIds: string[];
  comments: JComment[];
  projectId: string;
}
/* eslint-enable no-shadow */
