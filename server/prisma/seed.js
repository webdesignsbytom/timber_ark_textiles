import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const devUser = await dbClient.user.create({
    data: {
      id: 'dev1',
      email: 'dev@dev.com',
      password,
      role: 'DEVELOPER',
      name: 'tom',
    },
  });

  const adminUser = await dbClient.user.create({
    data: {
      id: 'admin1',
      email: 'admin@admin.com',
      password,
      role: 'ADMIN',
      name: 'nic',
    },
  });

  const itemOne = await dbClient.galleryItem.create({
    data: {
      name: 'Big pillow',
      shoppingUrl: 'https://folksy.com/items/8128548-Two-Happy-Cat-Cushions-combining-Applique-and-Freemotion-Quilting',
      style: 'Needle Point',
      imageUrl:
        'https://imagedelivery.net/0ObHXyjKhN5YJrtuYFSvjQ/i-129283d3-4de3-4a86-8a5a-799fb3c3055d-two-happy-cat-cushions-combining-applique-and-freemotion-quilting-timberarktextiles/shopitem',
    },
  });

  const itemTwo = await dbClient.galleryItem.create({
    data: {
      name: 'Butterfly pillow',
      shoppingUrl: 'https://folksy.com/items/8128569-Two-Beautiful-Butterfly-Cushions-made-with-Appliqued-and-Freemotion-Quilting',
      style: 'Bobbly bits',
      imageUrl:
        'https://imagedelivery.net/0ObHXyjKhN5YJrtuYFSvjQ/i-a3432f28-3786-4254-a0c9-825a08366adf-two-beautiful-butterfly-cushions-made-with-appliqued-and-freemotion-quilting-timberarktextiles/shopitem',
    },
  });

  const itemThree = await dbClient.galleryItem.create({
    data: {
      name: 'Panda Pin Pillow',
      shoppingUrl: 'https://folksy.com/items/8128609-Jolly-Panda-Cushion-made-with-Applique-and-Free-Motion-Quilting-',
      style: 'Seqing style',
      imageUrl:
        'https://imagedelivery.net/0ObHXyjKhN5YJrtuYFSvjQ/i-5cc7c225-219d-4137-ad8b-02c4e83308d2-jolly-panda-cushion-made-with-applique-and-free-motion-quilting-timberarktextiles/shopitem',
    },
  });

  // EVENTS
  const eventOne = await dbClient.event.create({
    data: {
      type: 'ERROR',
      topic: 'Test event',
      code: 500,
      content: '500 test content',
    },
  });
  const eventTwo = await dbClient.event.create({
    data: {
      type: 'USER',
      topic: 'Test event',
      code: 200,
      content: '200 test content',
    },
  });
  const eventThree = await dbClient.event.create({
    data: {
      type: 'ADMIN',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
  const eventFour = await dbClient.event.create({
    data: {
      type: 'VISITOR',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
  const eventFive = await dbClient.event.create({
    data: {
      type: 'DEVELOPER',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
