export const responseMiddleware = (req, res, next) => {

    res.success = (data = null, message = "Success", status = 200) => {
        return res.status(status).json({
            success: true,
            message,
            data,
            errors: null
        });
    };

    res.created = (data = null, message = "Created") => {
        return res.success(data, message, 201);
    };

    res.paginated = (items = [], pagination = {}, message = "Success") => {
        return res.success(items, message, 200, pagination);
    };

    res.error = (message = "Error", status = 500, errors = null, code = null) => {
        return res.status(status).json({
            success: false,
            message,
            code,
            data: null,
            errors
        });
    };

    // ERROR HELPERS //
    const errorResponse = (message, status, code = null, errors = null) => {
        return res.status(status).json({
            success: false,
            message,
            code,
            data: null,
            errors
        });
    };

    res.badRequest = (message = "Bad request", errors = null) => {
        return errorResponse(message, 400, "BAD_REQUEST", errors);
    };

    res.unauthorized = (message = "Unauthorized") => {
        return errorResponse(message, 401, "UNAUTHORIZED");
    };

    res.forbidden = (message = "Access forbidden") => {
        return errorResponse(message, 403, "FORBIDDEN");
    };

    res.notFound = (message = "Resource not found") => {
        return errorResponse(message, 404, "NOT_FOUND");
    };

    res.conflict = (message = "Conflict occurred") => {
        return errorResponse(message, 409, "CONFLICT");
    };

    res.tooManyRequests = (message = "Too many requests") => {
        return errorResponse(message, 429, "RATE_LIMIT");
    };

    res.internalServerError = (message = "Internal server error") => {
        console.error("SERVER ERROR:--", message);
        return errorResponse(message, 500, "SERVER_ERROR");
    };

    res.serviceUnavailable = (message = "Service temporarily unavailable") => {
        return errorResponse(message, 503, "SERVICE_UNAVAILABLE");
    };

    next();
};