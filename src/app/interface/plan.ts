import { planInt } from './planInt';
import { User } from './user';
import { Comment } from './comment';

export interface Plan {
  id: string;
  name: string;
  description: string;
  plans: planInt[];
}

