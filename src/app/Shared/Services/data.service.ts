import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      products: [
        {
          id: 1,
          name: 'Chỉ đạo 1',
          fromDate: '1/2/21',
          toDate: '2/3/21',
          desc:
            'Đây là chỉ đạo của tỉnh Bình Dương về việc làm này làm kia',
          price: '$40',
        },
        {
          id: 2,
          name: 'Chỉ đạo 2',
          fromDate: '1/2/21',
          toDate: '2/3/21',
          desc:
            'Đây là kế hoạch khai thác hệ thống',
        }
      ],
    };
  }
}
