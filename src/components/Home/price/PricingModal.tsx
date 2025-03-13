"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PricingForm from "./PricingForm";
import PricingDetails from "./PricingDetails";

const PricingModal = ({
  smsQuantityStarter,
  smsQuantityMonthly,
  item,
}: {
  item: any;
  smsQuantityStarter: any;
  smsQuantityMonthly: any;
}) => {
  return (
    <Dialog>
      <DialogTrigger
        className={`w-full bg-sky-500 hover:bg-sky-600  text-white py-2 cursor-pointer rounded-lg mt-4`}
      >
        {item.id !== 3 ? "Buy Now" : "Contact Us"}
      </DialogTrigger>
      <DialogContent>
        <div className="mx-auto max-w-xs">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {item.id !== 3 && (
                <CarouselItem className="p-4 rounded-lg text-white flex items-center justify-center ">
                  <PricingDetails
                    item={item}
                    smsQuantityMonthly={smsQuantityMonthly}
                    smsQuantityStarter={smsQuantityStarter}
                  />
                </CarouselItem>
              )}
              {/* details */}

              {/*pricing form */}
              <CarouselItem>
                <PricingForm
                  item={item}
                  smsQuantityMonthly={smsQuantityMonthly}
                  smsQuantityStarter={smsQuantityStarter}
                />
              </CarouselItem>
            </CarouselContent>
            {item.id !== 3 && (
              <div className="flex items-center justify-center space-x-4 mt-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            )}
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
