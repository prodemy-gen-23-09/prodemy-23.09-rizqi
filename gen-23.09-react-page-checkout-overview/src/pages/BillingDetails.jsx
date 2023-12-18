export default function BillingDetails() {
  return (
    <>
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
              name="first_name"
              id="first_name"
              type="text"
              className="input input-bordered w-full"
              autoComplete="first_name"
            />
          </label>
          <label className="form-control w-[250px]">
            <div className="label">
              <span className="label-text text-md font-semibold">
                Last Name
              </span>
            </div>
            <input
              name="last_name"
              id="last_name"
              type="text"
              className="input input-bordered w-full"
              autoComplete="last_name"
            />
          </label>
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">
              Street Address
            </span>
          </div>
          <input
            name="address"
            id="address"
            type="text"
            className="input input-bordered w-full"
            autoComplete="address"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">
              Town / City
            </span>
          </div>
          <input
            name="city"
            id="city"
            type="text"
            className="input input-bordered w-full"
            autoComplete="city"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">Province</span>
          </div>
          <input
            name="province"
            id="province"
            type="text"
            className="input input-bordered w-full"
            autoComplete="province"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">ZIP Code</span>
          </div>
          <input
            name="zipcode"
            id="zipcode"
            type="text"
            className="input input-bordered w-full"
            autoComplete="zipcode"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">Phone</span>
          </div>
          <input
            name="phone"
            id="phone"
            type="number"
            className="input input-bordered w-full"
            autoComplete="phone"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">
              Email Address
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
    </>
  );
}
