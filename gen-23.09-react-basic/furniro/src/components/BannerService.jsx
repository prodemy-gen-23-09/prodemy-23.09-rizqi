function BannerService() {
  return (
    <div>
      <div className="flex gap-40 bg-color1 justify-center items-center p-16">
        <div className="grid grid-flow-col gap-4 bg-color1 justify-center">
          <div className="row-span-3">
            <img
              src="/src/assets/shop/trophy.png"
              alt="trophy"
              className="w-12 h-12"
            />
          </div>
          <div className="col-span-2 font-bold">High Quality</div>
          <div className="row-span-2 col-span-2">
            crafted from top materials
          </div>
        </div>
        <div className="grid grid-flow-col gap-4 bg-color1 justify-center">
          <div className="row-span-3">
            <img
              src="/src/assets/shop/guarantee.png"
              alt="trophy"
              className="w-12 h-12"
            />
          </div>
          <div className="col-span-2 font-bold">Warranty Protection</div>
          <div className="row-span-2 col-span-2">Over 2 years</div>
        </div>
        <div className="grid grid-flow-col gap-4 bg-color1 justify-center">
          <div className="row-span-3">
            <img
              src="/src/assets/shop/shipping.png"
              alt="trophy"
              className="w-12 h-12"
            />
          </div>
          <div className="col-span-2 font-bold">Free Shipping</div>
          <div className="row-span-2 col-span-2">Order over 150 $</div>
        </div>
        <div className="grid grid-flow-col gap-4 bg-color1 justify-center">
          <div className="row-span-3">
            <img src="/src/assets/shop/cs.png" alt="trophy" className="w-12 h-12" />
          </div>
          <div className="col-span-2 font-bold">24 / 7 Support</div>
          <div className="row-span-2 col-span-2">Dedicated support</div>
        </div>
      </div>
    </div>
  );
}

export default BannerService;
