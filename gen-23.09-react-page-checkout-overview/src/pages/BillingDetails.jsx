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
            <span className="label-text text-md font-semibold">
              Street Address
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
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">
              Town / City
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
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-md font-semibold">Province</span>
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
            <span className="label-text text-md font-semibold">ZIP Code</span>
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
            <span className="label-text text-md font-semibold">Phone</span>
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
