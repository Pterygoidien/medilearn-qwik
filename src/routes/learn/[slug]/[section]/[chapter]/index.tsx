import { component$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";
import Section from "~/components/layout/containers/Section";

export default component$(() => {
  const { menu } = useContent();
  console.log(menu);

  return (
    <>
      <Section class="flex">Chapitre 1</Section>
    </>
  );
});
