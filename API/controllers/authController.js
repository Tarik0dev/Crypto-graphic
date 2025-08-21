const userModel = require('../models/authModel');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findByCredentials(email, password);

    if (!user) {
      return res.status(401).json({ message: '❌ Identifiants invalides' });
    }

    res.json({
      message: '✅ Utilisateur connecté',
      user
    });
  } catch (err) {
    console.error('Erreur login:', err);
    res.status(500).json({ message: '❌ Erreur serveur' });
  }
};
