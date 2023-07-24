"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require('dotenv').config();
exports.config = {
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: process.env.JWT_EXPIRED },
};
//# sourceMappingURL=jwt.config.js.map