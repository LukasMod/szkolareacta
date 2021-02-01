import { rest } from 'msw';
import usersData from './usersData.json';
import { v4 as uuidv4 } from 'uuid';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(usersData));
  }),
  rest.get('/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            gender: 'male',
            name: {
              title: 'Mr',
              first: 'Önal',
              last: 'Önür',
            },
            location: {
              street: {
                number: 2466,
                name: 'Tunalı Hilmi Cd',
              },
              city: 'Siirt',
              state: 'Çanakkale',
              country: 'Turkey',
              postcode: 59102,
              coordinates: {
                latitude: '73.4410',
                longitude: '-104.5280',
              },
              timezone: {
                offset: '-3:30',
                description: 'Newfoundland',
              },
            },
            email: 'onal.onur@example.com',
            login: {
              uuid: uuidv4(),
              username: 'brownpeacock521',
              password: 'fellatio',
              salt: 'kxr5m8nG',
              md5: 'ac805e3c2678d7899ae097227f924cf3',
              sha1: '20a4d1ba861689a887cdc5ab76695aa3d423a0df',
              sha256:
                '7919d749df392ae79afc0db1f83791a4ce40e3d21aee9bf3d083f5a1c15d778f',
            },
            dob: {
              date: '1986-03-11T14:17:29.013Z',
              age: 35,
            },
            registered: {
              date: '2005-10-14T03:02:54.267Z',
              age: 16,
            },
            phone: '(256)-216-3684',
            cell: '(839)-498-5033',
            id: {
              name: '',
              value: null,
            },
            picture: {
              large: 'https://randomuser.me/api/portraits/men/88.jpg',
              medium: 'https://randomuser.me/api/portraits/med/men/88.jpg',
              thumbnail: 'https://randomuser.me/api/portraits/thumb/men/88.jpg',
            },
          },
        ],
      })
    );
  }),
];
