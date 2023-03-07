import { note } from "../stores/note";
import { voiceStore } from "../stores/voice-store";


export const recorder = async () => {

  const initRecorder = async () => {
    let media = [];
    let stream;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;

    try {
     stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    } catch (e) {
      console.log(e);
    }

    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => media.push(e.data);
    mediaRecorder.onstop = () => {
      const blob = new Blob(media, { type: 'audio/wav; codecs=opus' });
      media = [];

      voiceStore.update((vs) => {
        return { ...vs, audio_src: window.URL.createObjectURL(blob) };
      });
    };

    return { mediaRecorder, recognition };
  }

  const { mediaRecorder, recognition } = await initRecorder();

  recognition.onresult = (event) => {
    let noteContent = '';
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;

    let mobileRepeatBug = current === 1 && transcript === event.results[0][0].transcript;

    if (!mobileRepeatBug) {
      noteContent += transcript;
      note.update((n) => n + noteContent);
    }
  };

  const startRecording = () => {
    mediaRecorder.start();
    recognition.start();
    console.log('recording started')
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    recognition.stop();
    console.log('recording stopped')
  };
  
  document.addEventListener('recording:start', startRecording);
  document.addEventListener('recording:stop', stopRecording);

};
  