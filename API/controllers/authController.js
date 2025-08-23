const userModel = require('../models/authModel');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findByCredentials(email, password);

    if (!user) {
      return res.status(401).json({ message: '❌ Identifiants invalides' });
    }
    const token = jwt.sign(
      { id: user.id, email: user.email },  // payload
      process.env.JWT_SECRET,             // clé secrète (à mettre dans .env)
      { expiresIn: '1h' }                 // durée de vie
    );

    res.json({
      message: '✅ Utilisateur connecté',
      token,
      user
    });
  } catch (err) {
    console.error('Erreur login:', err);
    res.status(500).json({ message: '❌ Erreur serveur' });
  }
};
