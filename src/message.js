import create from './message.create';
import deleteMessage from './message.delete';
import query from './message.query';
import updateText from './message.update_text';

export default {
  create,
  delete: deleteMessage,
  query,
  updateText,
};
