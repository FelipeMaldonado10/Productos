const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  console.log('Auth middleware - Headers:', req.headers);
  const authHeader = req.headers['authorization'];
  console.log('Auth middleware - Authorization header:', authHeader);
  
  const token = authHeader && authHeader.split(' ')[1];
  console.log('Auth middleware - Extracted token:', token ? 'Present' : 'Missing');
  
  if (!token) {
    console.log('Auth middleware - No token provided');
    return res.status(401).json({ error: 'Token requerido' });
  }

  try {
    console.log('Auth middleware - Verifying token with secret:', process.env.JWT_SECRET ? 'Present' : 'Missing');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Auth middleware - Token verified successfully:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log('Auth middleware - Token verification failed:', error.message);
    res.status(403).json({ error: 'Token inválido' });
  }
};
