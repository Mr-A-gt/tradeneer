const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const Admin = require('./models/admin');
const dbConnect = require('./config/dbConnect');

const addAdmin = async () => {
    await dbConnect();

    const username = 'Tradeneer@Ajnas'; // Change this to your desired username
    const password = 'Trident@#0088'; // Change this to your desired password

    const hashedPassword = await bcrypt.hash(password, 12);

    const newAdmin = new Admin({
        username,
        password: hashedPassword,
    });

    await newAdmin.save();
    console.log('Admin user created successfully');
    mongoose.connection.close();
};

addAdmin();
