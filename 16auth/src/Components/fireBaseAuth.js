import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { conf } from '../Conf/conf'
const myProjectConfigration = {
    apiKey: conf.apiKey,
    authDomain: conf.authDomain,
    projectId: conf.projectId,
    appId: conf.appId
}
const app = initializeApp(myProjectConfigration)
export const auth = getAuth(app)
export const db = getFirestore(app)




