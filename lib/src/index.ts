import fs from "node:fs";
import path from "node:path";
import { Configuration, PlaywrightCrawler, PlaywrightCrawlerOptions } from "crawlee";

export interface E2PdfOptions {
  /**
   * Output directory
   * @default process.cwd()
   */
  out?: string;
  /**
   * PDF options
   * @see https://playwright.dev/docs/api/class-page#page-pdf
   */
  pdf?: {
    /**
     * Display header and footer. Defaults to `false`.
     */
    displayHeaderFooter?: boolean;

    /**
     * HTML template for the print footer. Should use the same format as the
     * [`headerTemplate`](https://playwright.dev/docs/api/class-page#page-pdf-option-header-template).
     */
    footerTemplate?: string;

    /**
     * Paper format. If set, takes priority over
     * [`width`](https://playwright.dev/docs/api/class-page#page-pdf-option-width) or
     * [`height`](https://playwright.dev/docs/api/class-page#page-pdf-option-height) options. Defaults to 'Letter'.
     */
    format?: string;

    /**
     * HTML template for the print header. Should be valid HTML markup with following classes used to inject printing
     * values into them:
     * - `'date'` formatted print date
     * - `'title'` document title
     * - `'url'` document location
     * - `'pageNumber'` current page number
     * - `'totalPages'` total pages in the document
     */
    headerTemplate?: string;

    /**
     * Paper height, accepts values labeled with units.
     */
    height?: string | number;

    /**
     * Paper orientation. Defaults to `false`.
     */
    landscape?: boolean;

    /**
     * Paper margins, defaults to none.
     */
    margin?: {
      /**
       * Top margin, accepts values labeled with units. Defaults to `0`.
       */
      top?: string | number;

      /**
       * Right margin, accepts values labeled with units. Defaults to `0`.
       */
      right?: string | number;

      /**
       * Bottom margin, accepts values labeled with units. Defaults to `0`.
       */
      bottom?: string | number;

      /**
       * Left margin, accepts values labeled with units. Defaults to `0`.
       */
      left?: string | number;
    };

    /**
     * Whether or not to embed the document outline into the PDF. Defaults to `false`.
     */
    outline?: boolean;

    /**
     * Paper ranges to print, e.g., '1-5, 8, 11-13'. Defaults to the empty string, which means print all pages.
     */
    pageRanges?: string;

    /**
     * The file path to save the PDF to. If [`path`](https://playwright.dev/docs/api/class-page#page-pdf-option-path) is a
     * relative path, then it is resolved relative to the current working directory. If no path is provided, the PDF won't
     * be saved to the disk.
     */
    path?: string;

    /**
     * Give any CSS `@page` size declared in the page priority over what is declared in
     * [`width`](https://playwright.dev/docs/api/class-page#page-pdf-option-width) and
     * [`height`](https://playwright.dev/docs/api/class-page#page-pdf-option-height) or
     * [`format`](https://playwright.dev/docs/api/class-page#page-pdf-option-format) options. Defaults to `false`, which
     * will scale the content to fit the paper size.
     */
    preferCSSPageSize?: boolean;

    /**
     * Print background graphics. Defaults to `false`.
     */
    printBackground?: boolean;

    /**
     * Scale of the webpage rendering. Defaults to `1`. Scale amount must be between 0.1 and 2.
     */
    scale?: number;

    /**
     * Whether or not to generate tagged (accessible) PDF. Defaults to `false`.
     */
    tagged?: boolean;

    /**
     * Paper width, accepts values labeled with units.
     */
    width?: string | number;
  };

  /**
   * @see https://crawlee.dev/api/playwright-crawler/class/PlaywrightCrawler
   */
  crawlerOptions?: PlaywrightCrawlerOptions;

  /**
   * @see https://crawlee.dev/api/playwright-crawler/class/PlaywrightCrawler
   */
  crawlerConfig?: Configuration;
}

export const e2pdf = async (url: string, config?: E2PdfOptions) => {
  const crawler = new PlaywrightCrawler(
    {
      ...config?.crawlerOptions,
      // Use the requestHandler to process each of the crawled pages.
      async requestHandler(context) {
        const pdf = await context.page.pdf(config?.pdf);

        const filePath = (
          (config?.out ? config.out + path.sep : "") +
          context.request.loadedUrl.split("://")[1] +
          ".pdf"
        ).replace("/.pdf", "/home.pdf");

        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(filePath, pdf);

        if (config?.crawlerOptions?.requestHandler)
          await config.crawlerOptions.requestHandler(context);
        else await context.enqueueLinks();
      },
    },
    config?.crawlerConfig,
  );

  // Add first URL to the queue and start the crawl.
  await crawler.run([url]);
};

/** v8-ignore */
if (process.argv.length > 2) e2pdf(process.argv[2]);
