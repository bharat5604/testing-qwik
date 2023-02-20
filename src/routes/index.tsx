import { component$, useBrowserVisibleTask$, useStore } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";

export const userList = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

export const getUserDetails = loader$(async () => {
  // const user = await fetch("https://jsonplaceholder.typicode.com/users").then(
  //   (res) => res.json()
  // );
  // console.log(user);

  return {
    users: userList,
  };
});

export default component$(() => {
  const users = getUserDetails();

  return (
    <div>
      <div class="grid grid-cols-4 gap-4">
        {users?.value?.users?.map((item: any) => (
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
