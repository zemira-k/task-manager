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
    time: new Date(), // When does the task need to be done
    teams: ['String array'],
    members: [{ member }],
    createdAt: new Date(Date.now()) // Task creation date
}

