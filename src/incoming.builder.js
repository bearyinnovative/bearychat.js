class Builder {

  constructor() {
    this.reset();
  }

  reset() {
    this.text = null;
    this.markdown = false;
    this.channel = null;
    this.attachments = [];
  }

  to(channel) {
    this.channel = channel;

    return this;
  }

  withText(text, useMarkdown = false) {
    this.text = text;
    this.markdown = useMarkdown;

    return this;
  }

  withMarkdown(text) {
    return this.withText(text, true);
  }

  withAttachment(attachment) {
    this.attachments.push(attachment);

    return this;
  }

  build() {
    const message = {
      text: this.text,
      markdown: this.markdown,
    };

    if (this.channel) {
      message.channel = this.channel;
    }

    if (this.attachments.length > 0) {
      message.attachments = [];
      this.attachments.forEach((attachment) => {
        if (!attachment.title && !attachment.text) {
          throw new Error('attachment title or text is required');
        }
        message.attachments.push(attachment);
      });
    }

    return message;
  }

}

export default {
  withText: (text, useMarkdown) => (new Builder()).withText(text, useMarkdown),
  withMarkdown: text => (new Builder()).withMarkdown(text),
};
