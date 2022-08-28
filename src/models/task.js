const team = {
    _id: '',
    name: '',
    color: ''
}

const member = {
    _id: '',
    fullname: '',
    avatar: '',
    email: '',
    phone: '',
    role: '',
    memberNum: 'Number',
    team: { team }
}
const task = {
    _id: '',
    title: '',
    time: { from: '10:00', to: '10:30' }, // When does the task need to be done
    teams: ['String array'],
    members: [{ member }],
    createdAt: new Date(Date.now()), // Task creation date
    status: 'todo', // todo/done
}

