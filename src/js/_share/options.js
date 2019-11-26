export const defaultOptions = {
  theme: "light",
  toolbarPosition: "top",
  shortcut: {
    "toggle-panorama-view": {
      disabled: false
    },
    "activate-next-group": {
      disabled: false
    },
    "activate-previous-group": {
      disabled: false
    },
    "activate-group-n1": { disabled: false },
    "activate-group-n2": { disabled: false },
    "activate-group-n3": { disabled: false },
    "activate-group-n4": { disabled: false },
    "activate-group-n5": { disabled: false },
    "activate-group-n6": { disabled: false },
    "activate-group-n7": { disabled: false },
    "activate-group-n8": { disabled: false },
    "activate-group-n9": { disabled: false }
  }
};

/**
 * Return the current state of the options
 * @return {object} options
 */
export async function loadOptions() {
  const options = await browser.storage.sync.get(defaultOptions);

  return options;
}

export let currentOptions = loadOptions();
