import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const foo = "hello";
  console.log("test top");

  return (
    <div>
      {/* <p> {foo}</p> */}
      <button onClick$={() => console.log(foo)}>click</button>
    </div>
  );
});
