const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;

        if (success) {
            resolve(`Operation completed successfully`);
        } else {
            reject(new Error(`Operation failed`));
        }
    }, 1000);
});


mypromise
    .then(result => console.log(`success:`, result))
    .catch(error => console.error('Error:', error.message));
