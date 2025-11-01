# 🚀 MERN Portfolio

A highly aesthetic and animated portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js), featuring advanced animations, particle effects, and modern UI/UX design.

## ✨ Features

### 🎨 Design & Animations
- **Dark Theme** with cyberpunk/futuristic aesthetic
- **Particle Background** with interactive effects
- **Glass Morphism** effects throughout the site
- **Holographic Text** animations
- **3D Cube Animations** and floating elements
- **Smooth Scrolling** and section transitions
- **Responsive Design** for all device types

### 🔧 Technical Features
- **Contact Form** with email functionality
- **Quote Generator** with motivational quotes
- **GPS Location Access** functionality
- **Real-time Animations** using Framer Motion and GSAP
- **Carousel Effects** with glass reflection
- **Interactive Project Cards** with detailed modals
- **Skill Progress Bars** with animated fills

### 📱 Sections Included
- **Hero Section** with 3D hologram cube
- **About Me** with personal details and floating skills
- **Education History** with carousel scroll effects
- **Projects Portfolio** with category filters
- **Certifications** showcase
- **Professional Experience** timeline
- **Technical & Soft Skills** with progress indicators
- **Contact Form** with social media links
- **Professional Footer**

## 🛠️ Tech Stack

### Frontend
- **React** 18+ with hooks
- **Framer Motion** for advanced animations
- **GSAP** for timeline animations
- **Three.js** for 3D effects
- **TSParticles** for particle background
- **AOS (Animate On Scroll)** library
- **React Spring** for physics-based animations
- **React Intersection Observer** for scroll triggers

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Nodemailer** for contact form emails
- **CORS** for cross-origin requests
- **dotenv** for environment variables

### Styling
- **CSS3** with advanced animations
- **CSS Variables** for theme management
- **Flexbox & Grid** layouts
- **Media Queries** for responsiveness
- **Backdrop Filters** for glass effects

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/aesthetic-portfolio.git
cd aesthetic-portfolio
```

### 2. Install Backend Dependencies
```bash
npm install
```

### 3. Install Frontend Dependencies
```bash
cd client
npm install
cd ..
```

### 4. Environment Configuration
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

### 5. Start Development Servers
```bash
# Start both frontend and backend
npm run dev

# Or start them separately
npm run server  # Backend only
npm run client  # Frontend only
```

### 6. Build for Production
```bash
npm run build
npm start
```

## 📧 Email Setup

To enable the contact form functionality:

1. Use Gmail with App Password:
   - Enable 2-Factor Authentication
   - Generate an App Password
   - Use the App Password in `EMAIL_PASS`

2. Or configure with your preferred email service in `server.js`

## 🎯 Customization

### Personal Information
Update the following files with your information:
- `client/src/components/About.js` - Personal details
- `client/src/components/Education.js` - Education history
- `client/src/components/Projects.js` - Your projects
- `client/src/components/Experience.js` - Work experience
- `client/src/components/Skills.js` - Technical skills
- `client/src/components/Contact.js` - Contact information

### Styling & Theme
- Modify CSS variables in `client/src/App.css`
- Update color schemes and gradients
- Customize animations and effects

### Background Images
Replace URLs in components with your preferred images:
- Hero background
- Section cover images
- Project thumbnails

## 🌟 Key Animations & Effects

### Glass Morphism
- Backdrop blur effects
- Translucent containers
- Reflection animations

### Particle System
- Interactive background particles
- Mouse hover effects
- Color transitions

### 3D Elements
- Rotating hologram cube
- Floating animations
- Perspective transforms

### Scroll Animations
- AOS integration
- Intersection Observer triggers
- Staggered element animations

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🔧 Performance Optimizations

- Lazy loading for images
- Code splitting with React
- Optimized animations
- Compressed assets
- Efficient re-renders

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Heroku
```bash
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

### Netlify
1. Build the project: `npm run build`
2. Deploy the `client/build` folder

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **GSAP** for timeline animations
- **Three.js** for 3D effects
- **Unsplash** for background images
- **React Community** for excellent documentation

## 📞 Support

If you have any questions or need help setting up the portfolio:
- Create an issue on GitHub
- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ and lots of ☕ by [Your Name]
