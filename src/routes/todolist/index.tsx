import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  loader$,
  action$,
  zod$,
  z,
  Form,
} from "@builder.io/qwik-city";

interface ListItem {
  text: string;
}

export const list: ListItem[] = [];

export const useListLoader = loader$(() => {
  return list;
});

export const useAddToListAction = action$(
  (item) => {
    list.push(item);
    return {
      success: true,
    };
  },
  zod$({
    text: z.string(),
  })
);

export default component$(() => {
  const list = useListLoader();
  const action = useAddToListAction();

  return (
    <div class={"w-[300px] shadow p-4 rounded-lg bg-gray-400 mx-auto"}>
      <h1>Form Action TODO list</h1>
      <ul>
        {list.value.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
      <Form action={action} spaReset class={"mt-3"}>
        <input type="text" name="text" required class={"h-8 rounded "} />
        <button
          type="submit"
          class={"bg-orange-500 h-8 rounded-br-md rounded-tr-md px-2"}
        >
          Add item
        </button>
      </Form>
      {/* <p>This little app works even when JavaScript is disabled.</p> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik TODO",
};
