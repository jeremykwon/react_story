export const fetchCount = (amount = 1) => {
    return new Promise((resolve) => {
        return setTimeout(() => Promise.reject('111'), 500)
        // return setTimeout(() => resolve({ data: amount }), 500)
    });
};
