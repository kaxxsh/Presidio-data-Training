# Airflow Project

## Overview

Welcome to this Airflow project, initialized using the Astronomer CLI. This project is designed to help you run Apache Airflow locally for orchestrating complex workflows. The following documentation provides a comprehensive guide to the structure of the project and how to set up and deploy it.

## Project Structure

Your project is organized as follows:

- **dags/**: Contains the Python files for your Airflow DAGs (Directed Acyclic Graphs). These scripts define the workflows and tasks that Airflow will execute.
    - Example DAGs:
        - `example_dag_basic`: A simple ETL pipeline with three TaskFlow API tasks.
        - `example_dag_advanced`: Demonstrates advanced Airflow features like branching, task groups, and various operators.
- **Dockerfile**: Specifies the Astro Runtime Docker image, which provides a tailored Airflow experience. You can customize runtime commands here.
- **include/**: A directory for additional files that you might need to include in your project.
- **packages.txt**: List OS-level packages needed for your project. It is empty by default.
- **requirements.txt**: List Python packages required for your project. It is empty by default.
- **plugins/**: Add custom or community plugins here.
- **airflow_settings.yaml**: Define local-only Airflow Connections, Variables, and Pools instead of using the Airflow UI.

## Getting Started

### Prerequisites

- Docker installed on your machine.
- Astronomer CLI installed for managing the project.

### Running Airflow Locally

1. **Start Airflow**: Run the following command to spin up the Airflow environment:

    ```sh
    astro dev start
    ```

   This will create four Docker containers:
   - **Postgres**: The Airflow metadata database.
   - **Webserver**: Renders the Airflow UI.
   - **Scheduler**: Monitors and triggers tasks.
   - **Triggerer**: Handles deferred tasks.

2. **Verify Containers**: Ensure all containers are running by executing:

    ```sh
    docker ps
    ```

3. **Access Airflow UI**: Visit [http://localhost:8080/](http://localhost:8080/) and log in with `admin` as both the username and password.

4. **Access Postgres**: The Postgres database can be accessed at `localhost:5432/postgres`.

### Deploying to Astronomer

If you have an Astronomer account, you can easily deploy this project by following the instructions in the [Astronomer documentation](https://docs.astronomer.io/cloud/deploy-code/).

## Contributing

Contributions to improve the DAGs, Dockerfile, or any other part of this project are welcome. Please follow the standard Git workflow:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## Contact

Maintained with love by the Astronomer team. For support, reporting bugs, or suggesting changes, please reach out through the official support channels.