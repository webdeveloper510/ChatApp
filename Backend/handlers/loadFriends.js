import Boom from 'boom';
import User from './../db/models/user.js';
import config from '../config.js';
import sanitizeUser from '../helpers/sanitizeUser.js';

export default function (request, reply) {
  User.findOne ({email: request.auth.credentials.email})
    .populate ('friends', 'fullName')
    .then (user => {
      if (user) {
        const mappedFriends = {};
        user.friends.forEach (friend => {
          mappedFriends[friend._id] = friend;
        });
        reply (mappedFriends);
      } else {
        reply (Boom.notFound ('Cannot find user'));
      }
    });
}
