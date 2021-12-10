import getNextConfig from "next/config";

import { RuntimeConfig } from "@/lib/types/config";

export const getConfig = () => {
  return getNextConfig() as RuntimeConfig;
};
