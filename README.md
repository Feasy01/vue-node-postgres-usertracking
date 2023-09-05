# vue-node-postgre-usertracking

## Description
Demo of an user activity tracking script
## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Docker**: You need Docker installed on your machine to run this project. You can download and install Docker from [here](https://www.docker.com/get-started).

## Getting Started

To get this project up and running, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Feasy01/vue-node-postgres-usertracking.git
   cd vue-node-postgres-usertracking
   ```

2. **Set Environment Variables:**

Before you can run the project, you need to set up environment variables. Open the `docker-compose.yml` file and change all the required environmental variables to suit your use-case 

3. **Build and Start the Docker Containers:**

Run the following command to build and start the Docker containers for the frontend and backend:

```bash
docker-compose up
```
4. **Access the Application**

Once the containers are up and running, you can access the application by opening a web browser and navigating to http://localhost:80 (default port is set to 80)
