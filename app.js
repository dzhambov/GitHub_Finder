// Initializa GitHub
const github = new GitHub;
// Init UI
const ui = new UI;

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
          ui.showAlert('User not found!', 'alert alert-danger');
        } else {
          // Show Profile
          ui.showProfile(data.profile);
        }
      })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});