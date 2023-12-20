/* eslint-disable react/prop-types */
export default function Information(props) {
  return (
    <>
    <div className="flex my-16 justify-center items-center gap-16 text-2xl">
          <h1 className="font-semibold hover:text-color1_selected cursor-pointer">
            Description
          </h1>
          <h1 className="hover:text-color1_selected cursor-pointer">
            Additional Information
          </h1>
          <h1 className="hover:text-color1_selected cursor-pointer">
            Reviews 5
          </h1>
        </div>

        <div className="flex flex-col mx-72 gap-10 my-20">
          <p>
            Embodying the raw, wayward spirit of rock and roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its className, the Kilburn is a compact, stout-hearted
            hero with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        <div className="flex justify-center items-center gap-16 mb-12">
          <div className="bg-color1 w-5/12 h-[400px] rounded-lg">
            <img
              src={props.image1}
              alt="imgproduct1"
              className="w-full h-full"
            />
          </div>
          <div className="bg-color1 w-5/12 h-[400px] rounded-lg">
            <img
              src={props.image2}
              alt="imgproduct2"
              className="w-full h-full"
            />
          </div>
        </div>
        </>
  )
}