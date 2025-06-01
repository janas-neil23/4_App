const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Hardcoded users (username: password)
const users = {
  'user1': 'password1',
  'user2': 'password2',
  'janas': 'secret123'
};

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));

// Serve static files (login page, css, js)
app.use(express.static(path.join(__dirname)));

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // For demo, use email as username
  if (users[email] && users[email] === password) {
    req.session.user = email;
    return res.redirect('/tableau');
  }
  return res.send('<h2>Login failed. <a href="/">Try again</a></h2>');
});

// Protect /tableau route
app.get('/tableau', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/');
  }
  res.sendFile(path.join(__dirname, 'tableau.html'));
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 