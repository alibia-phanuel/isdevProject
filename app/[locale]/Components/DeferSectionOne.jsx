import Testimonial from "./Testimonial";
import OurPartners from "./OurPartners";

function DeferSectionOne() {
  return (
    <>
      <Testimonial />
      <div className="flex justify-center items-center  mx-4 relative ">
        <div className="container flex justify-center items-center flex-col">
          <OurPartners />
        </div>
      </div>
    </>
  );
}

export default DeferSectionOne;
