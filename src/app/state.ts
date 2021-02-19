import { BehaviorSubject } from "rxjs";

export type Url = string | undefined;
export const url$ = new BehaviorSubject<Url>(undefined);

export type DefinedRegion = { start: number; end: number };
export type TRegion = DefinedRegion | undefined;

export type AppStatus =
  | "idle"
  | "loading"
  | "playingVoice"
  | "recordingVoice"
  | "playingAudio";

export type AppState = {
  status: AppStatus;
  url: string | undefined;
  progress: number;
  region: TRegion;
};
