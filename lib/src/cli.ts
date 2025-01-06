#!/usr/bin/env node

import { e2pdf } from ".";

/** v8-ignore */
if (process.argv.length > 2) e2pdf(process.argv[2]);
