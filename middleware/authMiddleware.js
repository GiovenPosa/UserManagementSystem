// this is where we verify the JWT token
// allows only authenticated users to access certain routes
// rejects requests without a valid token

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).josn({ message: 'Missing token. Unauthorized' });
  }

  try { 
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'dev_secret');
    req.user = decoded; // Attach the decoded token to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token. Forbidden' });
  }
}; 

module.exports = authenticateToken;
// This middleware function checks for the presence of a JWT token in the request headers.