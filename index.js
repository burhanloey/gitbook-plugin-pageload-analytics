module.exports = {
    hooks: {
        "page": function(page) {
            console.log("Hello! page= " + page);
            return page;
        }
    }
};
