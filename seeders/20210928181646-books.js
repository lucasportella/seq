'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'O Senhor dos Aneis',
        author: 'Tolkien',
        pageQuantity: 966,
        createdAt: new Date(),
      },
      {
        title: 'Harry Potter',
        author: 'JK Rowling',
        createdAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
