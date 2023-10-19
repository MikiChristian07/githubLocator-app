class GitHub{
    constructor(){
        this.client_id = '5517fd24be76ce593bc2';
        this.client_secret = 'abe357812e88bf3289ce14d63dc66b545bd7c9a2';
    }

    async getUser(user){    
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        
        return {
            profileData
        }

    }

}