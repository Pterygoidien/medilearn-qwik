import {
  component$,
  Slot,
  useContextProvider,
  useStore,
  useOnDocument,
  useVisibleTask$,
  $,
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import {
  type IThemeContext,
  ThemeContext,
} from "~/store/themeContext/themeContext";

import Header from "~/components/layout/header/Header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const themeStore = useStore<IThemeContext>(
    {
      theme: "light",
      manualToggle: false,
    },
    { deep: false }
  );

  useContextProvider(ThemeContext, themeStore);

  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      themeStore.theme =
        localStorage.theme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");
      document.documentElement.setAttribute("data-theme", themeStore.theme);
    })
  );
  useVisibleTask$(({ track }) => {
    track(themeStore);
    localStorage.setItem("theme", themeStore.theme);
    document.documentElement.setAttribute("data-theme", themeStore.theme);
  });

  return (
    <>
      <Header />

      <Slot />
    </>
  );
});
