var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },

    // `comment` is an object that stores a comment id
    // The ref property links the ObjectId to the comment model
    // This allows us to populate the Article with an associated comment
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
