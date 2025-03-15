# International Transportation Service

A Node.js-based application for managing international transportation services. It allows users to create, track, and manage transportation routes and cargo across different countries. The service is containerized with Docker to simplify deployment and scaling.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Local Setup](#local-setup)
  - [Docker Setup](#docker-setup)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- Create and manage transportation routes.
- Track cargo in real-time across international borders.
- Support for multiple transportation modes (air, sea, road).
- User authentication and role-based access control (admin, dispatcher, client).
- RESTful API for integration with third-party systems.
- Containerized using Docker for easy deployment.

## Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js** (v20 or higher)
- **Docker** (latest version)
- **Docker Compose** (optional but recommended)
- A running instance of a database (PostgreSQL) depending on your configuration.

## Installation

### Local Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/killlakillq/international-transport-service.git
   cd international-transport-service
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a .env file in the root directory of the project and add your environment variables (see [Environment Variables](#environment-variables)).

4. Run the application:

   ```bash
   npm run start:dev
   ```

   The application should now be running on http://localhost:3000.

### Docker Setup

1. Build the Docker image:

   ```bash
   docker build -t transport-service .
   ```

2. Run the Docker container:

   ```bash
   docker run -d -p 3000:3000 --name transport-service transport-service
   ```

   The application will be accessible at http://localhost:3000.

Alternatively, you can use Docker Compose for easier setup:

```bash
docker-compose up -d
```

This will spin up both the app and any dependent services (e.g., databases) defined in the docker-compose.yml file.

## Usage

- Open your browser and go to http://localhost:3000 to access the service.
- Use the API endpoints to create and manage transportation routes, track cargo, and manage user accounts.
- You can integrate the service into other systems using its RESTful API.

## Environment Variables

Create a .env file in the project root and define the following variables:

```bash
DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres?schema=public
LOG_LEVEL=debug
ENV_NAME=local
PORT=3000
NODE_ENV=development
JWT_ACCESS_SECRET=secret
JWT_REFRESH_SECRET=secret
PRETTY_LOGGING=1
MINIO_ENDPOINT=minio_endpoint
MINIO_PORT=minio_port
MINIO_SSL=minio_ssl
MINIO_ACCESS_KEY=minio_access_key
MINIO_SECRET_KEY=minio_secret_key
REDIS_URL=redis://default:default@localhost:6379/0
```

- **DATABASE_URL**: The connection string for your PostgreSQL database, including credentials and database name.
- **LOG_LEVEL**: The level of logging to be used (e.g., `debug`, `info`, `warn`, `error`).
- **ENV_NAME**: The environment name (e.g., `local`, `production`).
- **PORT**: The port number the application will run on.
- **NODE_ENV**: The environment mode for Node.js (e.g., `development`, `production`).
- **JWT_ACCESS_SECRET**: Secret key for signing access JWT tokens.
- **JWT_REFRESH_SECRET**: Secret key for signing refresh JWT tokens.
- **PRETTY_LOGGING**: Boolean (1 or 0) to enable pretty logging output.
- **MINIO_ENDPOINT**: The endpoint for the MinIO service (used for object storage).
- **MINIO_PORT**: The port number for the MinIO service.
- **MINIO_SSL**: SSL configuration for MinIO (e.g., `true` or `false`).
- **MINIO_ACCESS_KEY**: The access key for authenticating with the MinIO service.
- **MINIO_SECRET_KEY**: The secret key for authenticating with the MinIO service.
- **REDIS_URL**: The connection string for your Redis instance.

## API Endpoints

| Method | Endpoint               | Description                       |
| ------ | ---------------------- | --------------------------------- |
| POST   | `/api/routes`          | Create a new transportation route |
| GET    | `/api/routes`          | Get all transportation routes     |
| GET    | `/api/routes/:id`      | Get a specific route by ID        |
| PUT    | `/api/routes/:id`      | Update a transportation route     |
| DELETE | `/api/routes/:id`      | Delete a transportation route     |
| POST   | `/api/auth/register`   | Register a new user               |
| POST   | `/api/auth/login`      | Authenticate a user and get a JWT |
| GET    | `/api/cargo/:id/track` | Track cargo by its ID             |

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
    git checkout -b feature/name
   ```

   Make your changes and commit them:

   ```bash
   git commit -m "Add some feature"
   ```

   Push to the branch:

   ```bash
   git push origin feature/name
   ```

   Submit a pull request.

## Docker Notes

- Development Mode: For development, you can mount your local files into the container for hot reloading using Docker Compose.
- Database Support: Update the docker-compose.yml to include services for PostgreSQL, or any other required services.
- Scaling: Docker Swarm or Kubernetes can be used to scale this service to handle larger loads in production environments.
