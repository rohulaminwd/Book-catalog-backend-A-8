"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("./user.controller");
const user_validations_1 = require("./user.validations");
const router = express_1.default.Router();
router.get('/', user_controller_1.UserController.getAllFromDB);
router.get('/:id', user_controller_1.UserController.getByIdFromDB);
router.post('/signup', 
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   validateRequest(UserValidation.create),
user_controller_1.UserController.insertIntoDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(user_validations_1.UserValidation.update), user_controller_1.UserController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.deleteFromDB);
exports.userRoutes = router;
