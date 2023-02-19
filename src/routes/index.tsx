import { component$, useBrowserVisibleTask$, useStore } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";

export const getUserDetails = loader$(async () => {
  const user = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  // console.log(user);

  return {
    users: [...user],
  };
});

export default component$(() => {
  const users = getUserDetails();

  return (
    <div>
      <div class="grid grid-cols-4 gap-4">
        {users?.value?.users?.map((item) => (
          <div class={"shadow rounded-md bg-gray-200 p-4"}>
            <h1 class="text-center font-semibold text-blue-600 text-sm underline">
              {item?.name}
            </h1>
            <ul class={"mt-3 list-disc ml-4"}>
              <li>
                <span class={"font-semibold capitalize"}>user name: </span>
                <i>{item?.username}</i>
              </li>
              <li>
                <span class={"font-semibold capitalize"}>Email: </span>
                <i>{item?.email}</i>
              </li>
              <li>
                <span class={"font-semibold capitalize"}>address: </span>
                <i>{item?.address.city}</i>
              </li>
            </ul>
          </div>
        ))}
      </div>
      {/* adding little test here */}
      <div class="my-20">
        <h1 class="text-center uppercase underline text-orange-400 font-semibold mb-10">
          adding some line here
        </h1>
        <blockquote>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            rerum hic asperiores sequi ipsa debitis fugit nulla nostrum? Est,
            ipsa eos repellendus in voluptatem libero aspernatur neque molestiae
            sint assumenda officiis exercitationem ad, inventore doloremque
            delectus architecto numquam amet laudantium suscipit ex commodi
            perferendis eligendi laboriosam necessitatibus. Tempore alias
            ducimus voluptate? Incidunt quasi ipsa dolor nulla veniam maiores
            assumenda dolores molestias blanditiis corrupti quos labore, harum
            nobis voluptates corporis ducimus molestiae obcaecati doloribus!
            Nemo, recusandae debitis incidunt voluptate iusto ipsam asperiores
            obcaecati magni, voluptatum nulla nostrum sit esse fugiat. Odio
            ullam sit tempore sapiente modi delectus ad soluta dolore,
            voluptatibus sequi rerum natus repellat harum magni hic possimus ea
            provident dolorum ipsa error voluptatem earum. Nisi magni laudantium
            minus officiis! Dicta mollitia aliquid repudiandae, odit nulla,
            suscipit, ex magnam accusantium perspiciatis distinctio quasi!
            Tempora, adipisci accusamus. Labore ea dolorem minima facere porro
            est repudiandae perferendis repellendus voluptatum? Modi deserunt
            accusamus optio magnam alias consectetur praesentium neque, id
            dolore facere cum eaque dolorem ab minima rerum aut ullam odio iusto
            ex laboriosam asperiores nobis laborum ducimus accusantium.
            Voluptatibus necessitatibus quisquam consequuntur asperiores
            cupiditate labore non natus accusamus suscipit! Non doloremque iste
            voluptates dolor? Rerum distinctio voluptatem ullam eligendi magni
            unde? Quos earum deserunt cupiditate nisi quia laborum repellat quam
            ex consequatur provident velit eligendi hic beatae, maxime odit eos
            quis, error numquam, sequi est dicta asperiores ad? Nulla velit
            soluta consequuntur reprehenderit recusandae. Corrupti, labore
            officia maiores non nulla ipsa saepe harum esse nobis libero soluta
            repellat alias deserunt fugit doloribus quae illo ducimus. Libero
            iste repellendus ducimus laudantium error harum ratione ipsa
            corporis mollitia nam tenetur nihil at, beatae unde repellat, quasi
            sint nemo, dicta voluptate doloremque est. Doloribus odio obcaecati
            culpa quibusdam tempora. Veniam obcaecati enim animi nesciunt
            facilis et unde, rem culpa perspiciatis magnam ab praesentium! Modi,
            minima?
          </p>
        </blockquote>
      </div>
      {/* adding little test here */}

      <Todo />
    </div>
  );
});

export const Todo = component$(() => {
  const storeData = useStore({
    todo: [],
  });
  // console.log(users?.value?.users);

  useBrowserVisibleTask$(({ track }) => {
    track(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((result) => {
          storeData.todo = result;
          console.log("result", result);
        });
    });
  });

  // console.log(storeData);
  return (
    <div>
      <h1 class="text-orange-400 underline font-semibold text-center capitalize mb-10">
        api gets called when this section comes in viewport
      </h1>
      <div class="grid grid-cols-4 gap-4">
        {storeData?.todo?.map((item: any) => (
          <div class={"shadow rounded-md bg-gray-200 p-4"}>
            <h1>{item?.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
});
