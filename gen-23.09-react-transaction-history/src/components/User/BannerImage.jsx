/* eslint-disable react/prop-types */
export default function BannerImage(props) {
  return (
    <>
      <img className="w-full min-h-min" src="/src/assets/shop/imgshop.png" />
      <h1 className="absolute text-5xl top-48 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
        {props.title}
      </h1>
    </>
  );
}
