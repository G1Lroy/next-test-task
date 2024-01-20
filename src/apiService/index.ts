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
export const createUser = async (formData: string) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  const newUser = await response.json();
  return {
    message: "User created",
    status: 201,
    newUser,
  };
};
