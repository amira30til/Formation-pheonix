"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const error_middleware_1 = require("./middlewares/error.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalFilters(new error_middleware_1.ErrorMiddleware());
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map