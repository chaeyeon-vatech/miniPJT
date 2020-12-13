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
      return _.title;
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
    },
    removeContent: async (_, args) => {
      try {
        const removedcontent = await Content.findByIdAndRemove(args._id).exec()
        return removedcontent
      } catch (e) {
        throw new Error('Error: ', e)
      }
    },
    updateContent: async (_, {_id,title,content}) => {
      try {
        const updatedContent = await Content.findByIdAndUpdate(_id, {
          $set: {title, content}
        }).exec()
        return updatedContent
      } catch (e) {
        throw new Error('Error: ', e)
      }
    },
    searchOne: async (_, args) => {
      try {
        const searchcontent = await Content.findById(args._id).exec()
        return searchcontent
      } catch (e) {
        throw new Error('Error: ', e)
      }
    },

  }
};

module.exports = resolvers;
