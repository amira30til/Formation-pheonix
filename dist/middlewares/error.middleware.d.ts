import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class ErrorMiddleware implements ExceptionFilter {
    catch(error: HttpException, host: ArgumentsHost): void;
}
