import { fetchPermissionLevel } from "@/api/admin/usergroup/fetch";
import { UsergroupFlags } from "@/api/admin/usergroup/interface";
import { fetchForumInfo } from "@/api/forum/fetch";
import { fetchPersonalInformation } from "@/api/user/fetch";
import Header from "@/components/header/header";
import Link from "next/link";
import style from "./admin.module.scss";

const Admin = async () => {
	const user = await fetchPersonalInformation();
	const forum = await fetchForumInfo();
	let perms: number = 0;
	if (user !== undefined) {
		perms = await fetchPermissionLevel(user.usergroups);
	}

    if ((perms & UsergroupFlags.FORUM_MANAGEMENT) !== UsergroupFlags.FORUM_MANAGEMENT) {
        return (
            <>
                <Header user={user} forum={forum} perms={perms}></Header>
                <main className="container">
                    <h1>Invalid Permissions!</h1>
                </main>
            </>
        )
    }

    return (
        <>
            <title>Forums Admin - K9 Forums</title>
            <main className="container">
                <Link href="/">Home</Link>
                <h1>K9 Forums Admin</h1>
                <div className={style.management}>
                    <nav style={{"display": "flex", "flexDirection": "column"}}>
                        <Link href="/admin/forum">Forum Config</Link> 
                        <Link href="/admin/roles">Usergroups</Link>
                    </nav>
                </div>
            </main>
        </>
    );
}

export default Admin;