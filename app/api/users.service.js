export let userSelectedUserService = {};

export async function getUsersData() {
    try {
      const response = await fetch("https://fakestoreapi.com/users");
  
      if (!response.ok) {
        throw new Error("Error al obtener datos.");
      }
  
      const data = await response.json();
      const filteredData = data.map((user) => {
        const { password, ...rest } = user;
        return rest;
      });
  
      return filteredData;
    } catch (error) {
      console.error("Error al obtener datos:", error);
      throw error;
    }
}

export function setUserSelectedUser(newUser) {
    userSelectedUserService = newUser;
  }
