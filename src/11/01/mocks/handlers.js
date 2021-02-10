import { rest } from 'msw';
import usersData from './usersData.json';
import { v4 as uuidv4 } from 'uuid';

export const handlers = [
  rest.post('/contact', (req, res, ctx) => {
    const { username, email, phone } = JSON.parse(req.body);
    return res(
      ctx.status(201),
      ctx.json({
        results: [
          {
            email,
            login: {
              uuid: uuidv4(),
              username,
            },
            phone,
          },
        ],
      })
    );
  }),

  rest.get('/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(usersData));
  }),
  rest.get('/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            name: {
              title: 'Mr',
              first: 'Önal',
              last: 'Önür',
            },
            email: 'onal.onur@example.com',
            login: {
              uuid: uuidv4(),
              username: 'brownpeacock521',
            },
            dob: {
              age: 20,
            },
            phone: '(256)-216-3684',
            cell: '(839)-498-5033',
          },
        ],
      })
    );
  }),
];
