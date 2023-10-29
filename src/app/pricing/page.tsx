/** @format */
import { Box } from "@mui/material";
import HomeSection from "@/components/Pricing/HomeSection";
import PricePlan from "@/components/Pricing/PricePlan";
import FreeTrial from "@/components/home/FreeTrial";
import Twilio from "@/components/home/Twilio";
import Footer from "@/components/home/Footer";

export default function pricing() {
  return (
    <Box>
      <HomeSection />
      <PricePlan />
      <Twilio />
      <Box py={5}>
        <FreeTrial />
      </Box>
      <Footer />
    </Box>
  );
}
