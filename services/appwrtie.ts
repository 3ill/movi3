import { expoConfig } from "@/config/appwrite.config";
import { Client, Databases, ID, Query } from "react-native-appwrite";

interface IUpdateSearchCount {
  query: string;
  movie: Movie;
}

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(expoConfig.getProjectId());

const database = new Databases(client);

export const updateSearchCount = async ({
  query,
  movie,
}: IUpdateSearchCount) => {
  const databaseId = expoConfig.getDatabaseId();
  const collectionId = expoConfig.getCollectionId();

  try {
    const result = await database.listDocuments(databaseId, collectionId, [
      Query.equal("search_term", query),
    ]);

    if (result.documents.length > 0) {
      const exisitingMovie = result.documents[0];

      await database.updateDocument(
        databaseId,
        collectionId,
        exisitingMovie.$id,
        {
          count: exisitingMovie.count + 1,
        },
      );
    } else {
      await database.createDocument(databaseId, collectionId, ID.unique(), {
        title: movie.title,
        search_term: query,
        movie_id: movie.id,
        count: 1,
        poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      });
    }
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      error: error.message,
    };
  }
};
