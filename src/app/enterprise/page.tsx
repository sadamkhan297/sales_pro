/** @format */
import Frequently from "@/components/enterprise/Frequently";
import HomeSection from "@/components/enterprise/HomeSection";
import PricePlan from "@/components/pricing/PricePlan";
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
