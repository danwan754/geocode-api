// return custom error message for errors from Google API requests
function getGoogleErrorMessage(status) {
    let message;
    let logMessage;
    let code;
    switch(status) {
        case 'ZERO_RESULTS':
            message = 'No results found.';
            code = 200;
            break;
        case 'OVER_QUERY_LIMIT':
            message = 'Encountered problem with query limit. Admin is working to fix it.';
            logMessage = 'API calling quota has been reached.';
            code = 421;
            console.log(logMessage);
            break;
        case 'OVER_DAILY_LIMIT':
            message = 'Daily request quota for server, reached. Admin is working to fix it.';
            logMessage = 'Daily API calling quota has been reached.';
            code = 421;
            console.log(logMessage);
            break;
        case 'REQUEST_DENIED':
            message = "Encountered problem in accessing Google's API. Admin is working to fix it.";
            logMessage = 'API key is invalid.';
            code = 421;
            console.log(logMessage);
            break;
        case 'INVALID_REQUEST':
            message = 'Invalid query parameter(s).';
            code = 400;
            break;
        case 'UNKNOWN_ERROR':
            message = 'Unknown error from Google. Please try again.';
            logMessage = 'UKNOWN_ERROR from Google request.'
            code = 421;
            console.log(logMessage);
            break;
        default:
            message = 'Unexpected server error. Please try again.';
            logMessage = 'Unexpected error. This should not be possible.';
            code = 421;
            console.log(logMessage);
    }
    return {
        message,
        code
    };
}


 export default getGoogleErrorMessage;