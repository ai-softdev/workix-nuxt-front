<template>
  <div class="my-6">
    <form @submit.prevent>
      <div class="flex items-center gap-3 max-[768px]:flex-col">
        <div class="w-6/12 flex items-center gap-3 max-[768px]:w-full">
          <TheSearch
              class="w-full"
              v-model:model-value="params.query"
              @search="tasksList.loadTasksLists({...params, query: params.query})"
          />
          <TasksContentSearch
              @setFilters="setFilters"
          />
        </div>
        <button
            class="w-3/12 max-[768px]:w-full flex items-center gap-2 justify-center ml-auto bg-golden px-10 py-2.5 rounded-full font-bold max-md:py-2 active:scale-95 transition-all duration-200"
            @click="showCreate = true; loads()"
        >
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 1V15M1.5 8H15.5" stroke="black" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
          {{ $t('Создать задание') }}
        </button>
      </div>
    </form>
    <div v-if="tasksList.get_tasks.results" id="content" class="mx-auto">
      <div
          class="flex gap-x-2.5 my-10 flex-wrap max-md:mx-auto max-md:justify-center gap-y-5 "
      >
        <button class="p-2 border rounded-full dark:text-white px-4 py-2 font-bold text-mediumGray"
                :class="{'bg-golden border-golden text-white' : taskChecked === 'all'}"
                @click="taskChecked = 'all'; tasksList.loadTasksLists({page: 1, limit: params.limit, filter: `&filter=${taskChecked}`, query: params.query}); tasksList.loadTasksStats({task_filter: `filter=${taskChecked}`})"
        >
          {{ $t('Общее') }}
        </button>
        <button class="p-2 border rounded-full dark:text-white px-4 py-2 font-bold text-mediumGray"
                :class="{'bg-golden border-golden text-white' : taskChecked === 'to-me'}"
                @click="taskChecked = 'to-me'; tasksList.loadTasksLists({page: 1, limit: params.limit, filter: `&filter=${taskChecked}`, query: params.query}); tasksList.loadTasksStats({task_filter: `filter=${taskChecked}`})"
        >
          {{ $t('Для Меня') }}
        </button>
        <button class="p-2 border rounded-full dark:text-white px-4 py-2 font-bold text-mediumGray"
                :class="{'bg-golden border-golden text-white' : taskChecked === 'from-me'}"
                @click="taskChecked = 'from-me'; tasksList.loadTasksLists({page: 1, limit: params.limit, filter: `&filter=${taskChecked}`, query: params.query}); tasksList.loadTasksStats({task_filter: `filter=${taskChecked}`})"
        >
          {{ $t('От Меня') }}
        </button>
      </div>
      <TasksContentBlock
          v-if="params.query === ''"
          v-for="task of tasksList?.get_tasks.results"
          :task="task"
      />
      <TasksContentBlock
          v-if="params.query !== ''"
          v-for="taskSearch in tasksList?.get_search_task.results"
          :task="taskSearch"
      />
    </div>
    <div v-else>
      <div v-if="loadCurrentUser.user.permissions?.find(value => value.name_en === 'task.create')"
           class="flex mt-10 items-center gap-x-10">
        <div class="flex gap-x-4">
          <TheSceleton v-for="i in 3" border-radius="5px" width="100px" height="20px"></TheSceleton>
        </div>
        <TheSceleton border-radius="10px" width="150px" height="30px"></TheSceleton>
      </div>
      <div class="flex mt-10 flex-col gap-y-6">
        <TheSceleton v-for="i in 5" class="opacity-50" border-radius="5px" width="92%" height="120px"></TheSceleton>
      </div>
    </div>
    <div class="text-center mt-10 flex flex-col items-center gap-y-6 gap-x-10" v-if="tasksList?.get_tasks.count === 0">
      <p class="text-2xl dark:text-white">{{ $t('Ничего не найдено') }}</p>
    </div>
  </div>
  <div class="flex justify-center gap-x-4">
    <div
        v-if="tasksList.get_tasks.count > 5"
        v-for="(page, id) in tasksList.get_tasks.links"
        :key="id"
        class="px-4 py-2 rounded-full cursor-pointer"
        :class="{'bg-blue-400 text-white' : page.active, 'bg-gray-200 text-black hover:bg-blue-400 hover:text-white transition-all' : !page.active}"
        @click="loadPage(page.label); tasksList.loadTasksLists({page: params.page, limit: params.limit, query: params.query})"
    >
      {{ page.label }}
    </div>
  </div>
  <TheModal v-if="showCreate"
            @showModal="showCreate = !showCreate; !showCreate ? createForm.description = '' : createForm ">
    <div>
      <TheTextContent>{{ $t('Создание задания') }}</TheTextContent>
      <form
          @submit.prevent="tasksList.create_task({...createForm, performers: filteredParticipants?.filter(e => e.value).map(i => i.id)}); showCreate = false">
        <TaskContentCreateElems>
          <div
              v-if="loadCurrentUser.user.role_en === 'department_director' || loadCurrentUser.user.role_en === 'vice_department_director'"
              class="w-full max-lg:w-full">
            <TheInput type="text" :label="$t('Заголовок')" v-model="createForm.title"/>
          </div>
          <div v-else class="w-6/12 max-lg:w-full">
            <TheInput type="text" :label="$t('Заголовок')" v-model="createForm.title"/>
          </div>
          <div class="w-6/12 max-lg:w-full flex flex-col gap-y-2">
            <p class="text-md dark:text-white tracking-wider">{{ $t('Отдел') }}</p>
            <select type="text" v-model="createForm.department"
                    class="w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"
                    @change="onDepartmentChange">
              <option v-for="department in companies.get_all_department.results" :value="department">
                {{ department.name }}
              </option>
            </select>
          </div>
        </TaskContentCreateElems>
        <TaskContentCreateElems>
          <div class="w-6/12 max-lg:w-full flex flex-col gap-y-2">
            <p class="text-md dark:text-white tracking-wider">{{ $t('Ответственный') }}</p>
            <select type="text" v-model="createForm.main_performer_id"
                    class="w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1">
              <option v-for="main_performer in filteredParticipants"
                      :value="main_performer?.id"
                      :key="main_performer?.id"
              >
                {{ main_performer.first_name + ' ' + main_performer.last_name }}
              </option>
            </select>
          </div>
          <div
              class="w-6/12 max-lg:w-full flex flex-col gap-y-2 border p-2 rounded-lg">
            <p class="text-md dark:text-white tracking-wider text-center">{{ $t('Исполнители') }}</p>
            <div v-for="performer in companies.current_department?.participants" :for="'checkbox-' + performer?.id">
              <label v-if="performer.id !== loadCurrentUser.user.id" class="cursor-pointer">
                <TheCheckbox :item="performer" :id="'checkbox-' + performer?.id">
                </TheCheckbox>
                <span class="ml-10">{{ performer.first_name + ' ' + performer.last_name }}</span>
              </label>
            </div>
          </div>
        </TaskContentCreateElems>
        <TaskContentCreateElems>
          <div class="w-6/12 max-lg:w-full text-black">
            <TheInput type="textarea" :label="$t('Описание задания')" v-model="createForm.description"/>
          </div>
          <div class="w-6/12 max-lg:w-full flex flex-col gap-y-2 rounded-lg border">
            <div class="text-center tracking-widest pt-4 pb-10">
              <h2 class="dark:text-white">{{ $t('Прикрепите файлы к заданию') }}</h2>
              <h2 class="text-gray-300">({{ $t('не обязательно') }})</h2>
            </div>
            <TheInput class="" type="file" id="upload-file"
                      @input="createForm.author_file_file = $event.target.files"></TheInput>
          </div>
        </TaskContentCreateElems>
        <TaskContentCreateElems>
          <div class="text-center">
            <p class="text-md dark:text-white tracking-wider mb-2">{{ $t('Срок до') }}</p>
            <vue-date-picker v-model="createForm.deadline" :select-text="$t('Выбрать')"
                             :min-date="new Date()"
                             :timezone="timezone"
                             :cancel-text="$t('Отменить')" placeholder="Start Typing ..." text-input
                             class="w-full rounded-lg p-2 dark:border-none outline-semiCyan outline-1" auto-apply inline
                             multi-calendars-solo/>
          </div>
        </TaskContentCreateElems>
        <TaskContentCreateElems>
          <TheButton class="py-2 px-6 rounded-full" t="button" type="danger" @click="showCreate = false">
            {{ $t('Отменить') }}
          </TheButton>
          <TheButton class="py-2 px-6 rounded-full" t="submit" type="success" @click="validationForm()">
            {{ $t('Создать') }}
          </TheButton>
        </TaskContentCreateElems>
      </form>
    </div>
  </TheModal>
