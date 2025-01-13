import { useContext } from "react";
import { StoreCard } from "../../store/Store";

const Filter = () => {
  const { filtration } = useContext(StoreCard);
  const filter = [
    { title: "All", category: "all" },
    { title: "Men's clothing", category: "men's clothing" },
    { title: "Woman's clothing", category: "women's clothing" },
    { title: "Jewelery", category: "jewelery" },
    { title: "Electronics", category: "electronics" },
  ];
  return (
    <section className="container mx-auto text-center my-10">
      <h2 className="text-6xl mb-8">Latest Products</h2>
      <hr />

      <div className="flex flex-wrap justify-center gap-8 my-12">
        {filter.map((filter, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                filtration(filter.category);
              }}
              className="border border-black px-4 py-2 cursor-pointer"
            >
              <h3>{filter.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Filter;
