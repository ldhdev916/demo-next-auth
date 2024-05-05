import {auth, signIn} from "@/auth";

export default async function Home() {

    const session = await auth()

    if (!session) {
        await signIn()
    }

    return <p>{JSON.stringify(session)}</p>
}