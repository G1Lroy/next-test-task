export const getUser = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) return null;
  return response.json();
};
export const getUserList = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  if (!response.ok) return null;
  return response.json();
};
