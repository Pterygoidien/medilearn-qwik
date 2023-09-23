import { server$ } from "@builder.io/qwik-city";
import type { LoadTranslationFn, Translation, TranslationFn } from "qwik-speak";

const LANG_DIR = "./locales";

/**
 * Translation files are lazy-loaded via dynamic import and will be split into separate chunks during build
 * Keys must be valid variable names
 */
const translationData = import.meta.glob<Translation>("./locales/**/*.json");

/**
 * Using server$, translation data is always accessed on the server
 */

const loadTranslation$: LoadTranslationFn = server$(
  async (lang: string, asset: string) =>
    await translationData[`${LANG_DIR}/${lang}/${asset}.json`]?.()
);

export const translationFn: TranslationFn = {
  loadTranslation$: loadTranslation$, // required
};