</template>
<script setup lang="ts">
import TasksContentSearch from "~/components/Tasks/TaskUI/TasksContentSearch.vue";
import TasksContentBlock from "~/components/Tasks/TaskUI/TasksContentBlock.vue";
import TaskContentCreateElems from "~/components/Tasks/TaskUI/TaskContentCreateElems.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheSearch from "~/components/UI/TheSearch.vue";
import TheCheckboxCreateUser from "~/components/User/UserUI/TheCheckboxCreateUser.vue";
import {useAuthStore} from "~/stores/auth";
import {useRouter} from "vue-router";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css"
import TheButton from "~/components/UI/TheButton.vue";
import {toast} from "vue3-toastify"
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheInput from "~/components/UI/TheInput.vue";
import {useCompanies} from "~/stores/companies";
import {useTaskList} from "~/stores/tasks";
import TheSceleton from "~/components/UI/TheSceleton.vue";
import TheCheckbox from "~/components/UI/TheCheckbox.vue";

const loadCurrentUser = useAuthStore()
const tasksList = useTaskList()
const companies = useCompanies()
const timezone = ref('UTC');
const createForm = ref({
  title: '',
  description: '',
  deadline: '',
  author_file_file: '',
  performers: [],
  department: {},
  participants: [],
  worth: 0,
  main_performer_id: {},
  performer_file: '',
})

