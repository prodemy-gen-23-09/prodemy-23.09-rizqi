import BannerImage from "../components/User/BannerImage";

function Checkout() {
  return (
    <>
      <BannerImage title="Checkout" />
      <div className="flex flex-col mx-[175px] my-[100px] w-[530px] gap-10">
        <h1 className="text-3xl font-bold">Billing Details</h1>
        <div className="flex gap-8">
          <label className="form-control w-[250px]">
            <div className="label">
              <span className="label-text text-md font-semibold">
                First Name
              </span>
            </div>
            <input
              name="email"
              id="email"
              type="email"
              className="input input-bordered w-full"
              autoComplete="email"
            />
          </label>
          <label className="form-control w-[250px]">
            <div className="label">
              <span className="label-text text-md font-semibold">
                Last Name
              </span>
            </div>
            <input
              name="email"
              id="email"
              type="email"
              className="input input-bordered w-full"
              autoComplete="email"
            />
          </label>
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">Last Name</span>
          </div>
          <input
            name="email"
            id="email"
            type="email"
            className="input input-bordered w-full"
            autoComplete="email"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">Last Name</span>
          </div>
          <input
            name="email"
            id="email"
            type="email"
            className="input input-bordered w-full"
            autoComplete="email"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">Last Name</span>
          </div>
          <input
            name="email"
            id="email"
            type="email"
            className="input input-bordered w-full"
            autoComplete="email"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">Last Name</span>
          </div>
          <input
            name="email"
            id="email"
            type="email"
            className="input input-bordered w-full"
            autoComplete="email"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">Last Name</span>
          </div>
          <input
            name="email"
            id="email"
            type="email"
            className="input input-bordered w-full"
            autoComplete="email"
          />
        </label>
      </div>
    </>
  );
}

export default Checkout;
