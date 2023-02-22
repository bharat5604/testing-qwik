import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const foo = "Hello";

  return (
    <div>
      <button onClick$={() => console.log(foo)}>click</button>
    </div>
  );
});
