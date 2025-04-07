const ImportGood = require("../models/importGood.model");

// Lấy danh sách hàng nhập
exports.getImportGood = async (req, res) => {
    try {
        const good = await ImportGood.find();
        res.status(200).json(good);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm hàng nhập mới
exports.createImportGood = async (req, res) => {
    try {
        const newGood = new ImportGood(req.body);
        await newGood.save();
        res.status(201).json(newGood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật hàng nhập
exports.updateImportGood = async (req, res) => {
    try {
        const updatedGood = await ImportGood.findOneAndUpdate(
            { id: req.params.id }, // Tìm theo `id` tùy chỉnh
            req.body,
            { new: true } // Trả về kết quả cập nhật mới
        );

        if (!updatedGood) {
            return res.status(404).json({ message: "Import good not found" });
        }

        res.status(200).json(updatedGood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa hàng nhập
exports.deleteImportGood = async (req, res) => {
    try {
        const deletedGood = await ImportGood.findOneAndDelete({ id: req.params.id });

        if (!deletedGood) {
            return res.status(404).json({ message: "Import good not found" });
        }

        res.status(200).json({ message: "Import good deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
