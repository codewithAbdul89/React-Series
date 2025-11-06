import conf from "../conf/conf";
import { Account, ID, Client } from "appwrite"

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectID);
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password })
            }
            else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return this.account.get()
            
        } catch (error) {
            console.log("APP write services :: getCurrentUser ::error",error);
        }
        return null
    }


    async logOut(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("APP write services :: logout ::error",error);
        }
    }
}

const authService = new AuthService()

export default authService