const Cards = () => {
  const card = [
    { title: "Mens' Clothing", image: "assets/men's clothing.jpg" },
    { title: "Women's' Clothing", image: "assets/Women's clothing.jpg" },
    { title: "Jewelry", image: "assets/jewelry.jpg" },
    { title: "Electronics", image: "assets/Electronics.jpg" },
  ];
  return (
    <div className="container mx-auto rounded-lg mt-20 ">
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {card.map((item, index) => {
          return (
            <div key={index} className="border rounded-lg">
              <img
                alt="image"
                src={item.image}
                loading="lazy"
                className="h-56 w-full rounded-md object-cover"
              />

              <div className="mt-2 text-center">
                <h2 className="font-semibold text-xl my-4">{item.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
