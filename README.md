# GitHub Blog 💻
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)

GitHub Blog is a web application that combines technology and simplicity to provide a unique experience for exploring blog posts, based on GitHub repository issues. This project was built with React, TypeScript, and Vite, driven by curiosity and the desire to deepen front-end development skills and API integration. The base layout was provided by [@Rocketseat](https://rocketseat.com.br).

## 📦 Features

### Post Search

- Quickly and efficiently search for posts by title or content.

- Debouncing is used to prevent API overloading, ensuring a smooth experience.

- Ideal for navigating large datasets, with filters applied directly to the API response.

### Post Visualization

- View detailed information for any selected post with dynamic loading.

- Lazy loading ensures only necessary data is fetched, improving performance.

- Smart caching with React Query avoids redundant requests and speeds up interactions.

### Responsiveness

- Designed to adapt perfectly to screens of all sizes.

- Utilizes media queries and flexible units such as rem and % for a consistent visual experience.

## 🛠 Technologies Used

- **React**: For building modern and interactive user interfaces.

- **React Query**: For asynchronous state management and API call optimization.

- **TypeScript**: Provides static typing for more reliable and maintainable code.

- **Vite**: A super-fast build tool for modern projects.

- **React Router**: For intuitive and dynamic navigation between pages.

- **Styled components**: Flexible and efficient CSS-in-JS styling.

- **Axios**: To handle HTTP requests in a simple and powerful way.

- **ESLint and Prettier**: Keep the code clean, beautiful, and consistent.

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/259a1ff7-130d-4be1-a8d8-182e2bbf96ad)
> Homepage wity github profile information and post list


![image](https://github.com/user-attachments/assets/62378758-ac97-4a3e-a3a2-06c95a2e34b2)
> Post detail page

## 🚀 How to Run the Project

### Prerequisites

Before starting, make sure you have:

- Node.js (version 16 or higher)

- A package manager like npm or yarn

### Steps

1. Clone this repository
    ```bash
    git clone https://github.com/guizioliveira/github-blog.git
    cd github-blog
    ```

2. Install dependencies
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables

    Create a `.env` file in the root directory and fill in the required variables. Use the `.env.example` file as a reference.

4. Start the development server
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Access the app

    Open your browser `http://localhost:5173` to see the GitHub Blog in action!

## 📋 Next Steps

- Testing: Implement unit and integration tests to ensure code quality;
- Add comment section in each post;

## 📝 Contributions

Follow the steps below to collaborate:

1. Fork this repository.

2. Create a branch for your feature or fix:
    ```bash
    git checkout -b my-feature
    ```
3. Commit your changes:
    ```bash
    git commit -m 'My new feature'
    ```
4. Push your branch:
    ```bash
    git push origin my-feature
    ```
5. Open a Pull Request and let's review it together!

📝 License

This project is licensed under the MIT License.
