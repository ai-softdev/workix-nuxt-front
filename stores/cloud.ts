import axios from '~/composables/axios'
import {defineStore} from "pinia";
import {toast} from "vue3-toastify";
import {FileOperationPatternKind} from "vscode-languageserver-protocol";
import nuxtStorage from "nuxt-storage/nuxt-storage";
export const useCloudStore = defineStore('cloud', {
  state: () => ({
    bin: {
      folders: [],
      files: [],
    },
    folder: {
      name: '',
      parent_id: '',
      updated_at: '',
      id: null,
      folders: {
        id: '',
        name: ''
      },
      files: {
        file_url: '',
        name: '',
        updated_at: ''
      },
    },
    moveObject: {},
    showObjectElem: false,
    showAccessSetting: false,
    hasFileInBin: false,
    file: '',
    src: '',
    fileSizeInfo: false,
    fileReadInfo: false,
    fileChecked: false,
    fileUpload: null,
  }),
  getters: {
    get_hasFileInBin: (state) => state.hasFileInBin,
    get_all_folders(folder) {
      return this.folder
    },
    get_folder(folder) {
      return this.folder
    },
    get_bin(folder) {
      return this.bin
    },
    get_all_files(files) {
      return this.folder.files
    },
  },
  actions: {
    async loadAllFolders() {
      await axios.get(`file-manager/folder/main-folder`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.folder = response.data
      })
    },
    async loadFolder(params: { id: number }): Promise<void> {
      await axios.get(`file-manager/folder/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.folder = response.data
      })
    },

    async loadFiles(params: { id: number }) {
      await axios.get(`file-manager/files/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.folder.files = res.data
      })
    },

    async loadhasFileInBin() {
       await axios.get(`file-manager/bin`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        if (response.data.folders.length > 0 || response.data.files.length > 0) {
          this.hasFileInBin = true
        } else {
          this.hasFileInBin = false
        }
      })
    },

    async loadBin(params: { bin?: any }) {
      await axios.get(`file-manager/bin`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.bin = response.data
        this.folder = this.bin
      })
    },

    async moveToBin(params: { elem_type: any, elem_id: any }) {
      await axios.delete(`file-manager/bin/move?${params.elem_type}=${params.elem_id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Перемещен в корзину', {theme: 'auto', autoClose: 1500})
        this.hasFileInBin = true
        if (this.folder.parent_id) {
          this.loadFolder({id: this.folder.id})
        } else if (!this.folder.parent_id) {
          this.loadAllFolders()
        }
      })
    },
    async moveFromBin(params: { elem_type: any, elem_id: any }) {
      await axios.delete(`file-manager/bin/move?${params.elem_type}=${params.elem_id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Успешно восстановлен', {theme: 'auto', autoClose: 1500})
        this.hasFileInBin = true
        this.folder = res.data
        this.loadBin({bin: this.bin})
      })
    },


    async deleteInBin(params: { delete_type: any, id: number }) {
      await axios.delete(`file-manager/bin/delete?${params.delete_type}=${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Успешно удалён', {theme: "auto", autoClose: 1500})
        this.folder = res.data
        this.loadBin({bin: this.bin});
      })
    },
    async delete(params: { id: number }) {
      await axios.delete(`file-manager/folder-file/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Успешно удалён', {theme: "auto", autoClose: 1500})
        this.folder = res.data
        this.loadBin({bin: this.bin});
      })
    },
    async create_folder(params: { name: string, parent_id: number }) {
      await axios.post(`file-manager/folder/create`, {
        name: params.name,
        parent_id: params.parent_id
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.folder = response.data
        this.loadAllFolders()
      })
    },
    async update_folder(params: { folder_id: number, name: any, parent_id: number }) {
      await axios.patch(`file-manager/folder/update/${params.folder_id}`, {
        name: params.name,
        parent_id: params.parent_id
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        if (!this.folder.parent_id) {
          this.loadAllFolders()
        } else if (this.folder.parent_id) {
          this.loadFolder({id: this.folder.id})
        }
        toast.success('Папка успешно изменена', {autoClose: 1500, theme: 'auto'})

      })
    },
    async update_file(params: { file_id: number, name: any, folder_id: number }) {
      await axios.patch(`file-manager/file/update/${params.file_id}`, {
        name: params.name,
        folder_id: params.folder_id
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        if (!this.folder.parent_id) {
          this.loadAllFolders()
        } else if (this.folder.parent_id) {
          this.loadFolder({id: this.folder.id})
        }
        toast.success('Успешно изменён', {autoClose: 1500, theme: 'auto'})
      })
    }
  }
})