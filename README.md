# Form UI

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![NGINX](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white)

A simple web UI testing project demonstrating form validation, dynamic content display, and responsive design.

## Project Structure

```
src/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
└── script.js           # JavaScript functionality
```

## Features

- Form validation with real-time feedback
- Dynamic content display with reveal/hide functionality
- Responsive design
- Modern UI with clean styling

## Getting Started

### Option 1: Direct Browser
1. Clone the repository:
   ```bash
   git clone git@github.com:luismr/form-ui.git
   ```
2. Open `src/index.html` in your web browser
3. No build process required - it's a simple static website

### Option 2: Using Docker with NGINX
1. Clone the repository:
   ```bash
   git clone git@github.com:luismr/form-ui.git
   ```
2. Navigate to the project directory:
   ```bash
   cd form-ui
   ```
3. Run the NGINX container:
   ```bash
   docker run -d -p 8080:80 -v $(pwd)/src:/usr/share/nginx/html nginx
   ```
4. Open your browser and visit `http://localhost:8080`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details. 