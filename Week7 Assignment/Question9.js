function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      return response.json();
    })
    .then((users) => {
      console.log("Name:", users[0].name);
      console.log("Email:", users[0].email);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
}

getUsers();