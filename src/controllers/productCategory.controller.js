const ProductCategory = require("../models/productCategory.model");

// Lấy danh sách danh mục sản phẩm
exports.getProductCategories = async (req, res) => {
    try {
        const categories = await ProductCategory.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm danh mục sản phẩm mới
exports.createProductCategory = async (req, res) => {
    try {
        const newCategory = new ProductCategory(req.body);
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật danh mục sản phẩm
exports.updateProductCategory = async (req, res) => {
    try {
        const updatedCategory = await ProductCategory.findOneAndUpdate(
            { id: req.params.id }, // Tìm theo `id` tùy chỉnh
            req.body,
            { new: true } // Trả về kết quả cập nhật mới
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Product category not found" });
        }

        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa danh mục sản phẩm
exports.deleteProductCategory = async (req, res) => {
    try {
        const deletedCategory = await ProductCategory.findOneAndDelete({ id: req.params.id });

        if (!deletedCategory) {
            return res.status(404).json({ message: "Product category not found" });
        }

        res.status(200).json({ message: "Product category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
