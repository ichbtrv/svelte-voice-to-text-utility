export interface Note {
  audio_src: string;
  playing: boolean;
  recording: boolean;  
  stopped: boolean;
  counter: number;
  duration: number;
  interval: Interval;
  modalVisible: boolean;
  notesVisible: boolean;
}
