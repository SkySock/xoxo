function mockApiCall(
    data,
    { customErrors = [], errorRate = 0.1, maxRequestTime = 3000 } = {}
) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            if (Math.random() < errorRate) {
                const errors = [new Error(), ...customErrors];
                const error = errors[Math.floor(Math.random() * errors.length)];
                reject(error);
            } else {
                resolve(data);
            }
       }, Math.random() * maxRequestTime);
    });
}

export default mockApiCall;