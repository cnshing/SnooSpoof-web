'use client';
/* State managment for generating text */

export type GenerationConfig = {
    username: string
    subreddit: string | undefined
    prompt: string | undefined
    comments_only: boolean
    is_original_content: boolean
    over_18: boolean
  }
  
  export type GeneratedText = GenerationConfig & { response: string | undefined }
  
  export const defaultConfig: GenerationConfig = {
    username: "",
    subreddit: undefined,
    prompt: undefined,
    comments_only: false,
    is_original_content: false,
    over_18: false
  }
  
  export const defaultText: GeneratedText = {
    username: "Snoobot",
    subreddit: "SnooSpoof",
    prompt: "Sorry, but we are unable to retrieve the generated text.",
    response: "¯\_(ツ)_/¯",
    comments_only: false,
    is_original_content: true,
    over_18: false
  }
  
  /*
  From
  https://stackoverflow.com/questions/69464179/how-to-extract-keys-of-certain-type-from-object
  */
  type ObtainKeys<Obj, Type> = {
    [Prop in keyof Obj]: Obj[Prop] extends Type ? Prop : never
  }[keyof Obj]
  
  /**
   * The keys of GenerationConfig, filterable by type T.
   * 
   * @template T If T is specificed, return only the keys of that type in GenerationConfig
   */
  export type GenerationKeys<T = any> = ObtainKeys<GenerationConfig, T>
  export type GenerationValues = GenerationConfig[keyof GenerationConfig]
  
  /**
   * Retrieves the configuration for generating text from local storage. Follows the API types GenerationConfig.
   * @param setting Any setting in GenerationConfig
   * @returns A string representing the requested setting. If no such setting is defined, return an empty string.
   * If multiple settings are requested, return a key-value object of the same expected returns above.
   */
  export function getSetting(setting: GenerationKeys | GenerationKeys[]) {
    function getSingleSetting(setting: GenerationKeys) {
      const value = window.localStorage.getItem(setting)
      return value !== null ? JSON.parse(value) : value;
    }
    if (Array.isArray(setting)) {
      return setting.reduce((settings, eachSetting) => ({ ...settings, [eachSetting]: getSingleSetting(eachSetting) }), {})
    }
    return getSingleSetting(setting);
  }
  
  /**
   * Updates the configuration for generating text to local storage. Follows the API types GenerationConfig.
   * @param setting Any setting in GenerationConfig
   * @param value Any allowed values of the selected setting in GenerationConfig
   */
  export function updateSetting(setting: GenerationKeys, value: GenerationValues) {
    window.localStorage.setItem(setting, JSON.stringify(value));
  }
  
  /**
   * Retrieves the total configuration for generating text from local storage.
   */
  export function getGenerationConfig() {
    return getSetting(Object.keys(defaultConfig))
  }