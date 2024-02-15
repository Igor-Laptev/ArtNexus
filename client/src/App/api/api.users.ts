import type{ User } from "../../features/auth/type";

const fetchLoadUsers = async (): Promise<User[]> => {
    const res = await fetch('/api/users');
      const data: { users: User[]; message: string } = (await res.json()) as {
        users: User[];
        message: string;
      };
      return data.users;
};
export default fetchLoadUsers