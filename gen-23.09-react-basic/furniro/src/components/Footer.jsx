function Footer() {
  return (
    <div>
      <div className="flex mx-[100px] my-16">
        <div className="flex-col w-80">
          <h1 className="text-4xl font-bold">Funiro.</h1>
          <p className="mt-20">400 University Drive Suite 200 Coral Gables,</p>
          <p>FL 33134 USA</p>
        </div>
        <div className="flex-col w-80 ml-64">
          <h1 className="text-md">Link</h1>
          <div className="flex flex-col gap-8 mt-20">
            <a href="/" className="font-semibold hover:text-color1_selected"
              >Home</a
            >
            <a href="/" className="font-semibold hover:text-color1_selected"
              >Shop</a
            >
            <a href="/" className="font-semibold hover:text-color1_selected"
              >About</a
            >
            <a href="/" className="font-semibold hover:text-color1_selected"
              >Contact</a
            >
          </div>
        </div>
        <div className="flex-col w-80 ml-24">
          <h1 className="text-md">Help</h1>
          <div className="flex flex-col gap-8 mt-20">
            <a href="/" className="font-semibold hover:text-color1_selected"
              >Payment Options</a
            >
            <a href="/" className="font-semibold hover:text-color1_selected"
              >Returns</a
            >
            <a href="/" className="font-semibold hover:text-color1_selected"
              >Privacy Policies</a
            >
          </div>
        </div>
        <div className="flex-col w-80 ml-36">
          <h1 className="text-md">Newsletter</h1>
          <div className="flex gap-8 mt-20">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="border-b-2 border-black"
            />
            <button className="border-b-2 border-black hover:bg-gray-200">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <hr />
      <p className="ml-[100px] my-6">2023 furino. All rights reverved</p>
      </div>
  )
}

export default Footer