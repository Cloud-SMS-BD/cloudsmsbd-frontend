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
  const isBusiness = item.id === 3;
  return (
    <Dialog>
      <DialogTrigger
        className={`w-full bg-sky-500 hover:bg-sky-600  text-white py-2 cursor-pointer rounded-lg mt-4`}
      >
        {!isBusiness ? "Buy Now" : "Contact Us"}
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Carousel className="">
          <CarouselContent >
            {!isBusiness && (
              <CarouselItem className="flex items-center justify-center w-full">
                <PricingDetails
                  item={item}
                  smsQuantityMonthly={smsQuantityMonthly}
                  smsQuantityStarter={smsQuantityStarter}
                />
              </CarouselItem>
            )}
            {/* details */}

            {/*pricing form */}
            <CarouselItem className="flex items-center justify-center w-full">
              <PricingForm
                item={item}
                smsQuantityMonthly={smsQuantityMonthly}
                smsQuantityStarter={smsQuantityStarter}
                isBusiness={isBusiness}
              />
            </CarouselItem>
          </CarouselContent>
          {!isBusiness && (
            <div className="flex items-center justify-center space-x-4  mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
