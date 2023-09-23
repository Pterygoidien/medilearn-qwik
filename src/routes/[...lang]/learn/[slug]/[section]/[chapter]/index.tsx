import { component$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";
import Platform from "~/components/layout/containers/Platform";
import Section from "~/components/layout/containers/Section";

export default component$(() => {
  const { menu } = useContent();
  console.log(menu);

  return (
    <Platform>
      <div q:slot="sidebar">Sidebar</div>
      <Section>Chapter1</Section>
    </Platform>
  );
});
