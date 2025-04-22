import { Account, Client, Databases, ID } from 'appwrite'
import dotenv from 'dotenv'

dotenv.config()


const client = new Client()
client
    .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(process.env.APPWRITE_PROJECT_ID) // Your project ID

const account = new Account(client)
const databases = new Databases(client)

export const signUp = async (username, email, password) => {
    try{
        await account.create(
            ID.unique(),
            email,
            password,
            username
        )
    }

    catch (error) {
        console.error('Error signing up:', error)
        throw error
    }
}

export const signIn = async (email, password) => {
    try{
        const session = await account.createEmailPasswordSession(email, password)
        return session
    }

    catch (error) {
        console.error('Error signing in:', error)
        throw error
    }  
}

export const logout = async () => {
    try{
        await account.deleteSession('current')
    }

    catch(error){
        console.error("Error:", error)
    }
}