import { IconButton } from "@/components/IconButton";
import { UilArrowLeft } from "@iconscout/react-unicons";

import { theme } from "@/theme";

export const BackButton = () => (
  <IconButton href="/">
    <UilArrowLeft size="2rem" color={theme.colors.black} />
  </IconButton>
);
