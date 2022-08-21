import Avatar1 from '../assets/imgs/demo-members/1.jpg';

export const Task = [
  {
    _id: '123',
    title: 'Emptying rubbish and bins',
    time: new Date(), // When does the task need to be done
    teams: [
      {
        _id: '21',
        name: 'Cleaning',
        color: '#08C7E0',
      },
    ],
    members: [
      {
        _id: '12',
        fullname: 'Sara omami',
        avatar: Avatar1,
        email: 'Sara567@gmail.com',
        phone: '051-856-753',
        role: 'Cleaner',
        memberNum: 567,
      },
    ],
    createdAt: new Date(Date.now() - 60 * 1000 ** 2 * 24), // Task creation date
    status: 'todo', // todo/done
  },
];

export const Contact = [
  {
    _id: 'asd12',
    name: 'zemira',
    avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
    phone: '0525348765',
    mail: 'anazak121@gmail.com',
    role: 'player',
    officalID: '315989875',
    team: 'cleaning',
  },
  {
    _id: 'ds21a',
    name: 'manor solomon',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    phone: '0525348325',
    mail: 'manor@gmail.com',
    role: 'player',
    officalID: '3144989875',
    team: 'kitchen',
  },
  {
    _id: 'ds32a',
    name: 'barak bachar',
    avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
    phone: '0525342343',
    mail: 'barak@gmail.com',
    role: 'coach',
    officalID: '125487369',
    team: 'kitchen',
  },
];

export const teams = ['Cleaning', 'Kitchen', 'Childcare'];
