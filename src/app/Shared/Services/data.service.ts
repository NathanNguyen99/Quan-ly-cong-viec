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
          id: '1',
        },
        {
          createdAt: '2021-11-07T16:52:40.466Z',
          name: 'Phòng R & D',
          fromDate: '12/6/21',
          toDate: '8/7/21',
          id: '2',
        },
        {
          createdAt: '2021-11-08T00:01:01.547Z',
          name: 'Phòng kinh doanh',
          fromDate: '18/2/21',
          toDate: '18/12/21',
          id: '3',
        },
        {
          createdAt: '2021-11-07T10:05:49.772Z',
          name: 'Phòng kỹ thuật',
          fromDate: '18/2/21',
          toDate: '18/12/21',
          id: '4',
        },
      ],
      Auth: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Trung Vo',
          avatarUrl:
            'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1593253478/trung-vo_bioxmc.png',
          createdAt: '2020-06-16T16:00:00.000Z',
          updatedAt: '2020-06-16T16:00:00.000Z',
        },
      ],
      Section: {
        id: '140892',
        name: 'Phòng Dân sự',
        description:
          'A Jira clone app built with Angular 10, Akita and ng-zorro - by trungk18',
        fromDate: '17/8/21',
        toDate: '17/9/21',
        createdAt: '2020-06-12T16:00:00.000Z',
        updatedAt: '2020-06-13T16:00:00.000Z',
        users: [
          {
            id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
            name: 'Trung Vo',
            avatarUrl:
              'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1593253478/trung-vo_bioxmc.png',
            projectId: '140892',
          },
          {
            id: '7ac265f9-b9ac-443f-a2b2-795682e579a4',
            name: 'Iron Man',
            avatarUrl:
              'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/ironman_c3jrbc.jpg',
            projectId: '140892',
          },
          {
            id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
            name: 'Captain',
            avatarUrl:
              'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/captain_e8s9nk.jpg',
            projectId: '140892',
          },
          {
            id: '610451aa-10c8-4d7e-9363-311357c0b0dd',
            name: 'Thor',
            avatarUrl:
              'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405731/thor_juqwzf.jpg',
            projectId: '140892',
          },
          {
            id: '081ccaa1-5595-4621-8074-ede4927e67b0',
            name: 'Spider Man',
            avatarUrl:
              'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405731/spiderman_zlrtx0.jpg',
            projectId: '140892',
          },
        ],
        tasks: [
          {
            name: 'Quản lý thời gian',
            fromDate: '12/6/21',
            toDate: '8/7/21',
            id: '1',
            status: 'Done',
            createdAt: '2020-10-26T15:13:08.070Z',
            userIds: [
              'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
              '7ac265f9-b9ac-443f-a2b2-795682e579a4',
            ],
            listPosition: 1,
          },
          {
            name: 'Quản lý công trình liên tỉnh',
            fromDate: '12/6/21',
            toDate: '8/7/21',
            id: '2',
            status: 'Done',
            createdAt: '2021-04-28T14:56:55.049Z',
            userIds: ['081ccaa1-5595-4621-8074-ede4927e67b0'],
            listPosition: 2,
          },
          {
            name: 'Quản lý tình huống',
            fromDate: '12/6/21',
            toDate: '8/7/21',
            id: '3',
            status: 'Done',
            createdAt: '2020-12-19T03:00:00.000Z',

            userIds: [
              'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
              '081ccaa1-5595-4621-8074-ede4927e67b0',
            ],
            listPosition: 3,
          },
          {
            name: 'Kiểm kê số lượng router',
            fromDate: '12/6/21',
            toDate: '8/7/21',
            id: '4',
            status: 'Done',
            createdAt: '2020-09-15T23:41:37.278Z',
            userIds: [
              'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
              '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
              '610451aa-10c8-4d7e-9363-311357c0b0dd',
            ],
            listPosition: 4,
          },
          {
            name: 'Công trình liên địa phươhng',
            fromDate: '12/6/21',
            toDate: '8/7/21',
            id: '5',
            createdAt: '2020-06-12T14:40:01.262Z',
            status: 'InProgress',
            userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
            listPosition: 1,
          },
          {
            name: 'ACBSDSD',
            fromDate: '12/6/21',
            toDate: '8/7/21',
            id: '6',
            createdAt: '2020-06-12T14:40:01.262Z',
            status: 'InProgress',
            userIds: ['610451aa-10c8-4d7e-9363-311357c0b0dd'],
            listPosition: 2,
          },
          {
            name: 'Thanh toán lệ phí',
            fromDate: '12/6/21',
            toDate: '8/7/21',
            id: '7',
            status: 'InProgress',
            userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
            listPosition: 3,

          },
          {
            name: 'acassesafasfasfasfasf',
            fromDate: '12/6/21',
            toDate: '8/7/21',
            id: '8',
            createdAt: '2020-06-12T14:40:01.346Z',
            status: 'Selected',
            userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
            listPosition: 1,

          },
        ],
      },
      Test: [
        {
          id: 1,
          name: 'Chỉ đạo 1',
          fromDate: '1/2/21',
          toDate: '2/3/21',
          desc: 'Đây là chỉ đạo của tỉnh Bình Dương về việc làm này làm kia',
          depart: [
            {
              createdAt: '2021-11-07T10:43:31.594Z',
              name: 'Phòng Dân sự',
              fromDate: '17/8/21',
              toDate: '17/9/21',
              id: '1',
              tasks: [
                {
                  name: 'Quản lý thời gian abcd',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '1',
                  status: 'Done',
                  userIds: [
                    'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
                    '7ac265f9-b9ac-443f-a2b2-795682e579a4',
                  ],
                  listPosition: 1,
                },
                {
                  name: 'Quản lý công trình liên tỉnh',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '2',
                  status: 'Done',
                  userIds: ['081ccaa1-5595-4621-8074-ede4927e67b0'],
                  listPosition: 2,
                },
                {
                  name: 'Quản lý tình huống',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '3',
                  status: 'Done',
                  userIds: [
                    'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
                    '081ccaa1-5595-4621-8074-ede4927e67b0',
                  ],
                  listPosition: 1,
                },
                {
                  name: 'Kiểm kê số lượng router',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '4',
                  status: 'Done',
                  userIds: [
                    'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
                    '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
                    '610451aa-10c8-4d7e-9363-311357c0b0dd',
                  ],
                  listPosition: 1,
                },
                {
                  name: 'Công trình liên địa phươhng',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '5',
                  status: 'InProgress',
                  userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
                  listPosition: 1,
                },
                {
                  name: 'ACBSDSD',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '6',
                  status: 'InProgress',
                  userIds: ['610451aa-10c8-4d7e-9363-311357c0b0dd'],
                },
                {
                  name: 'Thanh toán lệ phí',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '7',
                  status: 'InProgress',
                  userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
                },
                {
                  name: 'acassesafasfasfasfasf',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '8',
                  status: 'Selected',
                  userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
                },
              ],
            },
            {
              createdAt: '2021-11-07T16:52:40.466Z',
              name: 'Phòng R & D',
              fromDate: '12/6/21',
              toDate: '8/7/21',
              id: '2',
              tasks: [
                {
                  name: 'Quản lý thời gian abcd',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '1',
                  status: 'Todo',
                  userIds: [
                    'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
                    '7ac265f9-b9ac-443f-a2b2-795682e579a4',
                  ],
                  listPosition: 1,
                },
                {
                  name: 'He thong Camera Aloha',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '2',
                  status: 'Done',
                  userIds: ['081ccaa1-5595-4621-8074-ede4927e67b0'],
                  listPosition: 2,
                },
                {
                  name: 'Thiet bi phi tap trung',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '3',
                  status: 'Todo',
                  userIds: [
                    'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
                    '081ccaa1-5595-4621-8074-ede4927e67b0',
                  ],
                  listPosition: 1,
                },
                {
                  name: 'Thong ke va dieu chinh ho so nha thau',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '4',
                  status: 'InProgress',
                  userIds: [
                    'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
                    '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
                    '610451aa-10c8-4d7e-9363-311357c0b0dd',
                  ],
                  listPosition: 1,
                },
                {
                  name: 'Công trình khoi xuong khoi nghiep',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '5',
                  status: 'InProgress',
                  userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
                  listPosition: 1,
                },
                {
                  name: 'ACBSDSD',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '6',
                  status: 'InProgress',
                  userIds: ['610451aa-10c8-4d7e-9363-311357c0b0dd'],
                },
                {
                  name: 'Thanh toán lệ phí',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '7',
                  status: 'InProgress',
                  userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
                },
                {
                  name: 'acassesafasfasfasfasf',
                  fromDate: '12/6/21',
                  toDate: '8/7/21',
                  id: '8',
                  status: 'Selected',
                  userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
                },
              ],
            },
            {
              createdAt: '2021-11-08T00:01:01.547Z',
              name: 'Phòng kinh doanh',
              fromDate: '18/2/21',
              toDate: '18/12/21',
              id: '3',
            },
            {
              createdAt: '2021-11-07T10:05:49.772Z',
              name: 'Phòng kỹ thuật',
              fromDate: '18/2/21',
              toDate: '18/12/21',
              id: '4',
            },
          ],
        },
        {
          id: 2,
          name: 'Chỉ đạo 2',
          fromDate: '1/2/21',
          toDate: '2/3/21',
          desc: 'Đây là kế hoạch khai thác hệ thống',
        },
      ],
      users: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Trung Vo',
          avatarUrl:
            'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1593253478/trung-vo_bioxmc.png',
          projectId: '140892',
        },
        {
          id: '7ac265f9-b9ac-443f-a2b2-795682e579a4',
          name: 'Iron Man',
          avatarUrl:
            'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/ironman_c3jrbc.jpg',
          projectId: '140892',
        },
        {
          id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
          name: 'Captain',
          avatarUrl:
            'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/captain_e8s9nk.jpg',
          projectId: '140892',
        },
        {
          id: '610451aa-10c8-4d7e-9363-311357c0b0dd',
          name: 'Thor',
          avatarUrl:
            'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405731/thor_juqwzf.jpg',
          projectId: '140892',
        },
        {
          id: '081ccaa1-5595-4621-8074-ede4927e67b0',
          name: 'Spider Man',
          avatarUrl:
            'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405731/spiderman_zlrtx0.jpg',
          projectId: '140892',
        },
      ],
    };
  }
}
