import { Request } from 'express';
import { Profile, Strategy as GitHubStrategy } from 'passport-github2';
import { PassportStrategy } from '../../interfaces/index';

interface GitHubAuthResponse { //made interface
    accessToken: string;
    refreshToken: string;
    profile: Profile;
}

const githubStrategy: GitHubStrategy = new GitHubStrategy(
    {
        clientID: "1c35f144159898e2f168", 
        clientSecret: "f4e975f47f14573a0543ce745f89c86cdb08c7f6",
        callbackURL: "http://localhost:3000/auth/github/callback",
        passReqToCallback: true,
    },
    async (req: Request, 
        accessToken: string, 
        refreshToken: string, 
        profile: Profile, 
        done: (error: any, response?: GitHubAuthResponse) => void) => {
            console.log(profile); // 70% of our grade
        },
);

const passportGitHubStrategy: PassportStrategy = {
    name: 'github',
    strategy: githubStrategy,
};

export default passportGitHubStrategy;
