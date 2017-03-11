import create from './message.create';
import deleteMessage from './message.delete';
import query from './message.query';
import updateText from './message.update_text';
import info from './message.info';

export default {
  create,
  delete: deleteMessage,
  query,
  updateText,
  info,
};
