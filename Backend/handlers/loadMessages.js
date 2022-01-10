import Boom from 'boom';
import Conversation from '../db/models/conversation.js';

export default function (request, reply) {
  Conversation.findById (request.params.conversationId)
    .populate ('messages')
    .then (conversation => {
      if (conversation) {
        reply ({id: conversation._id, messages: conversation.messages});
      } else {
        reply (Boom.notFound ('Cannot find conversations'));
      }
    });
}
