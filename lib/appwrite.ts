export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.tomas.wapiti-training',
  projectId: '665544b9003b5830cca3',
  databaseId: '665545c100024e0e33ae',
  userCollectionId: '665545d80006479f60b3',
  drillCollectionId: '6655463e0025f6490969',
  storageId: '6655504f00197d13a47b',
};

import { Account, Client, ID } from 'react-native-appwrite';
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
