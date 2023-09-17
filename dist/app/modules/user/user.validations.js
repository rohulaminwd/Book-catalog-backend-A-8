"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        lastName: zod_1.z.string({
            required_error: 'Last name is required',
        }),
        password: zod_1.z.string({
            required_error: 'password is required',
        }),
        profileImage: zod_1.z.string({
            required_error: 'Profile image is required',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
        contactNo: zod_1.z.string({
            required_error: 'Contact no is required',
        }),
        role: zod_1.z.string({
            required_error: 'role is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        studentId: zod_1.z.string().optional(),
        firstName: zod_1.z.string().optional(),
        lastName: zod_1.z.string().optional(),
        middleName: zod_1.z.string().optional(),
        profileImage: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional(),
        gender: zod_1.z.string().optional(),
        bloodGroup: zod_1.z.string().optional(),
        academicSemesterId: zod_1.z.string().optional(),
        academicDepartmentId: zod_1.z.string().optional(),
        academicFacultyId: zod_1.z.string().optional(),
    }),
});
exports.UserValidation = {
    create,
    update,
};
