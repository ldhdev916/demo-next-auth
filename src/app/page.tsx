import {auth, signIn} from "@/auth";

export default async function Home() {

    const session = await auth()

    if (!session) {
        await signIn()
    }

    return <div>
        <p>{JSON.stringify(session)}</p>

        <p>{process.env.TEST2}</p>

        <p>{process.env.TEST1}</p>
    </div>
}