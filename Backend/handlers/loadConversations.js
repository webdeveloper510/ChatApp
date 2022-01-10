import Boom from 'boom';
import User from './../db/models/user.js';
import config from '../config.js';
import sanitizeUser from '../helpers/sanitizeUser.js';

export default function (request, reply) {
  User.findOne ({email: request.auth.credentials.email})
    .populate ('conversations')
    .then (user => {
      if (user) {
        const conversations = user.conversations.map (conversation => {
          const friendId = `${user._id}` === conversation.userOneId
            ? conversation.userTwoId
            : conversation.userOneId;
          return {
            id: conversation._id,
            friendId,
          };
        });
        reply (conversations);
      } else {
        reply (Boom.notFound ('Cannot find user'));
      }
    });
}
