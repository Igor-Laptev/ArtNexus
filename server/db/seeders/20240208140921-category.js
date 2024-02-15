'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'Game Art',
          img: 'https://cdnb.artstation.com/p/assets/images/images/071/936/427/4k/jeppe-mygh-1.jpg?1706261165',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Architectural Visualization',
          img: 'https://cdna.artstation.com/p/assets/images/images/058/802/972/4k/mike-kurabi-screen01-4k.jpg?1675018320',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Illustration',
          img: 'https://cdna.artstation.com/p/assets/images/images/065/879/014/4k/lorenzo-lanfranconi-hoa-vynil-cover-final.jpg?1691474255',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Horror',
          img: 'https://cdnb.artstation.com/p/assets/images/images/068/442/157/large/col-price-we-dont-let-no7-out-anymore.jpg?1697809362',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Animals & Wildlife',
          img: 'https://cdnb.artstation.com/p/assets/images/images/067/019/297/large/jonathan-wesslund-5-shibainu-smaller.jpg?1694359920',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Portraits',
          img: 'https://cdnb.artstation.com/p/assets/images/images/072/641/561/large/mori-345.jpg?1707856799',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Vehicles',
          img: 'https://cdna.artstation.com/p/assets/images/images/066/177/136/4k/wu-enyu-.jpg?1692236402',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
