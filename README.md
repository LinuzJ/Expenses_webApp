<!-- ABOUT THE PROJECT -->

## About The Project

Created a web application for organizing, tracking and visualizing expenses with a friend/roommate.

The web application adds the data of the expenses to a database and visualizes the data with a graph and table.

### Built With

- [Javascript](https://www.javascript.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Sqlite3](https://www.sqlite.org/index.html)
- [Next.js](https://nextjs.org/)

<!-- EXAMPLES -->

## Examples

Adding an expense
![](gif1.gif)

Table functionality
![](gif1.gif)

#### Functionality

- Add expenses into the database (user, what, amount, when)
- Visualize the data in a table
- Ability to sort and delete the data in the table
- Graph visualizing the data over time on the home page

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps. Make sure you have the latest version of Node.js installed.

### Prerequisites

- Node.js
- npm

### Installation

To install and run locally please follow these steps

1. Clone the repo
   ```sh
   https://github.com/LinuzJ/Expenses_webApp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create the database
   ```sh
   sqlite3 expenses.db <schema.sql
   ```
4. Start it up!
   ```sh
   npm run dev
   ```
