const audioCtx = new (window.AudioContext ||
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).webkitAudioContext)();

const loadSound = async (url: string) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return await audioCtx.decodeAudioData(arrayBuffer);
};
//themed_click_1.wav swap_matched_2.wav
//micro_click_5.wav swap_matched_1.wav
//micro_click_6.wav swap_matched_3.wav

//TODO: add more sounds and options to select sound themes
export const sounds = {
  compare: await loadSound("/micro_click_6.wav"),
  swap: await loadSound("/swap_matched_3.wav"),
};

export const playSound = (buffer: AudioBuffer) => {
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.start(0);
};
