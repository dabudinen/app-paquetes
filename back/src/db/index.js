import { MongoClient } from 'mongodb';

// Enable command monitoring for debugging
const client = new MongoClient('mongodb://localhost:27017', {
  monitorCommands: true,
});

client.on('commandStarted', (started) => console.log(started));
client.db().collection('pets');
await client.insertOne({ name: 'spot', kind: 'dog' });
// Enable command monitoring for debugging
// // let mongoDBClient = null;

// // const listDatabases = async () => {
// //   const databasesList = await mongoDBClient.db().admin().listDatabases();

// //   console.log('Bases de datos:');
// //   databasesList.databases.forEach((db) => console.log(`    - ${db.name}`));
// //   console.log('');
// // };
