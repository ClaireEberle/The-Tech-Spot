const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User,
    {
     onDelete:"CASCADE"
}
)
Post.hasMany(Comment)
User.hasMany(Post)


Comment.belongsTo(User)
Comment.belongsTo(Post, {
    onDelete:"CASCADE"
})


module.exports = {
    User,
    Post,
    Comment
}