# Modern Login Page with Node.js Backend

A clean and modern login page with sign-up functionality, now with a Node.js + Express backend for authentication and a protected Tableau Public embed page.

## Features

- Modern and clean UI design
- Node.js + Express backend
- Simple session-based authentication
- Protected Tableau Public dashboard page
- Responsive layout
- Form validation
- Smooth animations
- Sign-up link integration
- Mobile-friendly interface

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Getting Started

### 1. Install dependencies
```
npm install
```

### 2. Start the server
```
npm start
```

### 3. Open in your browser
Go to [http://localhost:3000](http://localhost:3000)

- Login with one of the hardcoded users (see `server.js`)
- After login, you'll be redirected to the Tableau embed page

## Customizing Users
Edit the `users` object in `server.js` to add or change allowed users.

## Customizing Tableau Embed
Edit `tableau.html` and replace the `<iframe>` src with your own Tableau Public viz link.

## Deployment
This project is now a Node.js app and is not suitable for GitHub Pages. Deploy to platforms like Heroku, Render, or Vercel for backend support.

## Project Structure

```
├── index.html      # Main HTML file
├── styles.css      # CSS styles
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## Future Improvements

- Backend integration
- User authentication
- Password recovery
- Social media login options
- Remember me functionality

## Contributing

Feel free to submit issues and enhancement requests! 