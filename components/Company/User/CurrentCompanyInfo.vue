<script setup lang="ts">
import {useCompanies} from "~/stores/companies";
import CurrentCompanyElems from "~/components/Company/CompanyUI/CurrentCompanyElems.vue";

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CurrentCompanyNews from "~/components/Company/User/CurrentCompanyNews.vue";
import CurrentCompanyFiles from "~/components/Company/User/CurrentCompanyFiles.vue";
import CurrentCompanyDepartment from "~/components/Company/User/CurrentCompanyDepartment.vue";
import CurrentCompanyChart from "~/components/Company/User/CurrentCompanyChart.vue";
import ruLocale from '@fullcalendar/core/locales/ru';

const currentCompany = useCompanies()
const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  locales: [ruLocale],
  locale: 'ru',
  events: [
    { title: 'Событие 1', date: '2022-12-26' },
    { title: 'Событие 2', date: '2022-12-27' },
  ],
};
</script>

<template>
  <div class="flex flex-col overflow-hidden gap-y-10">
    <div class="grid grid-cols-3 max-[1020px]:grid-cols-1 gap-5 w-full">
      <div class="p-6 bg-white rounded-3xl">
        <div class="flex items-center gap-4 py-2 px-3 border rounded-full justify-center w-fit">
          <img src="/icons/chart.svg" alt="chart">
          {{ $t('График') }}
        </div>
        <div class="mt-8">
          <CurrentCompanyChart/>
        </div>
      </div>
      <div class="p-6 bg-white rounded-3xl">
        <div class="flex items-center gap-4 py-2 px-3 border rounded-full justify-center w-fit">
          <img src="/icons/chart.svg" alt="chart">
          {{ $t('О компании') }}
        </div>
        <div class="mt-8">
          {{ currentCompany.company.description || $t('Нет описания')}}
        </div>
      </div>
      <div class="p-6 bg-white rounded-3xl">
        <div class="flex items-center gap-4 py-2 px-3 border rounded-full justify-center w-fit">
          <img src="/icons/company-statistic.svg" alt="company-statistic">
          {{ $t('Статистика компании') }}
        </div>
        <div class="mt-8">
          <div class="w-full flex items-center justify-between my-4 py-4 px-5 rounded-full gap-x-5 bg-porcelain">
            <div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12 ">
              <div>
                <svg width="24" height="24" class="stroke-black dark:stroke-white" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.3873 7.1575L11.9999 12L3.60913 7.14978" stroke-width="1" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                  <path d="M12 12V21" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                      d="M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z"
                      stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <p class="font-medium">{{ $t('Объекты') }}:</p>
            </div>
            <div>
              <p class="w-10 h-10 flex items-center justify-center dark:text-white">{{currentCompany.company.objects_count || 0}}</p>
            </div>
          </div>
          <div class="w-full flex items-center justify-between my-4 py-4 px-5 rounded-full gap-x-5 bg-porcelain">
            <div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12 ">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 18L19 15M19 15L22 18M19 15V21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <p>{{ $t('Сотрудники') }}:</p>
            </div>
            <div>
              <p class="w-10 h-10 flex items-center justify-center dark:text-white">{{currentCompany.company.users_count || 0}}</p>
            </div>
          </div>
          <div class="w-full flex items-center justify-between my-4 py-4 px-5 rounded-full gap-x-5 bg-porcelain">
            <div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12 ">
              <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 19V13.6C13 13.0399 13 12.7599 12.891 12.546C12.7951 12.3578 12.6422 12.2049 12.454 12.109C12.2401 12 11.9601 12 11.4 12H8.6C8.0399 12 7.75992 12 7.54601 12.109C7.35785 12.2049 7.20487 12.3578 7.10899 12.546C7 12.7599 7 13.0399 7 13.6V19M17 19V4.2C17 3.0799 17 2.51984 16.782 2.09202C16.5903 1.71569 16.2843 1.40973 15.908 1.21799C15.4802 1 14.9201 1 13.8 1H6.2C5.07989 1 4.51984 1 4.09202 1.21799C3.71569 1.40973 3.40973 1.71569 3.21799 2.09202C3 2.51984 3 3.0799 3 4.2V19M19 19H1M7.5 6H7.51M12.5 6H12.51M8 6C8 6.27614 7.77614 6.5 7.5 6.5C7.22386 6.5 7 6.27614 7 6C7 5.72386 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.72386 8 6ZM13 6C13 6.27614 12.7761 6.5 12.5 6.5C12.2239 6.5 12 6.27614 12 6C12 5.72386 12.2239 5.5 12.5 5.5C12.7761 5.5 13 5.72386 13 6Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <p>{{ $t('Департаменты') }}:</p>
            </div>
            <div>
              <p class="w-10 h-10 flex items-center justify-center dark:text-white">{{currentCompany.company.departments_count || 0}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <CurrentCompanyDepartment/>
    </div>
<!--    <div>-->
<!--      <CurrentCompanyNews/>-->
<!--    </div>-->
    <div class="w-full mx-auto">
      <p
          class="dark:text-white text-3xl font-bold mb-6"
      >
        {{ $t('Календарь событий') }}
      </p>
      <div class="bg-white rounded-3xl mt-6 p-6 shadow-cards">
        <FullCalendar
            :options="calendarOptions"
        />
      </div>
<!--      <CurrentCompanyElems class="w-10/12 mx-auto ">-->
<!--        <template v-slot:blockTitle>-->
<!--          {{ $t('Календарь событий') }}-->
<!--        </template>-->
<!--        <template v-slot:blockContent>-->
<!--          <div>-->
<!--            -->
<!--          </div>-->
<!--        </template>-->
<!--      </CurrentCompanyElems>-->
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>