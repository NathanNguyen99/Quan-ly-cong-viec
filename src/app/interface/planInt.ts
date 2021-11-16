import { Depart } from "./depart";

export interface planInt {
    id: string;
    name: string;
    fromDate: string;
    toDate: string;
    createdAt: string;
    updatedAt: string;
    planIds: string[];
    depart: Depart[]
    comments: Comment[];
}
  