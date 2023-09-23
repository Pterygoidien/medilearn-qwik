import type { SpeakConfig } from "qwik-speak";

export const config: SpeakConfig = {
  defaultLocale: {
    lang: "fr",
    currency: "EUR",
    timeZone: "Europe/Paris",
  },
  supportedLocales: [
    {
      lang: "fr",
      currency: "EUR",
      timeZone: "Europe/Paris",
    },
    {
      lang: "en",
      timeZone: "UK/London",
      currency: "GBP",
    },
    {
      lang: "es",
      timeZone: "Europe/Madrid",
      currency: "EUR",
    },
  ],
  assets: ["app"],
  runtimeAssets: ["runtime"],
};
