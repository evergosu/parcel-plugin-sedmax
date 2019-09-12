import cheerio from 'cheerio';

export default function removeRootSyntax(html: string) {
  const tags = {
    img: 'src',
    script: 'src',
    'link[rel="stylesheet"]': 'href',
  };

  const $ = cheerio.load(html);

  Object.entries(tags).forEach(([tag, attr]) => {
    $(tag).each((_index, element) => {
      const $element = $(element);

      const attribute = $element.attr(attr);

      if (attribute && attribute.startsWith('#')) {
        $element.attr(attr, attribute.slice(1));
      }
    });
  });

  return $.html();
}
