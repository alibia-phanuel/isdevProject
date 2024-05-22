import Testimonial from "./Testimonial";
import OurPartners from "./OurPartners";

function DeferSectionOne() {
  return (
    <div className="flex justify-center items-center my-6 mx-4 relative max-md:bottom-[300px]">
      <div className="container flex justify-center items-center flex-col">
        <Testimonial />
        <OurPartners />
      </div>
    </div>
  );
}

export default DeferSectionOne;
