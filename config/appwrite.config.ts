const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;

class ExpoConfig {
  getDatabaseId() {
    return DATABASE_ID;
  }
  getCollectionId() {
    return COLLECTION_ID;
  }

  getProjectId() {
    return PROJECT_ID;
  }
}

export const expoConfig = new ExpoConfig();
