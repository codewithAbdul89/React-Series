
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectID);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userID }) {
        try {
            return this.databases.createDocument(conf.appWriteDataBaseID,
                conf.appWriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                }
            )
        } catch (error) {
            console.log("AppWrite Service::createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDataBaseID,
                conf.appWriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        } catch (error) {
            console.log("APpwrite Service :: updatePost :: error", error);
        }



    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appWriteDataBaseID,
                conf.appWriteCollectionID,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePst :: error", error);
            return false
        }
    }


    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appWriteDataBaseID,
                conf.appWriteCollectionID,
                slug,
            )

        } catch (error) {
            console.log("Appwrite :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appWriteDataBaseID,
                conf.appWriteCollectionID,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service :: getPosts ::error", error);
            return false
        }
    }


    // File services
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketID,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("Appwrite service ::upload file:: error", error);
            return false

        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service ::deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appWriteBucketID,
            fileId
        )
    }
}
const service = new Service()
export default service