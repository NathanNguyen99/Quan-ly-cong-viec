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
          desc: 'Đây là chỉ đạo của tỉnh Bình Dương về việc làm này làm kia',
        },
        {
          id: 2,
          name: 'Chỉ đạo 2',
          fromDate: '1/2/21',
          toDate: '2/3/21',
          desc: 'Đây là kế hoạch khai thác hệ thống',
        },
      ],
      subproducts: [
        {
          createdAt: '2021-11-07T10:43:31.594Z',
          name: 'Phòng Dân sự',
          fromDate: '17/8/21',
          toDate: '17/9/21',
          totalTask: 3,
          doneTask: 2,
          id: '1',
        },
        {
          createdAt: '2021-11-07T16:52:40.466Z',
          name: 'Phòng R & D',
          fromDate: '12/6/21',
          toDate: '8/7/21',
          totalTask: 6,
          doneTask: 4,
          id: '2',
        },
        {
          createdAt: '2021-11-08T00:01:01.547Z',
          name: 'Phòng kinh doanh',
          fromDate: '18/2/21',
          toDate: '18/12/21',
          totalTask: 2,
          doneTask: 1,
          id: '3',
        },
        {
          createdAt: '2021-11-07T10:05:49.772Z',
          name: 'Phòng kỹ thuật',
          fromDate: '18/2/21',
          toDate: '18/12/21',
          totalTask: 4,
          doneTask: 1,
          id: '4',
        },
      ],
      doneTaskSection: [
        {
          name: 'Quản lý thời gian',
          fromDate: '12/6/21',
          toDate: '8/7/21',
          id: 1,
          color: '#6bc950',
          
        },
        {
          name: 'Quản lý tình huống',
          fromDate: '12/6/21',
          toDate: '8/7/21',
          id: 2,
          color: '#6bc950',
        },
        {
          name: 'Kiểm kê số lượng router',
          fromDate: '12/6/21',
          toDate: '8/7/21',
          id: 3,
          color: '#6bc950',
        },
      ],
      inProgressTaskSection: [
        {
          name: 'Công trình liên địa phươhng',
          fromDate: '12/6/21',
          toDate: '8/7/21',
          color: '#DB504A',
          id: 1,
        },
        {
          name: 'ACBSDSD',
          fromDate: '12/6/21',
          toDate: '8/7/21',
          color: '#DB504A',
          id: 2,
        },
        {
          name: 'Thanh toán lệ phí',
          fromDate: '12/6/21',
          toDate: '8/7/21',
          color: '#DB504A',
          id: 3,
        },
      ],
      alertTaskSection: [
        {
          name: 'BLKSBFLKH',
          fromDate: '12/6/21',
          toDate: '8/7/21',       
          id: 1,
          color: '#2BD9FE',
        },
        {
          name: 'sdfsdfdsf',
          fromDate: '12/6/21',
          toDate: '8/7/21',
          id: 2,
          color: '#2BD9FE',
        },
        {
          name: 'acassesafasfasfasfasf',
          fromDate: '12/6/21',
          toDate: '8/7/21',
          id: 3,
          color: '#2BD9FE',
        },
      ]
    };
  }
}
