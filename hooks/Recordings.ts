import {ref, onMounted} from "vue";
import WaveSurfer from "wavesurfer.js";
import RecordPlugin from "wavesurfer.js/dist/plugins/record";
import {useChat} from "~/stores/chat";

interface IWave {
  registerPlugin: (plugin: any )=> any
  destroy: () => void
}
interface IRecord{
  isRecording: () => boolean,
  isPaused: () => boolean,
  startRecording: (options: { deviceId: any }) => Promise<void>
  stopRecording: () => void
  on: (event: string, callback: (blob: Blob) => void) => void
}

let wavesurfer: IWave
let record: IRecord
let scrollingWaveform = false
export default function useRecorder() {
  const createWaveSurfer = () => {
    if (wavesurfer) {
      wavesurfer.destroy()
    }
    wavesurfer = WaveSurfer.create({
      container: '#mic',
    })

    record = wavesurfer.registerPlugin(RecordPlugin.create({scrollingWaveform, renderRecordedAudio: false}))
    record.on('record-end', (blob: Blob) => {
      const chatStore = useChat()
      chatStore.file = URL.createObjectURL(blob)
      const wavesurfer = WaveSurfer.create({
        container: '#voiceMessageContainer',
        waveColor: 'rgba(0, 0, 0, 0.6)',
        progressColor: 'rgba(255, 255, 255)',
        cursorWidth: 0,
        barWidth: 4,
        barAlign: 'bottom',
        height: 20,
        interact: true,
        dragToSeek: true,
        normalize: true,
        url: chatStore.file,
      })
    })
  }
  {
    RecordPlugin.getAvailableAudioDevices().then((devices) => {
      devices.forEach((device) => {
        const option = document.createElement('option')
        option.value = device.deviceId
        option.text = device.label || device.deviceId
      })
    })
  }
  const recButton = () => {
    if (record && (record.isRecording() || record.isPaused())) {
      record.stopRecording()
      return
    }
    if(record) {
      record.startRecording({deviceId: null}).then(() => {
        return false
      })
    }
  }
  onMounted(() => {
    createWaveSurfer()
  })
  return{recButton, createWaveSurfer}
}