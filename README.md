

---

# Express TypeScript Backend Server

This project is an Express server written in TypeScript, designed to handle form submissions and store them in a JSON file (`db.json`).

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- Git Bash (for Windows users)
- Postman (optional, for API testing)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repository/express-ts-backend.git
   cd express-ts-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Configuration

1. Ensure the project structure looks like this:
   ```
   express-ts-backend/
   ├── src/
   │   ├── index.ts
   │   └── db.json
   ├── node_modules/
   ├── package.json
   ├── package-lock.json
   └── tsconfig.json
   ```

2. Initialize the JSON database:
   - Create a `db.json` file in the `src` directory with the following content:
     ```json
     {
       "submissions": []
     }
     ```

### Running the Server

1. Compile and run the server:
   ```sh
   npx ts-node src/index.ts
   ```
   The server will start and run on `http://localhost:3000`.

## API Endpoints

### 1. Ping Endpoint

- **URL:** `/ping`
- **Method:** GET
- **Description:** Checks if the server is running.
- **Response:**
  ```json
  {
    "success": true
  }
  ```

#### Example (Git Bash)

```sh
curl http://localhost:3000/ping
```

#### Example (Postman)

- Set the method to `GET`
- Enter `http://localhost:3000/ping` in the URL field
- Click `Send`

### 2. Submit Endpoint

- **URL:** `/submit`
- **Method:** POST
- **Description:** Submits form data.
- **Body Parameters:**
  - `name`: string (required)
  - `email`: string (required)
  - `phone`: string (required)
  - `github_link`: string (required)
  - `stopwatch_time`: string (required)
- **Response:**
  ```json
  {
    "success": true
  }
  ```

#### Example (Git Bash)

```sh
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com","phone":"1234567890","github_link":"https://github.com/johndoe","stopwatch_time":"10:30"}' http://localhost:3000/submit
```

#### Example (Postman)

- Set the method to `POST`
- Enter `http://localhost:3000/submit` in the URL field
- Go to the `Body` tab, select `raw`, and choose `JSON` format
- Enter the following JSON:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "github_link": "https://github.com/johndoe",
    "stopwatch_time": "10:30"
  }
  ```
- Click `Send`

### 3. Read Endpoint

- **URL:** `/read`
- **Method:** GET
- **Description:** Retrieves a specific submission by index.
- **Query Parameters:**
  - `index`: number (required)
- **Response:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "github_link": "https://github.com/johndoe",
    "stopwatch_time": "10:30"
  }
  ```

#### Example (Git Bash)

```sh
curl http://localhost:3000/read?index=0
```

#### Example (Postman)

- Set the method to `GET`
- Enter `http://localhost:3000/read?index=0` in the URL field
- Click `Send`

---
