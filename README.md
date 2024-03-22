<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dongdong867/gitblog">
    <img src="/public/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">Gitblog</h2>

  <p align="center">
    A markdown supported blog based on github issues.
    <br />
    <a href="https://gitblog.dongdong867.dev">Project Site</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#development">Development</a></li>
        <li><a href="#deployment">Deployment</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li>
      <a href="#version-control">Version Control</a>
      <ul>
        <li><a href="#branching">Branching</a></li>
        <li><a href="#committing">Committing</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">
  <img src="/public/screenshot.png" alt="Logo" width="600">
</div>

### Built With

- Nextjs (App Routers)
- React
- TailwindCSS
- Shadcn-ui
- GitHub API
- Vercel

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get start with this project, please follow the following instructions.

### Prerequisites

This project uses **[bun](https://bun.sh)** as default package manager.
Follow the installation document on bun's official site or setup your own package manager.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/dongdong867/gitblog.git
   ```

2. Create an `OAuth app` in `GitHub > Settings > Developer Settings` and create a client id and secret.
3. Create a `Next Auth Secret`

   ```sh
   openssl rand -base64 32
   ```

4. Create an `.env.local` file and insert the below items.

   ```properties
   AUTH_GITHUB_ID=<OAUTH_APP_CLIENT_ID>
   AUTH_GITHUB_SECRET=<OAUTH_APP_CLIENT_SECRET>

   NEXTAUTH_SECRET=<NEXT_AUTH_SECRET_CREATED>

   GITHUB_USER_NAME=<GITHUB_USER_NAME_OF_THE_REPO>
   GITHUB_REPO_NAME=<GITHUB_REPO_NAME>
   ```

5. Install packages

   ```sh
   bun install
   ```

### Development

**Before starting the development, please make sure the steps above are completed successfully.**

1. Start the development server.

   ```sh
   bun run dev
   ```

2. Open address [http://localhost:3000](http://localhost:3000) to view the site.

### Deployment

This project is default deployed on **[Vercel](https://vercel.org)**, but there should be no conflict to create a dockerfile or docker-compose file and deploy the project with **[Docker](https://docker.com)**.

**Please remember to add _ALL_ of the properties in your `.env.local` file to the environment variables setting if deploying with vercel.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] GitHub login with the correct scope.
- [x] Post management implemented with GitHub issues.
- [x] User Interface
  - [x] Posts page with infinite scroll.
  - [x] Editable content page that supports markdown language.
  - [x] Form validation when create and edit post.

See the [Dcard Frontend Homework](https://drive.google.com/file/d/1x5l_hC5c26MauhTpACwGaa2nBUDo5uad/view) for a full list of requirements.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FOLDER STRUCTURE -->
## Folder Structure

The folder structure of this project is based on `App Router` from [Next.js](https://nextjs.org), detail is shown in the folder tree below.

```plaintext
gitblog/
|-- public/
|   (Store public assets used in the project. e.g. images, logo)
|-- src/
|   |-- actions/
|   |   (Store all api endpoints and connections)
|   |-- app/
|   |   |-- components/
|   |   |   (Store page specific components)
|   |   |-- manifest.ts
|   |   |   (PWA settings)
|   |   |-- robot.ts
|   |       (Settings for search engine crawlers)
|   |-- components/
|   |   (Globally reusable components)
|   |   |-- ui/
|   |       (shadcn-ui components)
|   |-- lib/
|   |   (Store utilities and package usages)
|   |-- styles/
|   |   (Store all css files)
|   |-- types/
|   |   (Store all general types used in the project)
|   |-- auth.ts
|       (Next Auth settings that handles GitHub OAuth login process)
|-- .env.local
|   (Store environment variables used locally in project)
|-- components.json
    (Shadcn-ui settings)
```

Visit [Next.js Documentation](https://nextjs.org/docs) to see more about folder structure.

## Version Control

### Branching

```plaintext
[BRANCH_TYPE]/[Target/ Intent]
BRANCH_TYPE= [feat, fix, refactor, chore]
```

### Committing

```plaintext
[COMMIT_TYPE](Target/ Intent): Description
COMMIT_TYPE= [feat, fix, style, refactor, chore]
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
