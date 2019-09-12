import cheerio from 'cheerio';

export default function applyRootsToImages(html: string) {
  const $ = cheerio.load(html);

  $('img').each((_index, element) => {
    const $element = $(element);

    const attribute = $element.attr('src');

    if (attribute) {
      $element.attr('src', `#${attribute}`);
    }
  });

  return $.html();
}