const params = {
  page: 1,
  limit: 5,
  query: '',
  task_type: 'task-list',
}

const filteredParticipants = ref([])

function onDepartmentChange() {
  const selectedDepartment = createForm.value.department;
  companies.loadDepartment({id: selectedDepartment.id})
}

function setFilters(status){
  tasksList.loadTasksLists({page: 1, limit: params.limit, status: `&status=${status}`, query: params.query})
}

function loads() {
  companies.loadDepartmentList()
  createForm.value.department = companies.get_department
  createForm.value.participants = companies.get_department.participants.map(e => {
    e.value = createForm.value.participants?.filter(i => i.id == e.id).length != 0
  })
}

function validationForm() {
  if (createForm?.value.deadline === '') {
    toast.error('Укажите срок', {theme: "auto", autoClose: 1500})
  }
}

function loadPage(page: any) {
  if (page === '<') {
    if (Number(params.page) > 1) {
      params.page -= 1;
    }
  } else if (page === '>') {
    if (Number(params.page) < tasksList.task?.number_of_pages) {
      params.page = Number(params.page) + 1
    }
  } else {
    if (Number(page) <= tasksList.task?.number_of_pages) {
      params.page = Number(page)
    }
  }
  // console.log(page)
  if (window.innerWidth > 1000) {
    window.scrollTo({top: 600})
  } else if (window.innerWidth < 1000) {
    window.scrollTo({top: 895})
  } else {
    window.scrollTo()
  }
}


defineProps({
  showTask: {
    type: Boolean,
    default: false
  },
  changeInfo: {
    type: Boolean,
    default: false
  },
  showConfirm: {
    type: Boolean,
    default: false,
  },
  showCreate: {
    type: Boolean,
    default: false
  },
  task_info: {
    type: Object,
    required: true,
    default: () => {
    }
  },
  taskChecked: {
    type: String,
    default: 'list'
  },
})


onMounted(() => {
  navigateTo({
    params: {
      page: params.page
    }
  })
})
watchEffect(() => {
  tasksList.loadTasksLists({page: params.page, limit: params.limit, query: params.query})
  tasksList.loadTasksStats({task_filter: params.task_type})

  const participants = companies.current_department.participants
  const currentUserId = loadCurrentUser.user?.id

  if (participants && currentUserId) {
    filteredParticipants.value = participants.filter(
        participant => participant.id !== currentUserId
    )
  }
})
</script>

<style>
* {
  scroll-behavior: smooth;
}


.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}

.active-page:hover {
  background-color: #2988c8;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

</style>