'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'O Senhor dos Aneis',
        author: 'Tolkien',
        pageQuantity: 966,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Harry Potter',
        author: 'JK Rowling',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
