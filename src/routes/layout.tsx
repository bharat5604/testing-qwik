import { component$, Slot } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";

import Header from "../components/header/header";

export const useServerTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const serverTime = useServerTimeLoader();
  return (
    <>
      <main>
        <div class="px-10 bg-blue-500">
          <Header />
        </div>
        <section class="p-10">
          <Slot />
        </section>
      </main>
    </>
  );
});
