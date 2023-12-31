import { component$ } from "@builder.io/qwik";

import { Link } from "@builder.io/qwik-city";
import ThemeToggle from "~/components/interactives/ThemeToggle";
import styles from "./Header.module.css";

export default component$(() => {
  return (
    <header class="flex bg-tertiary border-b-4 border-indigo-600">
      <div class="container flex items-center justify-between mx-auto py-4 rounded-b-lg">
        <div id={styles.burgerMenu} class="lg:hidden">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul
            id={styles["burgerMenu__nav"]}
            class="bg-primary flex flex-col gap-4"
          >
            <li>
              <Link href="/">Accueil</Link>
            </li>
          </ul>
        </div>
        Medilearn
        <nav class="flex-grow uppercase font-bold hidden lg:block">
          <ul class="flex gap-3 items-center mx-auto justify-center self-center">
            <li>
              <Link href="/">Accueil</Link>
            </li>
          </ul>
        </nav>
        <div id="toggleSection">
          <ul class="flex items-center gap-3">
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Link
                href="/signup/"
                class="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded hidden lg:block"
              >
                S'enregistrer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
});
