import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Testimonials = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from {" "}
        <span className="text-purple"> my Supervisors</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards 
            items={testimonials}
            direction="right"
            speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map(({ id, img, name  }) => (
                <div key={id} className="flex md:max-w-40 max-w-32 gap-2">
                    <img src={img}
                         alt={name}
                         className="md:w-30 h-20 rounded-md"  
                    />
                </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Testimonials;
