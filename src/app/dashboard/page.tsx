import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p className="text-center mt-10">Please log in to access the dashboard.</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
