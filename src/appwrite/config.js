import { Client, Databases, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
  Client = new Client();
  database;

  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(
      conf.appwriteProjectId
    );
    this.database = new Databases(this.Client);
  }

  async createDocument(data, title) {
    try {
      const result = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        title,
        data
      );
      return result;
    } catch (error) {
      console.error("Error creating document:", error);
      throw error;
    }
  }

  async updateDocument(data, title) {
    try {
      const result = await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        title,
        data
      );
      return result;
    } catch (error) {
      console.error("Error updating document:", error);
      throw error;
    }
  }

  async getDocuments(username, password) {
    try {
      const result = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("username", username), Query.equal("password", password)]
      );
      return result.documents;
    } catch (error) {
      console.error("Error getting documents:", error);
      throw error;
    }
  }
}

const service = new Service();
export default service;
