import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.tomas.wapiti-training',
  projectId: '665544b9003b5830cca3',
  databaseId: '665545c100024e0e33ae',
  userCollectionId: '665545d80006479f60b3',
  drillCollectionId: '6655463e0025f6490969',
  storageId: '6655504f00197d13a47b',
};

const client = new Client();
client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

interface Props {
  email: string;
  password: string;
  username: string;
}

export const createUser = async ({ email, password, username }: Props) => {
  try {
    const avatarUrl = avatars.getInitials(username);
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount || !avatarUrl) throw new Error('User not created');
    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    return Promise.reject(error);
  }
};

export async function signIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}
