# Export Website to PDF <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 40px"/>

[![test](https://github.com/mayank1513/e2pdf/actions/workflows/test.yml/badge.svg)](https://github.com/mayank1513/e2pdf/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/aa896ec14c570f3bb274/maintainability)](https://codeclimate.com/github/mayank1513/e2pdf/maintainability) [![codecov](https://codecov.io/gh/mayank1513/e2pdf/graph/badge.svg)](https://codecov.io/gh/mayank1513/e2pdf) [![Version](https://img.shields.io/npm/v/e2pdf.svg?colorB=green)](https://www.npmjs.com/package/e2pdf) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/e2pdf.svg)](https://www.npmjs.com/package/e2pdf) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/e2pdf) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

A tiny, fast, and customizable Node.js library to crawl websites and save all pages as compact, AI-ready PDFs. Use it from the command line or as a module in your Node.js scripts. Perfect for data archiving, offline analysis, and feeding content to AI tools.

## Features

- **Blazing Fast**: Optimized for speed and performance.
- **Lightweight**: Minimal resource usage for crawling and PDF generation.
- **Customizable**: Full control over PDF formatting and crawling behavior.
- **AI-Optimized PDFs**: Compact and structured for AI consumption.
- **Dual Usage**: Use via CLI or integrate into Node.js scripts.

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Star [this repository](https://github.com/mayank1513/e2pdf) and share it with your friends.

## Installation

Install using pnpm, npm, or yarn

```bash
pnpm add e2pdf
```

**_or_**

```bash
npm install e2pdf
```

**_or_**

```bash
yarn add e2pdf
```

## Usage

### Command-Line Usage

To use e2pdf from the command line:

```bash
e2pdf <website-url>
```

For example:

```bash
e2pdf https://example.com
```

This will crawl the website and save all pages as PDFs in the current directory.

### Node.js Script Usage

Here’s an example of using e2pdf in a Node.js script:

```javascript
import e2pdf from "e2pdf";

(async () => {
  await e2pdf("https://example.com", {
    out: "./pdfs",
    pdf: {
      format: "A4",
      printBackground: true,
      margin: { top: "20px", bottom: "20px" },
    },
    crawlerOptions: { maxRequestsPerCrawl: 100 },
  });

  console.log("Crawling completed! PDFs saved to ./pdfs");
})();
```

## API

The `e2pdf` function accepts two arguments:

1. **startUrl** (string): The URL to start crawling from.
2. **options** (E2PdfOptions): Configuration object for crawling and PDF generation.

### E2PdfOptions

#### `out`

- **Type**: `string`
- **Default**: `process.cwd()`
- Directory to save the generated PDFs.

#### `pdf`

PDF generation options (compatible with [Playwright’s PDF options](https://playwright.dev/docs/api/class-page#page-pdf)):

- `displayHeaderFooter`: Display header and footer. Defaults to `false`.
- `footerTemplate`: HTML template for the footer.
- `format`: Paper format (e.g., `A4`, `Letter`). Defaults to `Letter`.
- `headerTemplate`: HTML template for the header.
- `landscape`: Paper orientation. Defaults to `false`.
- `margin`: Margins for the PDF (`top`, `right`, `bottom`, `left`).
- `printBackground`: Print background graphics. Defaults to `false`.
- ...and many more options for fine-tuning PDFs.

#### `crawlerOptions`

Options for the [Crawlee PlaywrightCrawler](https://crawlee.dev/api/playwright-crawler/class/PlaywrightCrawler).

#### `crawlerConfig`

Configuration for Crawlee’s [Configuration](https://crawlee.dev/api/playwright-crawler/class/Configuration) object.

## Contributing

We welcome contributions! Please fork the repository and submit a pull request.

## License

This library is licensed under the MPL-2.0 open-source license.

## Feedback and Support

If you encounter any issues or have suggestions, please open an issue or contact us. We’d love to hear from you!

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Please enroll in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsor](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
