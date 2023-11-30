function BannerImageContact() {
  return (
    <div className="relative">
      <img className="w-full min-h-min" src="/src/assets/shop/imgshop.png" />
      <h1 className="absolute text-5xl top-48 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
        Contact
      </h1>
      <p className="absolute text-2xl top-64 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Home {">"} Contact
      </p>
    </div>
  );
}

export default BannerImageContact;
