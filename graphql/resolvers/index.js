const Content = require('../../models/content');
const { startSession } = require('mongoose');
const resolvers = {
  Query: {
    async contents(_, args) {
      try {
        const contents = await Content.find();
        return contents;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
  Content: {
    _id(_, args) {
      return _._id;
    },
    title(_, args) {
      return _.title;ß
    },
    content(_, args) {
      return _.content;
    },
    createdAt(_, args) {
      return _.createdAt;
    }
  },
  Mutation: {
    async createContent(_, args) {
      try {
        const content = new Content({
          ...args.contentInput
        })
        const result = await content.save();
        return result;
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  }
};

module.exports = resolvers;