import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  outDir: "dist",
  manifest: {
    name: "TabRegex",
    short_name: "TabRegex",
    action: {
      default_title: 'TabRegex',
    },
    author: {
      email: "tabregex@googlegroups.com"
    },
    description: "A Browser Extension for bulk manipulation of Tabs using RegExp.",
    permissions: ["tabs"],
    "content_security_policy": {
      "extension_pages": "script-src 'self' 'wasm-unsafe-eval'; object-src 'self' 'wasm-unsafe-eval'; worker-src 'self' 'wasm-unsafe-eval';"
    },
  }
});
