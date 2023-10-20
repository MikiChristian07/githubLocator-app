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
            } else {
                // Show profile
                ui.showProfile(data.profileData); 
            }
        })
    } else {
        // Clear Profile
    }
});
