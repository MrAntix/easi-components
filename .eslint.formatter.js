module.exports = function (results) {
    results.forEach(result => {
        if (result.errorCount === 0 && result.warningCount === 0) {
            console.log(`${result.filePath}: PASS`);
        }
    });
};