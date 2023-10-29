/** @format */
import AutoDialerStepper from "@/components/features/AutoDialerStepper";
import Automation from "@/components/features/Automation";
import CRMStepper from "@/components/features/CRMStepper";
import HomeSection from "@/components/features/HomeSection";
import ReportingStepper from "@/components/features/ReportingStepper";
import SmsStepper from "@/components/features/SmsStepper";
import SmsTabs from "@/components/features/SmsTabs";
import SocialStepper from "@/components/features/SocialStepper";
import TrainingStepper from "@/components/features/TrainingStepper";
import UnlimitedEmailStepper from "@/components/features/UnlimitedEmailStepper";
import WebsiteStepper from "@/components/features/WebsiteStepper";
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
