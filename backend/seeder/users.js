const bcrypt = require('bcryptjs')

const users=[
    {
        name:'admin',
        lastname:'admin',
        email:'admin@admin.com',
        password:bcrypt.hashSync('admin@admin.com',10),
        isAdmin:true
    },
    {
        name:'John',
        lastname:'Doe',
        email:'john@doe.com',
        password:bcrypt.hashSync('john@doe.com',10)
    },
]

module.exports = users