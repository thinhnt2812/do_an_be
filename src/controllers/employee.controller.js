const Employee = require("../models/employee.model");

// Lấy danh sách nhân viên
exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm nhân viên mới
exports.createEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật nhân viên
exports.updateEmployee = async (req, res) => {
    try {
        // Sử dụng findOneAndUpdate để cập nhật theo trường `id` tùy chỉnh
        const updatedEmployee = await Employee.findOneAndUpdate(
            { id: req.params.id },  // Tìm theo `id` tùy chỉnh
            req.body,
            { new: true }  // Trả về kết quả cập nhật mới
        );

        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa nhân viên
exports.deleteEmployee = async (req, res) => {
    try {
        // Sử dụng findOneAndDelete để xóa theo `id` tùy chỉnh
        const deletedEmployee = await Employee.findOneAndDelete({ id: req.params.id });

        if (!deletedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
