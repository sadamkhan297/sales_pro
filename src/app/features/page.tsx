/** @format */
import AutoDialerStepper from "@/components/Features/AutoDialerStepper";
import Automation from "@/components/Features/Automation";
import CRMStepper from "@/components/Features/CRMStepper";
import HomeSection from "@/components/Features/HomeSection";
import ReportingStepper from "@/components/Features/ReportingStepper";
import SmsStepper from "@/components/Features/SmsStepper";
import SmsTabs from "@/components/Features/SmsTabs";
import SocialStepper from "@/components/Features/SocialStepper";
import TrainingStepper from "@/components/Features/TrainingStepper";
import UnlimitedEmailStepper from "@/components/Features/UnlimitedEmailStepper";
import WebsiteStepper from "@/components/Features/WebsiteStepper";
import FreeTrial from "@/components/home/FreeTrial";
import { Box } from "@mui/material";

export default function features() {
  return (
    <Box>
      <HomeSection />
      <SmsTabs />
      <SmsStepper />
      <AutoDialerStepper />
      <UnlimitedEmailStepper />
      <ReportingStepper />
      <TrainingStepper />
      <Automation />
      <CRMStepper />
      <WebsiteStepper />
      <SocialStepper />
      <FreeTrial />
    </Box>
  );
}
