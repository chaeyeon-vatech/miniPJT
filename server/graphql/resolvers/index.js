import Content from '../../models/content.js';

// resolver에서 mutation을 정의하고 구현하는 걸 보니 가장 중요한 부분이 아닐까 싶다. service 단이라고 생각하자
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
    createContent: async (_, args) => {
      try {
        const content = new Content({
          ...args.contentInput
        })
        const result = await content.save();
        return result;
      } catch (e) {
        throw new Error('Error: ', e);
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

export default resolvers;