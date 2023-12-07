const mongoose = require('mongoose');

const getConnection = async () => {

    try {

        const url = 'mongodb://user-iud:yCWOLRAHI2upci5F@ac-8rz6enz-shard-00-00.o6ov3xl.mongodb.net:27017,ac-8rz6enz-shard-00-01.o6ov3xl.mongodb.net:27017,ac-8rz6enz-shard-00-02.o6ov3xl.mongodb.net:27017/inventarios-iud?ssl=true&replicaSet=atlas-qxqq7s-shard-0&authSource=admin&retryWrites=true&w=majority'

        await mongoose.connect(url);

        console.log('conexion exitosa');

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getConnection
}