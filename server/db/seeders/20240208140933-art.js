'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Arts',
      [
        {
          gallery_id: 1,
          src: 'https://cdnb.artstation.com/p/assets/images/images/004/092/037/large/mikalai-dzemiantsevich-render1.jpg?1480283293',
          title: '3D art1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gallery_id: 2,
          src: 'https://cdna.artstation.com/p/assets/images/images/013/423/792/large/roman-kizima-inquisitor-01-r-kizima.jpg?1539550874',
          title: '3D art2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gallery_id: 3,
          src: 'https://cdnb.artstation.com/p/assets/images/images/000/275/117/large/darklordgallery22.jpg?1443930189',
          title: '3D art1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gallery_id: 3,
          src: 'https://cdna.artstation.com/p/assets/images/images/000/275/118/4k/555.jpg?1443930200',
          title: '3D art2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gallery_id: 3,
          src: 'https://cdnb.artstation.com/p/assets/images/images/000/275/119/large/122.jpg?1443930205',
          title: '3D art3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gallery_id: 4,
          src: 'https://cdnb.artstation.com/p/assets/images/images/049/595/989/4k/ryan-gaveglia-abstract-waves-scene-shot-04a.jpg?1652862617',
          title: 'Abstract art1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gallery_id: 5,
          src: 'https://cdna.artstation.com/p/assets/images/images/042/551/122/4k/hideyuki-ashizawa-20211021-2.jpg?1634811018',
          title: 'Abstract art2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gallery_id: 6,
          src: 'https://cdna.artstation.com/p/assets/images/images/004/566/686/large/don-arceta-beksinski05.jpg?1484635701',
          title: 'Abstract art3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gallery_id: 7,
          src: 'https://cdna.artstation.com/p/assets/images/images/058/807/060/4k/david-baylis-06.jpg?1675025439',
          title: 'Auto art1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gallery_id: 8,
          src: 'https://cdna.artstation.com/p/assets/images/images/045/412/366/4k/david-baylis-final.jpg?1642657200',
          title: 'Auto art2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gallery_id: 9,
          src: 'https://cdnb.artstation.com/p/assets/images/images/042/154/213/4k/david-baylis-img-0055.jpg?1633709236',
          title: 'Auto art3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gallery_id: 10,
          src: 'https://cdnb.artstation.com/p/assets/images/images/042/154/213/4k/david-baylis-img-0055.jpg?1633709236',
          title: 'Auto art3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Arts', null, {});
  },
};
