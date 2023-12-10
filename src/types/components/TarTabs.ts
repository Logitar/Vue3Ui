import type { InjectionKey } from "vue";

export const bindTabKey = Symbol() as InjectionKey<(tab: TabOptions) => void>;
export const unbindTabKey = Symbol() as InjectionKey<(tab: TabOptions) => void>;

export type TabOptions = {
  active?: boolean;
  disabled?: boolean;
  id: string;
  title: string;
};
