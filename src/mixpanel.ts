import mixpanel from "mixpanel-browser";

let hasStarted = false;

const identifyMixpanel = async (id: string) => {
  mixpanel.identify(id);
};

const startMixpanel = async () => {
  hasStarted = true;

  mixpanel.init(import.meta.env.VITE_MIXPANEL_KEY, {
    debug: true,
  });
};

const isMixpanelReady = () => {
  return hasStarted;
};

export { startMixpanel, mixpanel, identifyMixpanel, isMixpanelReady };
