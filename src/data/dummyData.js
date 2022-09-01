import Avatar1 from '../assets/imgs/demo-members/1.jpg';

export const Task = [
  {
    _id: '123',
    title: 'Emptying rubbish and bins',
    time: {
      from: `${new Date().getHours()}:00`,
      to: `${new Date().getHours() + 1}:00`,
    }, // When does the task need to be done

    teams: [{ _id: '01', title: 'Cleaning', color: '#08C7E0' }],
    members: [
      {
        _id: '12',
        fullname: 'Sara omami',
        avatar: Avatar1,
        role: 'Cleaner',
      },
      {
        _id: 'yf58t',
        fullname: 'Victor Jones',
        avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
        role: 'Cleaner',
      },
    ],
    comments: 1,
    createdAt: new Date(Date.now() - 60 * 1000 ** 2 * 24), // Task creation date
    status: 'todo', // todo/done
  },
  {
    _id: '124',
    title: 'Making dinner for tonight',
    time: {
      from: `${new Date().getHours()}:00`,
      to: `${new Date().getHours() + 1}:00`,
    }, // When does the task need to be done

    teams: [{ _id: '02', title: 'Kitchen', color: '#FD838F' }],
    members: [
      {
        _id: 'ds32a',
        fullname: 'barak bachar',
        avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
        role: 'chef',
      },
    ],
    comments: 3,

    createdAt: new Date(Date.now() - 60 * 1000 ** 2 * 24), // Task creation date
    status: 'todo', // todo/done
  },
];

export const Member = [
  {
    _id: 'asd12',
    name: 'zemira',
    avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
    phone: '0525348765',
    mail: 'anazak121@gmail.com',
    role: 'player',
    officialID: '315989875',
    team: {
      _id: '01',
      title: 'Cleaning',
      color: '#08C7E0',
    },
    startTime: '10:28:53',
    endTime: '16:25:03',
  },
  {
    _id: 'ds21a',
    name: 'manor solomon',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    phone: '0525348325',
    mail: 'manor@gmail.com',
    role: 'player',
    officialID: '3144989875',
    team: {
      _id: '02',
      title: 'Kitchen',
      color: '#FD838F',
    },
    startTime: '10:00:22',
    endTime: '16:00:15',
  },
  {
    _id: 'ds32a',
    name: 'barak bachar',
    avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
    phone: '0525342343',
    mail: 'barak@gmail.com',
    role: 'chef',
    officialID: '125487369',
    team: {
      _id: '02',
      title: 'Kitchen',
      color: '#FD838F',
    },
    startTime: '08:10:28',
    endTime: '15:10:50',
  },
  {
    _id: 'fr58y',
    name: 'Meghan Nelson',
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    phone: '0525377765',
    mail: 'Meghan@gmail.com',
    role: 'player',
    officialID: '315947875',
    team: { _id: '03', title: 'Childcare', color: '#FFAD7A' },
    startTime: '10:28:53',
    endTime: '16:25:03',
  },
  {
    _id: 'y58fr',
    name: 'nicholas morrison',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    phone: '0525968325',
    mail: 'nicholas@gmail.com',
    role: 'player',
    officialID: '3149789875',
    team: { _id: '02', title: 'Kitchen', color: '#FD838F' },
    startTime: '10:00:22',
    endTime: '16:00:15',
  },
  {
    _id: 'yf58r',
    name: 'stacy spencer',
    avatar: 'https://randomuser.me/api/portraits/women/39.jpg',
    phone: '0525341343',
    mail: 'stacy@gmail.com',
    role: 'coach',
    officialID: '125436369',
    team: { _id: '03', title: 'Childcare', color: '#FFAD7A' },
    startTime: '08:10:28',
    endTime: '15:10:50',
  },
  {
    _id: 'yf58t',
    name: 'Victor Jones',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    phone: '0525341343',
    mail: 'stacy@gmail.com',
    role: 'cleaner',
    officialID: '125436369',
    team: { _id: '02', title: 'Kitchen', color: '#FD838F' },
    startTime: '08:10:28',
    endTime: '15:10:50',
  },
];

export const Team = [
  { _id: '01', title: 'Cleaning', color: '#08C7E0' },
  { _id: '02', title: 'Kitchen', color: '#FD838F' },
  { _id: '03', title: 'Childcare', color: '#FFAD7A' },
];

export const Comments = [
  {
    _id: '01',
    task: 'Emptying rubbish and bins',
    outComment: [
      {
        name: 'Sara Omami',
        avatar: Avatar1,
        text: 'Where are the new socks?',
        createdAt: new Date(Date.now() - 60 * 1000 ** 2 * 24), //comment creation time
        // need calculate how much time ago
      },
    ],
    inComment: [
      {
        name: '',
        avatar: '',
        text: '',
        createdAt: new Date(Date.now() - 60 * 1000 ** 2 * 24),
      },
    ],
  },
  {
    _id: '02',
    task: 'Laundry, ironing and wardrobe',
    outComment: [
      {
        name: 'Victor Jones',
        avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
        text: 'Can I get help here?',
        createdAt: new Date(Date.now() - 60 * 1000 ** 2 * 24),
      },
    ],
    inComment: [
      {
        name: '',
        avatar: '',
        text: '',
        createdAt: new Date(Date.now() - 60 * 1000 ** 2 * 24),
      },
    ],
  },
];
