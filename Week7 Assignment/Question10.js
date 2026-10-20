async function getHighScoringUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const highScoringUsers = users.map(user => ({
      name: user.name,
      email: user.email
    }));

    console.log(highScoringUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

getHighScoringUsers();