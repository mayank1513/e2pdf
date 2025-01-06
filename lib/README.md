# Export Website to PDF recursively <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 40px"/>

[![test](https://github.com/mayank1513/e2pdf/actions/workflows/test.yml/badge.svg)](https://github.com/mayank1513/e2pdf/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/aa896ec14c570f3bb274/maintainability)](https://codeclimate.com/github/mayank1513/e2pdf/maintainability) [![codecov](https://codecov.io/gh/mayank1513/e2pdf/graph/badge.svg)](https://codecov.io/gh/mayank1513/e2pdf) [![Version](https://img.shields.io/npm/v/e2pdf.svg?colorB=green)](https://www.npmjs.com/package/e2pdf) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/e2pdf.svg)](https://www.npmjs.com/package/e2pdf) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/e2pdf) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

Export Website to PDF recursively is a comprehensive library designed to unlock the full potential of React 18 server components. It provides customizable loading animation components and a fullscreen loader container, seamlessly integrating with React and Next.js.

✅ Fully Treeshakable (import from `e2pdf/client/loader-container`)

✅ Fully TypeScript Supported

✅ Leverages the power of React 18 Server components

✅ Compatible with all React 18 build systems/tools/frameworks

✅ Documented with [Typedoc](https://mayank1513.github.io/e2pdf) ([Docs](https://mayank1513.github.io/e2pdf))

✅ Examples for Next.js, and Vite

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Star [this repository](https://github.com/mayank1513/e2pdf) and share it with your friends.

## Getting Started

### Installation

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

## Want Lite Version? [![npm bundle size](https://img.shields.io/bundlephobia/minzip/e2pdf-lite)](https://www.npmjs.com/package/e2pdf-lite) [![Version](https://img.shields.io/npm/v/e2pdf-lite.svg?colorB=green)](https://www.npmjs.com/package/e2pdf-lite) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/e2pdf-lite.svg)](https://www.npmjs.com/package/e2pdf-lite)

```bash
pnpm add e2pdf-lite
```

**or**

```bash
npm install e2pdf-lite
```

**or**

```bash
yarn add e2pdf-lite
```

> You need `r18gs` as a peer-dependency

### Import Styles

You can import styles globally or within specific components.

```css
/* globals.css */
@import "e2pdf/dist";
```

```tsx
// layout.tsx
import "e2pdf/dist/index.css";
```

For selective imports:

```css
/* globals.css */
@import "e2pdf/dist/client"; /** required if you are using LoaderContainer */
@import "e2pdf/dist/server/bars/bars1";
```

### Usage

Using loaders is straightforward.

```tsx
import { Bars1 } from "e2pdf/dist/server/bars/bars1";

export default function MyComponent() {
  return someCondition ? <Bars1 /> : <>Something else...</>;
}
```

For detailed API and options, refer to [the API documentation](https://mayank1513.github.io/e2pdf).

**Using LoaderContainer**

`LoaderContainer` is a fullscreen component. You can add this component directly in your layout and then use `useLoader` hook to toggle its visibility.

```tsx
// layout.tsx
<LoaderContainer />
	 ...
```

```tsx
// some other page or component
import { useLoader } from "e2pdf/dist/hooks";

export default MyComponent() {
	const { setLoading } = useLoader();
	useCallback(()=>{
		setLoading(true);
		...do some work
		setLoading(false);
	}, [])
	...
}
```

## License

This library is licensed under the MPL-2.0 open-source license.



> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Please enroll in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsor](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
