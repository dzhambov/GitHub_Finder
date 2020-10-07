// Initializa GitHub
const github = new GitHub;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get Input Text
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP call
    github.getUser(userText)
      .then(data => {
        if (data.profile.messsage === 'Not Found!') {
          // Show Alert

        } else {
          // Show Alert
        }
      })
  } else {
    // Clear Profile

  }
});