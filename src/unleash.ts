import { UnleashClient } from "unleash-proxy-client";

let clientState: "on" | "off" | "connecting" = "off";

const unleash = new UnleashClient({
  url: import.meta.env.VITE_UNLEASH_URL,
  clientKey: import.meta.env.VITE_UNLEASH_KEY,
  appName: import.meta.env.VITE_UNLEASH_APP_NAME,
  refreshInterval: 5,
});

const identifyUnleash = async (id: string) => {
  await unleash.updateContext({
    userId: id,
  });
};

const startUnleash = async () => {
  if (clientState === "connecting") {
    return;
  }

  clientState = "connecting";

  try {
    await unleash.start();
    clientState = "on";
  } catch (error) {
    clientState = "off";
  }
};

const isUnleashEnabled = async (flag: string) => {
  if (!isUnleashReady()) {
    await startUnleash();
  }

  return unleash.isEnabled(flag);
};

const getUnleashVariant = async (flag: string) => {
  if (!isUnleashReady()) {
    await startUnleash();
  }

  return unleash.getVariant(flag);
};

const isUnleashReady = () => {
  return clientState === "on";
};

export {
  startUnleash,
  unleash,
  identifyUnleash,
  isUnleashReady,
  getUnleashVariant,
  isUnleashEnabled,
};
