import { HTTP_STATUS  } from "../constants/httpConstants";


/**
 * Base error class for application errors.
 * Extends the built-in Error class to include an error code and status code.
 */
export class AppError extends Error {
    /**
     * Creates a new AppError instance.
     * @param {string} message - The error message.
     * @param {string} code - The error code.
     * @param {number} statusCode - The http response code.
     */
    constructor(
        public message: string,
        public code: string,
        public statusCode: number
    ) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Class representing a repository error.
 * Extends the AppError class for database and data access related errors.
 */
export class RepositoryError extends AppError {
    /**
     * Creates a new RepositoryError instance.
     * @param {string} message - The error message.
     * @param {string} code - The error code.
     * @param {number} statusCode - The http response code.
     */
    constructor(
        message: string,
        code: string = "REPOSITORY_ERROR",
        statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR
    ) {
        super(message, code, statusCode);
    }
}

/**
 * Class representing a service error.
 * Extends the AppError class for business logic related errors.
 */
export class ServiceError extends AppError {
    /**
     * Creates a new ServiceError instance.
     * @param {string} message - The error message.
     * @param {string} code - The error code.
     * @param {number} statusCode - The http response code.
     */
    constructor(
        message: string,
        code: string = "SERVICE_ERROR",
        statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR
    ) {
        super(message, code, statusCode);
    }
}

/**
 * Class representing an authentication error.
 * Extends the AppError class for authentication related errors.
 */
export class AuthenticationError extends AppError {
    /**
     * Creates a new AuthenticationError instance.
     * @param {string} message - The error message.
     * @param {string} code - The error code.
     * @param {number} statusCode - The http response code.
     */
    constructor(
        message: string,
        code: string = "AUTHENTICATION_ERROR",
        statusCode: number = HTTP_STATUS.UNAUTHORIZED
    ) {
        super(message, code, statusCode);
    }
}

/**
 * Class representing an authorization error.
 * Extends the AppError class for authorization related errors.
 */
export class AuthorizationError extends AppError {
    /**
     * Creates a new AuthorizationError instance.
     * @param {string} message - The error message.
     * @param {string} code - The error code.
     * @param {number} statusCode - The http response code.
     */
    constructor(
        message: string,
        code: string = "AUTHORIZATION_ERROR",
        statusCode: number = HTTP_STATUS.FORBIDDEN
    ) {
        super(message, code, statusCode);
    }
}