import type { RequestHandler } from "@builder.io/qwik-city";

import { config } from "~/utils/qwik-speak/speak-config";

export const onRequest: RequestHandler = ({ params, locale, error }) => {
  const supportedLocale = config.supportedLocales.find(
    (value) => value.lang === params.lang
  );

  //check for 404 error page

  const lang = supportedLocale
    ? supportedLocale.lang
    : !params.lang && config.defaultLocale.lang;

  if (!lang) throw error(404, "Page not found");
  //set Qwik locale
  locale(lang);
};
