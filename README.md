# RB Site

![RB Site Logo](https://github.com/KOJIMEISTER/rbsite/blob/main/preview/desktop.png)

## 🚀 Demo

Check out the live demo here: [RB Site Demo](https://rbsite-5d8458.gitlab.io/)

## 📄 Description

RB Site is a responsive one-page website designed to collect customer feedback through an interactive form. Built with modern web technologies, it offers a seamless experience across desktop, tablet, and mobile devices. The project integrates a video player, product slider, and a dynamic feedback form with robust validation and email sending capabilities.

## 📋 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **BEM Methodology:** Maintained with BEM-structured SCSS for scalable and maintainable styles.
- **Swiper.js Slider:** Implemented for mobile-friendly product showcasing.
- **YouTube Video Integration:** Embedded video with custom play controls.
- **Interactive Feedback Form:**
  - **Field Validation:** Real-time validation for name, phone number, and consent checkbox.
  - **Phone Masking:** User-friendly phone number input mask.
  - **AJAX Submission:** Sends form data via POST request to a PHP backend.
  - **PHPMailer Integration:** Validates and sends emails securely.
- **Modern Tooling:**
  - **Webpack:** Bundles assets efficiently.
  - **Composer:** Manages PHP dependencies.
  - **Docker:** Containerizes the application for consistent development and deployment environments.

## 🛠 Technologies

- **Frontend:**
  - HTML5
  - SCSS
  - JavaScript (ES6)
  - Swiper.js
  - Webpack

- **Backend:**
  - PHP 8.4
  - PHPMailer

- **Tools:**
  - Docker & Docker Compose
  - npm
  - Composer

## 📸 Screenshots

### 🌐 Desktop

![Desktop View](https://github.com/KOJIMEISTER/rbsite/blob/main/preview/desktop.png)

### 📱 Tablet

![Tablet View](https://github.com/KOJIMEISTER/rbsite/blob/main/preview/tablet.png)

### 📱 Mobile

![Mobile View](https://github.com/KOJIMEISTER/rbsite/blob/main/preview/mobile.png)

### 📝 Feedback Form

![Feedback Form](https://github.com/KOJIMEISTER/rbsite/blob/main/preview/form.png)

## 🔧 Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/KOJIMEISTER/rbsite.git
   cd rbsite
   ```

2. **Install npm Dependencies:**

   ```bash
   npm install
   ```

3. **Install PHP Dependencies with Composer:**

   ```bash
   composer install
   ```

4. **Build the Frontend Assets:**

   ```bash
   npm run build
   ```

5. **Start the Docker Containers:**

   ```bash
   docker-compose up
   ```

6. **Access the Application:**

   Open your browser and navigate to [http://localhost:80/](http://localhost:80/)

## 🎉 Usage

Once the application is running, you can:

- **View Products:** Browse the product listings and interact with the slider on mobile devices.
- **Watch Video:** Click the "Смотреть видео" button to watch the embedded YouTube video.
- **Submit Feedback:**
  - Click on "Оставить заявку" to open the feedback form.
  - Fill in your name and phone number.
  - Agree to the terms by checking the consent box.
  - Submit the form to send your feedback via email.

## 📂 Project Structure

```
rbsite/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── scss/
│   ├── index.html
│   ├── index.js
│   ├── swiper.js
│   └── phone.js
├── public/
│   ├── dist/
│   └── assets/
├── vendor/
├── docker-compose.yml
├── Dockerfile
├── rbsite.conf
├── submit.php
├── config.php
├── composer.json
├── composer.lock
├── package.json
├── webpack.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m "Add your feature"
   ```

4. **Push to the Branch:**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

Made with ❤️ by [Koji Meister](mailto:kojimeister@yandex.ru)

# Acknowledgments

- [PHPMailer](https://github.com/PHPMailer/PHPMailer)
- [Swiper.js](https://swiperjs.com/)
- [Webpack](https://webpack.js.org/)
- [Docker](https://www.docker.com/)

# Contact

For any inquiries or feedback, feel free to reach out at [kojimeister@yandex.ru](mailto:kojimeister@yandex.ru).

---

*This README was crafted to provide clear and comprehensive information about the RB Site project, ensuring ease of understanding and accessibility for developers and users alike.*
