const Supplier = require("../models/supplier.model");

// Lấy danh sách nhà cung cấp
exports.getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm nhà cung cấp mới
exports.createSupplier = async (req, res) => {
    try {
        const newSupplier = new Supplier(req.body);
        await newSupplier.save();
        res.status(201).json(newSupplier);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật nhà cung cấp
exports.updateSupplier = async (req, res) => {
    try {
        const updatedSupplier = await Supplier.findOneAndUpdate(
            { id: req.params.id }, // Tìm theo `id` tùy chỉnh
            req.body,
            { new: true } // Trả về kết quả cập nhật mới
        );

        if (!updatedSupplier) {
            return res.status(404).json({ message: "Supplier not found" });
        }

        res.status(200).json(updatedSupplier);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa nhà cung cấp
exports.deleteSupplier = async (req, res) => {
    try {
        const deletedSupplier = await Supplier.findOneAndDelete({ id: req.params.id });

        if (!deletedSupplier) {
            return res.status(404).json({ message: "Supplier not found" });
        }

        res.status(200).json({ message: "Supplier deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
