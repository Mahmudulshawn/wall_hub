import { Client, Account, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint("https://sgp.cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || ''); // Replace with your project ID

export const account = new Account(client);
export const Database = new Databases(client);

export { ID } from 'appwrite';
