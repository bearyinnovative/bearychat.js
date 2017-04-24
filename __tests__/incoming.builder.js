import { incoming } from '../src';

describe('withText', () => {

  it('contains exactly same text', () => {
    const message = incoming.withText('foo').build();
    expect(message.text).toBe('foo');
  });

  it('uses markdown=false by default', () => {
    const message = incoming.withText('foo').build();
    expect(message.markdown).toBe(false);
  });

  it('sets markdown=true when specified', () => {
    const message = incoming.withText('foo', true).build();
    expect(message.markdown).toBe(true);
  });

});

describe('withMarkdown', () => {

  it('contains exactly same text', () => {
    const message = incoming.withMarkdown('foo').build();
    expect(message.text).toBe('foo');
  });

  it('sets markdown=true', () => {
    const message = incoming.withMarkdown('foo').build();
    expect(message.markdown).toBe(true);
  });

});

describe('withAttachment', () => {

  it('adds new attachments', () => {
    const message = incoming
      .withMarkdown('foo')
      .withAttachment({text: 'bar'})
      .withAttachment({text: 'baz'})
      .build();
    expect(message.attachments.length).toEqual(2);
  });

});

describe('build', () => {

  it('validates attachment structure', () => {
    function buildWithoutTextNorTitle() {
      const message = incoming
        .withText('foo')
        .withAttachment({foo: 'bar'})
        .build();
    }

    expect(buildWithoutTextNorTitle).toThrowError(/title or text is required/);
  });

});
