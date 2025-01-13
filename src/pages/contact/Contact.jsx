const Contact = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-[100vh]">
      <div className="mt-16">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Contact Us</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="email">Name</label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border p-4 pe-12 mt-2 text-sm shadow-sm"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password">Email</label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border p-4 pe-12 mt-2 text-sm shadow-sm"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Message"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Message{" "}
            </label>

            <textarea
              id="Message"
              className="mt-2 p-4 w-full rounded-lg border align-top shadow-sm sm:text-sm"
              rows="8"
              placeholder="Enter any message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-md font-medium text-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
