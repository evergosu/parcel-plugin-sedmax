import cheerio from 'cheerio';

type SsrMenuType = {
  template: string;
  menu: string;
};

export default function insertMenuToTemplate({ menu, template }: SsrMenuType) {
  const $ = cheerio.load(template);

  $('.ssr-menu').replaceWith(menu);

  return $.html();
}
