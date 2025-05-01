# DOCKER

The porpuse of this repo is to learn docker while doing some personalized examples with small applications. 

All of the folders will have a Docker file that will describe the docker version they work with. 

## Prerequisites

- Install Docker: [Docker Installation Guide](https://docs.docker.com/get-docker/)
- Basic knowledge of command-line usage.

## How to Use This Repository

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/docker-examples.git
    cd docker-examples
    ```
2. Navigate to the folder of the example you want to run.
3. Build the Docker image:
    ```bash
    docker build -t example-image .
    ```
4. Run the Docker container:
    ```bash
    docker run -p 8080:8080 example-image
    ```

## Folder Structure

- `example1/`: Description of example 1.
- `example2/`: Description of example 2.
- `example3/`: Description of example 3.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.