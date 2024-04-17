const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const UserActivity = require('../models/UserActivity');

// Function to record user activity
const logUserActivity = async (username, action) => {
    try {
        const activity = new UserActivity({ username, timestamp: new Date(), action });
        await activity.save();
    } catch (error) {
        console.error('Error: ', error);
    }
};

// Register user
exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const encryptedPass = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: encryptedPass });
        await user.save();
        await logUserActivity(username, 'register');
        res.status(201).json({ message: 'User berhasil terdaftar' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error: ', error });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'User tidak ditemukan' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Password tidak sesuai' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        await logUserActivity(username, 'login');
        res.status(200).json({ message: 'Login berhasil', token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error: ', error });
    }
};

// Logout user
exports.logoutUser = async (req, res) => {
    try {
        await logUserActivity(req.body.username, 'logout');
        res.status(200).json({ message: 'Logout berhasil' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error: ', error });
    }
};

// Check auth user
exports.hasAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Tidak ada token' });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.userId;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(401).json({ message: 'User tidak ditemukan' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error: ', error });
    }
};
