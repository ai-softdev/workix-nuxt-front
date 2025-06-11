import axios from '~/composables/axios'
import nuxtStorage from "nuxt-storage/nuxt-storage";

export type TEventInput = Event & {target: HTMLInputElement}

export const uploadImage = (event: TEventInput, item: any): void => {
  item.file = event
  if (event.type === 'image/svg+xml' || event.type === 'image/jpeg' || event.type === 'image/jpg' || event.type === 'image/png' || event.type === 'image/webp') {
    item.src = URL.createObjectURL(item.file);
  } else {
    setTimeout(() => {
      item.fileChecked = true
    }, 0)
    setTimeout(() => {
      item.fileChecked = false
    }, 3000)
    item.src = ''
    item.file = ''
  }
}

export const uploadFile = (event: TEventInput, item: any): void => {
  item.file = event
  if (event.type) {
    item.src = URL.createObjectURL(item.file)
    if (item.file.size == 0) {
      setTimeout(() => {
        item.fileSizeInfo = true
      }, 0)
      setTimeout(() => {
        item.fileSizeInfo = false
        item.file = ''
        item.src = ''
      }, 3000)
    }
  }
}

const forceFileDownload = (res: any, item: any): void => {
  const url = window.URL.createObjectURL(new Blob([res.data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `${item.file_name}`)
  document.body.appendChild(link)
  link.click()
}

export const downloadWithAxios = (item: any): void => {
  axios.get(`download${item.file}`, {
    headers: {
      Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
    }
  }).then(res => {
    forceFileDownload(res, item)
  })
}
export const setFocus = (value: any) => {
  nextTick(() => {
    value.focus()
  })
}


export const clearTimer = (recordingVoice: boolean, clicker: NodeJS.Timeout | null): void => {
  if(clicker !== null) {
    clearTimeout(clicker)
    clicker = null
    recordingVoice
  }
}

export const viewSelect = [
  {
    label: 'Список',
    icon: 'i-heroicons-list-bullet',
    type: 'list',
    svg: '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M16.5 2.16602H7.33333M16.5 13.8327H7.33333M16.5 7.99935H7.33333M4 2.16602C4 2.85637 3.44036 3.41602 2.75 3.41602C2.05964 3.41602 1.5 2.85637 1.5 2.16602C1.5 1.47566 2.05964 0.916016 2.75 0.916016C3.44036 0.916016 4 1.47566 4 2.16602ZM4 13.8327C4 14.523 3.44036 15.0827 2.75 15.0827C2.05964 15.0827 1.5 14.523 1.5 13.8327C1.5 13.1423 2.05964 12.5827 2.75 12.5827C3.44036 12.5827 4 13.1423 4 13.8327ZM4 7.99935C4 8.68968 3.44036 9.24935 2.75 9.24935C2.05964 9.24935 1.5 8.68968 1.5 7.99935C1.5 7.30902 2.05964 6.74935 2.75 6.74935C3.44036 6.74935 4 7.30902 4 7.99935Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>'
  },
  {
    label: 'Плитка',
    icon: 'i-heroicons-squares-2x2',
    type: 'tile',
    svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M9.99984 5.00065C10.4601 5.00065 10.8332 4.62755 10.8332 4.16732C10.8332 3.70708 10.4601 3.33398 9.99984 3.33398C9.53959 3.33398 9.1665 3.70708 9.1665 4.16732C9.1665 4.62755 9.53959 5.00065 9.99984 5.00065Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M9.99984 10.8327C10.4601 10.8327 10.8332 10.4596 10.8332 9.99935C10.8332 9.5391 10.4601 9.16602 9.99984 9.16602C9.53959 9.16602 9.1665 9.5391 9.1665 9.99935C9.1665 10.4596 9.53959 10.8327 9.99984 10.8327Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M9.99984 16.6667C10.4601 16.6667 10.8332 16.2936 10.8332 15.8333C10.8332 15.3731 10.4601 15 9.99984 15C9.53959 15 9.1665 15.3731 9.1665 15.8333C9.1665 16.2936 9.53959 16.6667 9.99984 16.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M15.8333 5.00065C16.2936 5.00065 16.6667 4.62755 16.6667 4.16732C16.6667 3.70708 16.2936 3.33398 15.8333 3.33398C15.3731 3.33398 15 3.70708 15 4.16732C15 4.62755 15.3731 5.00065 15.8333 5.00065Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M15.8333 10.8327C16.2936 10.8327 16.6667 10.4596 16.6667 9.99935C16.6667 9.5391 16.2936 9.16602 15.8333 9.16602C15.3731 9.16602 15 9.5391 15 9.99935C15 10.4596 15.3731 10.8327 15.8333 10.8327Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M15.8333 16.6667C16.2936 16.6667 16.6667 16.2936 16.6667 15.8333C16.6667 15.3731 16.2936 15 15.8333 15C15.3731 15 15 15.3731 15 15.8333C15 16.2936 15.3731 16.6667 15.8333 16.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M4.16683 5.00065C4.62706 5.00065 5.00016 4.62755 5.00016 4.16732C5.00016 3.70708 4.62706 3.33398 4.16683 3.33398C3.7066 3.33398 3.3335 3.70708 3.3335 4.16732C3.3335 4.62755 3.7066 5.00065 4.16683 5.00065Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M4.16683 10.8327C4.62706 10.8327 5.00016 10.4596 5.00016 9.99935C5.00016 9.5391 4.62706 9.16602 4.16683 9.16602C3.7066 9.16602 3.3335 9.5391 3.3335 9.99935C3.3335 10.4596 3.7066 10.8327 4.16683 10.8327Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M4.16683 16.6667C4.62706 16.6667 5.00016 16.2936 5.00016 15.8333C5.00016 15.3731 4.62706 15 4.16683 15C3.7066 15 3.3335 15.3731 3.3335 15.8333C3.3335 16.2936 3.7066 16.6667 4.16683 16.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>'
  },
]


export const handleSearch = (item: any, request: Promise<void>, reqErr?: Promise<void>) => {
  if(item.trim() !== '') {
    request
  } else if(item === '') {
    reqErr
  }
}