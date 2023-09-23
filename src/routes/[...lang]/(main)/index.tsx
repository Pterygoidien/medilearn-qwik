import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { useTranslate, Speak } from "qwik-speak";

export interface ICourse {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: {
    imageUrl: string;
    imagAlt: string;
    imageDimensions: {
      width: number;
      height: number;
    };
  };
  categories: any[];
  courseURL: string;
}

export const useCourses = routeLoader$(async () => {
  try {
    const response = await fetch("http://localhost:5000/course", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
    });
    return (await response.json()) as ICourse[];
  } catch (error) {
    return [];
  }
});

export const Home = component$(() => {
  const t = useTranslate();
  return (
    <>
      <h1 class="text-4xl mb-4">{t("home.showcase@@Showcase")}</h1>
    </>
  );
});

export default component$(() => {
  const courses = useCourses();

  return (
    <>
      <section class="container bg-secondary">
        <Speak assets={["home"]}>
          <Home />
        </Speak>

        <ul class="flex gap-4 text-blue-900">
          {courses.value.map((course: ICourse) => {
            return (
              <li
                key={course.id}
                class="flex  flex-col gap-2 bg-white p-2 rounded-lg"
              >
                <Image
                  src={course.image.imageUrl}
                  alt={course.image.imagAlt}
                  width={course.image.imageDimensions.width}
                  height={course.image.imageDimensions.height}
                  class="rounded-lg"
                />
                <h2 class="text-xl">{course.title}</h2>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
