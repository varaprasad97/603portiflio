# Portfolio Website

A full-stack portfolio website built with React.js frontend and Node.js/Express.js backend with MongoDB database.

## Features

- **Responsive Design**: Modern, mobile-friendly UI with smooth animations
- **Contact Management**: Contact form with admin panel to manage submissions
- **Portfolio Sections**: About, Skills, Projects, Education, Certifications
- **Admin Dashboard**: Manage contact submissions with status tracking
- **Real-time Updates**: Live status updates for contact submissions

## Tech Stack

### Frontend
- React.js 18
- Framer Motion (animations)
- Axios (API calls)
- React Icons
- Tailwind CSS (styling)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- Nodemailer (email functionality)
- JWT (authentication)
- CORS

## Project Structure

```
MY-portfolio/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API services
│   │   └── ...
│   └── package.json
├── backend/                  # Node.js backend application
│   ├── controllers/         # Route controllers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   └── server.js           # Main server file
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Git

### Backend Setup

1. Navigate to backend directory:
```bash
cd MY-portfolio/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the development server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd MY-portfolio/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Contact Routes
- `POST /api/contact/submit` - Submit a new contact
- `GET /api/contact/admin/contacts` - Get all contacts (admin)
- `PATCH /api/contact/admin/contacts/:id` - Update contact status (admin)

### Portfolio Routes
- `GET /api/portfolio/summary` - Get portfolio summary
- `GET /api/portfolio/competencies` - Get skills/competencies
- `GET /api/portfolio/projects` - Get projects
- `GET /api/portfolio/certifications` - Get certifications

## Deployment

### Backend Deployment
The backend can be deployed to platforms like:
- Heroku
- Railway
- Render
- DigitalOcean

### Frontend Deployment
The frontend can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or support, please open an issue in the GitHub repository. 