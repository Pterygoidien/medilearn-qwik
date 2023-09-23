/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import type { RenderOptions } from "@builder.io/qwik/server";
import {
  renderToStream,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import { config } from "./utils/qwik-speak/speak-config";
import { isDev } from "@builder.io/qwik/build";
import Root from "./root";

export function extractbase({ serverData }: RenderOptions): string {
  if (!isDev && serverData?.locale) {
    return "/build/" + serverData.locale;
  } else {
    return "/build";
  }
}

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: opts.serverData?.locale || config.defaultLocale.lang,
      dir:
        config.supportedLocales.find((x) => x.lang === opts.serverData?.locale)
          ?.dir ||
        config.defaultLocale.dir ||
        "auto",
      ...opts.containerAttributes,
    },
  });
}
