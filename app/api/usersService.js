export let userSelectedUserService = {};
export let tempUsersListAPI = [];

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
      
      tempUsersListAPI = filteredData;
      return filteredData;
    } catch (error) {
      console.error("Error al obtener datos:", error);
      throw error;
    }
}

export function setUserSelectedUser(newUser) {
    userSelectedUserService = newUser;
  }
