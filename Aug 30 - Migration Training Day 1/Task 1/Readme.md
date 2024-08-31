
## Monolith Architecture

### Project Overview
This project is a MERN (MongoDB, Express, React, Node.js) monolith application, which combines the backend (Node.js + Express), frontend (React), and database (MongoDB) into a single deployable unit using Docker.

### Prerequisites
- Docker
- Docker Compose

### Project Structure
```
/mern-app
│
├── /backend
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── /routes
│       └── todos.js
│
├── /frontend
│   ├── Dockerfile
│   ├── package.json
│   ├── public
│   └── src
│       └── App.js
│
└── docker-compose.yml
```

### Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd mern-app
   ```

2. **Setup and Run Docker Containers**:
   Build and start the containers using Docker Compose.
   ```bash
   docker-compose up --build
   ```

3. **Access the Application**:
   - **Frontend**: Visit `http://localhost:3000`
   - **Backend API**: Accessible at `http://localhost:5000/api/todos`
   - **MongoDB**: Running on port `27017`

### Stopping the Containers
To stop the running containers, use:
```bash
docker-compose down
```

### Additional Commands
- **Rebuild the Docker containers**:
  ```bash
  docker-compose up --build
  ```

- **View logs**:
  ```bash
  docker-compose logs -f
  ```

---

## Microservices Architecture

### Project Overview
This project is a MERN (MongoDB, Express, React, Node.js) microservices application, where the backend (Node.js + Express), frontend (React), and MongoDB are separated into distinct services managed by Docker.

### Prerequisites
- Docker
- Docker Compose

### Project Structure
```
/mern-app
│
├── /backend
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── /routes
│       └── todos.js
│
├── /frontend
│   ├── Dockerfile
│   ├── package.json
│   ├── public
│   └── src
│       └── App.js
│
└── docker-compose.yml
```

### Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd mern-app
   ```

2. **Backend Service Setup**:
   - Navigate to the backend directory.
   - Install dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Build and start the backend service using Docker.
     ```bash
     docker-compose up --build
     ```

3. **Frontend Service Setup**:
   - Navigate to the frontend directory.
   - Install dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Build and start the frontend service using Docker.
     ```bash
     docker-compose up --build
     ```

4. **MongoDB Service**:
   MongoDB service will be automatically started via Docker Compose.

5. **Access the Application**:
   - **Frontend**: Visit `http://localhost:3000`
   - **Backend API**: Accessible at `http://localhost:5000/api/todos`
   - **MongoDB**: Running on port `27017`

### Stopping the Containers
To stop the running containers, use:
```bash
docker-compose down
```

### Additional Commands
- **Rebuild the Docker containers**:
  ```bash
  docker-compose up --build
  ```

- **View logs**:
  ```bash
  docker-compose logs -f
  ```
