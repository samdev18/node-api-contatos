'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Contatos', [{
                nome: 'John Doe',
                telefone: '(44) 997079831',
                titulo: '1',
                data_nascimento: new Date()
            },
            {
                nome: 'John Doe2',
                telefone: '(44) 997079832',
                titulo: '2',
                data_nascimento: new Date()
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('People', null, {});
    }
};