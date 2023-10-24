// init GitHub
const github = new GitHub;

// init Ui
const ui = new UI();

// Search Input
const searchUser = document.getElementById('searchUser');

// Search InpuT event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input Text 
    const userText = e.target.value;

    if (userText !== ''){
        // Make HTTP request
        github.getUser(userText)
        .then(data => {
            if(data.profileData.message === 'Not Found'){
                // Show error alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // Show profile
                ui.showProfile(data.profileData); 
                // Show Repos
                ui.showRepos(data.reposData); 
            }
        })
    } else {
        // Clear Profile from page
        ui.clearProfile();
    }
});
