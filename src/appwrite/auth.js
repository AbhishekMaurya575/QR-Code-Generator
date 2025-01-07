import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  Client = new Client();
  account;
  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(
      conf.appwriteProjectId
    );
    this.account = new Account(this.Client);
  }

  async createAccount(password) {
    try {
      const userAccount = await this.account.create(ID.unique(), password);
      return userAccount;
    } catch (error) {
      console.error("Error creating account:", error);
      throw error;
    }
  }
}

const authservice = new AuthService();
export default authservice;
