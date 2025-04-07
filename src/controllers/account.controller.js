const Account = require("../models/account.model");

// Lấy danh sách tài khoản
exports.getAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm tài khoản mới
exports.createAccount = async (req, res) => {
    try {
        const newAccount = new Account(req.body);
        await newAccount.save();
        res.status(201).json(newAccount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật tài khoản
exports.updateAccount = async (req, res) => {
    try {
        // Sử dụng findOneAndUpdate để cập nhật theo trường `id` tùy chỉnh
        const updatedAccount = await Account.findOneAndUpdate(
            { id: req.params.id },  // Tìm theo `id` tùy chỉnh
            req.body,
            { new: true }  // Trả về kết quả cập nhật mới
        );

        if (!updatedAccount) {
            return res.status(404).json({ message: "Account not found" });
        }

        res.status(200).json(updatedAccount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa tài khoản
exports.deleteAccount = async (req, res) => {
    try {
        // Sử dụng findOneAndDelete để xóa theo `id` tùy chỉnh
        const deletedAccount = await Account.findOneAndDelete({ id: req.params.id });

        if (!deletedAccount) {
            return res.status(404).json({ message: "Account not found" });
        }

        res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Đăng nhập tài khoản
exports.loginAccount = async (req, res) => {
    try {
        const { loginname, password } = req.body;  // Lấy dữ liệu từ frontend

        // Tìm tài khoản theo loginname và password
        const user = await Account.findOne({ loginname, password });

        if (!user) {
            return res.status(401).json({ message: "Sai tên đăng nhập hoặc mật khẩu!" });
        }

        if (user.status !== "Đang hoạt động") {
            return res.status(403).json({ message: "Tài khoản đã bị khóa!" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

