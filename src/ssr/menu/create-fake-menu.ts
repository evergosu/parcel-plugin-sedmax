import cheerio from 'cheerio';

export default function createFakeMenu({ proxyUrl }: { proxyUrl: string }) {
  const $fake = cheerio.load('<div />');

  $fake('div')
    .css('width', '100%')
    .css('height', '46px')
    .css('display', 'flex')
    .css('color', '#faad14')
    .css('font-weight', '700')
    .css('align-items', 'center')
    .css('justify-content', 'center')
    .css('background-color', '#323232')
    .text(`Something went wrong. Please update SED_UI service at ${proxyUrl}`);

  $fake('div').append('<div id="combine" />');

  $fake('#combine')
    .css('top', '1em')
    .css('right', '1em')
    .css('display', 'flex')
    .css('position', 'absolute')
    .css('list-style-type', 'none')
    .css('justify-content', 'space-between');

  $fake('#combine').append('<span class="dropdown-notification" />');

  $fake('#combine').append('<span id="clock" />');

  $fake('#clock').css('color', '#fff');

  return $fake.html();
}
