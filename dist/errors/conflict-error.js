"use strict";
exports.__esModule = true;
exports.conflictError = void 0;
function conflictError(message) {
    return {
        name: "ConflictError",
        message: message
    };
}
exports.conflictError = conflictError;
