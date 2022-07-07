export function logError<TypeError extends Error>(error: TypeError): TypeError {
    console.error(error.name + ": " + error.message);
    return error;
}