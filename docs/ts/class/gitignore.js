
export const createGitIgnore = () => {
    const data = `.env
# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
companyFiles/
temp/
keys/

# dotenv environment variables file
.env
.env.test
`;

    return data;
};
