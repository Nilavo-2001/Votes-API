const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
async function main() {
    await mongoose.connect(`mongodb://localhost/votesAPI`);
    console.log("Connected to Database :: MongoDB");
}
main().catch((err) => {
    console.log("failed to connect ", err);
});

module.exports = mongoose;
