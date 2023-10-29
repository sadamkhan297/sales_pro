/** @format */
import Frequently from "@/components/Enterprise/Frequently";
import HomeSection from "@/components/Enterprise/HomeSection";
import PricePlan from "@/components/Pricing/PricePlan";
import Footer from "@/components/home/Footer";
import Twilio from "@/components/home/Twilio";
import { Box } from "@mui/material";

export default function enterprise() {
  return (
    <Box>
      <HomeSection />
      <PricePlan />
      <Twilio />
      <Frequently />
      <Footer />
    </Box>
  );
}
