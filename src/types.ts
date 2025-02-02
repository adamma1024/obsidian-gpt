import { AI21Settings, defaultAI21Settings } from "src/models/ai21";
import { ChatGPTSettings, defaultChatGPTSettings } from "src/models/chatGPT";
import { CohereSettings, defaultCohereSettings } from "src/models/cohere";
import { GPT3Settings, defaultGPT3Settings } from "src/models/gpt3";

export const VIEW_TYPE_MODEL_SETTINGS = "gptModelSettings";

export enum SupportedModels {
  CHATGPT = "chatgpt",
  GPT3 = "gpt3",
  AI21 = "ai21",
  COHERE = "cohere",
}

export interface Models {
  chatgpt: {
    settings: ChatGPTSettings;
  };
  gpt3: {
    apiKey: string;
    settings: GPT3Settings;
  };
  ai21: {
    apiKey: string;
    settings: AI21Settings;
  };
  cohere: {
    apiKey: string;
    settings: CohereSettings;
  };
}

export interface HandlerTags {
  openingTag: string;
  closingTag: string;
}

export interface GPTPluginSettings {
  activeModel: SupportedModels;
  models: Models;
  tagCompletions: boolean;
  tagCompletionsHandlerTags: HandlerTags;
  tagPrompts: boolean;
  tagPromptsHandlerTags: HandlerTags;
  tagChatPrompts: boolean;
  tagChatPromptsHandlerTags: HandlerTags;
  tagChatCompletions: boolean;
  tagChatCompletionsHandlerTags: HandlerTags;
  insertToken: string;
  chatSeparator: string;
}

export const DEFAULT_SETTINGS: GPTPluginSettings = {
  activeModel: SupportedModels.GPT3,
  models: {
    chatgpt: {
      settings: defaultChatGPTSettings,
    },
    gpt3: {
      apiKey: "",
      settings: defaultGPT3Settings,
    },
    ai21: {
      apiKey: "",
      settings: defaultAI21Settings,
    },
    cohere: {
      apiKey: "",
      settings: defaultCohereSettings,
    },
  },
  tagCompletions: false,
  tagCompletionsHandlerTags: {
    openingTag: "<Completion>",
    closingTag: "</Completion>",
  },
  tagPrompts: false,
  tagPromptsHandlerTags: {
    openingTag: "<Prompt>",
    closingTag: "</Prompt>",
  },
  tagChatPrompts: false,
  tagChatPromptsHandlerTags: {
    openingTag: "<ChatPrompt>",
    closingTag: "</ChatPrompt>",
  },
  tagChatCompletions: false,
  tagChatCompletionsHandlerTags: {
    openingTag: "<ChatCompletion>",
    closingTag: "</ChatCompletion>",
  },
  insertToken: "[insert]",
  chatSeparator: "===",
};

// Utils

export interface CurrentLineContents {
  lineNumber: number;
  lineContents: string;
}
