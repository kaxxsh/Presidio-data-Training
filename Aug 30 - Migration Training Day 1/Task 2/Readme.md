### Repository Migration from AWS CodeCommit to GitHub, GitLab, and Azure DevOps

## Overview

This guide walks you through migrating a repository from AWS CodeCommit to any of the following Git providers: GitHub, GitLab, or Azure DevOps. The process ensures that your repository, including all commits, branches, and tags, is preserved during the migration. The steps also cover setting up remotes and pushing the repository to the new Git provider.

[https://github.com/kaxxsh/Presidio-data-Training](https://github.com/kaxxsh/Presidio-data-Training) (source)
https://dev.azure.com/kameshwaranm/_git/project

## Prerequisites

- Access to the AWS CodeCommit repository.
- Accounts with appropriate permissions on GitHub, GitLab, and/or Azure DevOps.
- Git installed on your local machine.
- AWS CLI configured with access to your CodeCommit repository (optional).

---

## Migration Steps

### 1. Clone the CodeCommit Repository

Start by cloning your AWS CodeCommit repository to your local machine:

```bash
git clone --mirror https://git-codecommit.<region>.amazonaws.com/v1/repos/<repository_name>
cd <repository_name>.git
```

- `--mirror` creates a bare repository that includes all branches, tags, and references.

### 2. Create a New Repository on the Target Git Provider

#### GitHub:
1. Go to [GitHub](https://github.com) and create a new repository.
2. Do not initialize the repository with a README, .gitignore, or license.

#### GitLab:
1. Go to [GitLab](https://gitlab.com) and create a new project.
2. Choose to create a blank project.

#### Azure DevOps:
1. Go to [Azure DevOps](https://dev.azure.com/) and navigate to your project.
2. Create a new repository under the "Repos" section.

### 3. Add the New Remote

Add the remote for your new Git provider:

#### GitHub:
```bash
git remote add github https://github.com/<username>/<repository_name>.git
```

#### GitLab:
```bash
git remote add gitlab https://gitlab.com/<username>/<repository_name>.git
```

#### Azure DevOps:
```bash
git remote add azure https://<organization>@dev.azure.com/<organization>/<project>/_git/<repository_name>
```

### 4. Push the Repository to the New Remote

Push the entire repository, including all branches, tags, and references, to the new Git provider:

#### GitHub:
```bash
git push github --mirror
```

#### GitLab:
```bash
git push gitlab --mirror
```

#### Azure DevOps:
```bash
git push azure --mirror
```

### 5. Verify the Migration

After the push is complete, verify that all branches, commits, and tags are present in the new repository by checking the repository in the web interface of your chosen Git provider.

### 6. Update Local Repository Configurations (Optional)

If you're switching to the new Git provider, you can update your local repository to use the new remote by removing the old remote and renaming the new one:

```bash
git remote remove origin
git remote rename <new_remote_name> origin
```

For example, if you migrated to GitHub:

```bash
git remote remove origin
git remote rename github origin
```

---
