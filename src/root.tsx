import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import { QwikSpeakProvider } from "qwik-speak";
import { config } from "./utils/qwik-speak/speak-config";
import { translationFn } from "./utils/qwik-speak/speak-functions";
import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikSpeakProvider config={config} translationFn={translationFn}>
      <QwikCityProvider>
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <RouterHead />
        </head>
        <body lang="fr" class="bg-secondary dark:text-white">
          <RouterOutlet />
          <ServiceWorkerRegister />
        </body>
      </QwikCityProvider>
    </QwikSpeakProvider>
  );
});
