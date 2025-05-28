<template>
  <div class="flex items-center max-[800px]:justify-center gap-x-8" @click.stop>
    <div class="cursor-pointer transition-all duration-300" @click="()=> {
          if(colorMode.preference && colorMode.value === 'light') {
            colorMode.value = 'dark'
            colorMode.preference = 'dark'
          }
          else {
            colorMode.preference = 'light'
            colorMode.value = 'light'
          }
        }">
      <div class="max-[800px]:p-2 transition-all"
           v-if="colorMode.preference === 'light'">
        <div class="w-10 h-10 flex  hover:bg-porcelain items-center justify-center border rounded-lg">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1V3M11 19V21M3 11H1M5.31412 5.31412L3.8999 3.8999M16.6859 5.31412L18.1001 3.8999M5.31412 16.69L3.8999 18.1042M16.6859 16.69L18.1001 18.1042M21 11H19M16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11Z" stroke="#2A2A2A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div v-else
           class="dark:bg-gray-500 hover:bg-porcelain max-[800px]:p-2 transition-all">
        <svg height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 380.446 380.446" xml:space="preserve">
              <g>
                <path style="fill:#F7CF52;" d="M363.262,116.333c-2.68-1.227-6.508-2.734-11.101-4.075c-4.594-1.346-9.953-2.546-15.695-3.34
                  c-2.472-0.353-5.024-0.611-7.607-0.81c-0.199-2.583-0.457-5.135-0.81-7.607c-0.795-5.742-1.994-11.101-3.34-15.695
                  c-1.341-4.594-2.848-8.422-4.075-11.101c-1.214-2.68-2.16-4.211-2.16-4.211s-0.946,1.531-2.16,4.211
                  c-1.227,2.679-2.734,6.508-4.075,11.101c-1.347,4.594-2.546,9.953-3.34,15.695c-0.352,2.466-0.609,5.011-0.808,7.589
                  c-2.584,0.196-5.136,0.451-7.609,0.802c-2.871,0.399-5.646,0.892-8.278,1.456c-2.632,0.552-5.12,1.229-7.417,1.881
                  c-2.297,0.684-4.402,1.386-6.268,2.087c-1.866,0.706-3.493,1.383-4.833,2.005c-2.68,1.22-4.211,2.172-4.211,2.172
                  s1.531,0.952,4.211,2.172c1.34,0.622,2.967,1.299,4.833,2.005c1.866,0.702,3.972,1.404,6.268,2.088
                  c2.297,0.652,4.785,1.329,7.417,1.881c2.632,0.565,5.407,1.057,8.278,1.456c2.467,0.349,5.013,0.604,7.59,0.8
                  c0.196,2.577,0.451,5.124,0.8,7.59c0.399,2.871,0.891,5.646,1.456,8.278c0.552,2.632,1.229,5.12,1.881,7.417
                  c0.684,2.297,1.386,4.402,2.088,6.269c0.706,1.866,1.383,3.493,2.005,4.833c1.22,2.68,2.172,4.211,2.172,4.211
                  s0.952-1.531,2.172-4.211c0.622-1.34,1.299-2.967,2.005-4.833c0.701-1.866,1.404-3.972,2.088-6.269
                  c0.651-2.297,1.328-4.785,1.881-7.417c0.565-2.632,1.057-5.407,1.456-8.278c0.35-2.473,0.606-5.025,0.802-7.609
                  c2.577-0.199,5.122-0.457,7.589-0.808c5.742-0.794,11.101-1.994,15.695-3.34c4.594-1.341,8.422-2.848,11.101-4.075
                  c2.68-1.214,4.211-2.16,4.211-2.16S365.942,117.547,363.262,116.333z"/>
                <path style="fill:#F7CF52;" d="M299.845,229.947c-0.41-0.309-1.012-0.843-1.777-1.362c-1.531-1.083-3.719-2.415-6.344-3.599
                  c-2.625-1.189-5.687-2.248-8.969-2.95c-0.504-0.111-1.022-0.197-1.535-0.291c-0.094-0.513-0.179-1.031-0.29-1.535
                  c-0.702-3.281-1.76-6.344-2.95-8.969c-1.184-2.625-2.515-4.813-3.599-6.344c-0.519-0.766-1.053-1.367-1.362-1.777
                  c-0.332-0.41-0.546-0.629-0.546-0.629s-0.213,0.219-0.546,0.629c-0.309,0.41-0.843,1.012-1.362,1.777
                  c-1.083,1.531-2.414,3.719-3.599,6.344c-1.189,2.625-2.248,5.687-2.95,8.969c-0.109,0.497-0.194,1.007-0.286,1.513
                  c-0.515,0.093-1.034,0.178-1.539,0.289c-1.641,0.353-3.227,0.787-4.73,1.286c-1.504,0.488-2.926,1.086-4.238,1.661
                  c-1.313,0.604-2.516,1.224-3.582,1.844c-1.066,0.623-1.996,1.221-2.762,1.771c-0.766,0.523-1.367,1.058-1.777,1.37
                  c-0.41,0.334-0.629,0.549-0.629,0.549s0.219,0.215,0.629,0.549c0.41,0.311,1.012,0.847,1.777,1.37
                  c0.766,0.549,1.695,1.147,2.762,1.771c1.066,0.62,2.27,1.24,3.582,1.843c1.313,0.576,2.734,1.173,4.238,1.661
                  c1.504,0.499,3.09,0.934,4.73,1.286c0.498,0.109,1.01,0.193,1.517,0.285c0.092,0.507,0.176,1.019,0.285,1.517
                  c0.353,1.641,0.787,3.226,1.286,4.73c0.488,1.504,1.086,2.926,1.661,4.238c0.604,1.313,1.224,2.516,1.844,3.582
                  c0.623,1.066,1.221,1.996,1.771,2.762c0.522,0.766,1.058,1.367,1.369,1.777c0.334,0.41,0.549,0.629,0.549,0.629
                  s0.215-0.219,0.549-0.629c0.311-0.41,0.847-1.012,1.369-1.777c0.549-0.766,1.147-1.695,1.771-2.762
                  c0.619-1.066,1.24-2.27,1.844-3.582c0.575-1.313,1.173-2.734,1.661-4.238c0.499-1.504,0.933-3.09,1.286-4.73
                  c0.111-0.506,0.196-1.024,0.289-1.54c0.506-0.092,1.016-0.177,1.513-0.286c3.281-0.702,6.344-1.76,8.969-2.95
                  c2.625-1.184,4.813-2.515,6.344-3.599c0.766-0.519,1.367-1.053,1.777-1.362c0.41-0.333,0.629-0.546,0.629-0.546
                  S300.255,230.279,299.845,229.947z"/>
                <path style="fill:#F7CF52;" d="M71.311,47.918c-0.432-0.325-1.066-0.888-1.873-1.434c-1.613-1.142-3.918-2.544-6.683-3.792
                  c-2.766-1.253-5.992-2.368-9.449-3.108c-0.531-0.117-1.076-0.207-1.617-0.306c-0.099-0.541-0.189-1.086-0.306-1.617
                  c-0.739-3.457-1.855-6.683-3.108-9.449c-1.248-2.766-2.65-5.07-3.791-6.684c-0.547-0.806-1.11-1.44-1.435-1.872
                  c-0.35-0.432-0.575-0.663-0.575-0.663s-0.225,0.23-0.575,0.663c-0.325,0.432-0.888,1.066-1.435,1.872
                  c-1.141,1.613-2.544,3.918-3.791,6.684c-1.253,2.766-2.369,5.992-3.108,9.449c-0.115,0.523-0.204,1.061-0.301,1.594
                  c-0.543,0.098-1.089,0.188-1.622,0.304c-1.728,0.372-3.399,0.83-4.984,1.355c-1.584,0.514-3.083,1.144-4.465,1.75
                  c-1.383,0.636-2.65,1.29-3.774,1.942c-1.124,0.657-2.103,1.286-2.91,1.865c-0.807,0.551-1.44,1.115-1.873,1.443
                  c-0.432,0.352-0.663,0.578-0.663,0.578s0.23,0.227,0.663,0.578c0.432,0.328,1.066,0.892,1.873,1.443
                  c0.807,0.579,1.786,1.209,2.91,1.865c1.124,0.653,2.391,1.306,3.774,1.942c1.383,0.606,2.881,1.236,4.465,1.75
                  c1.584,0.525,3.255,0.983,4.984,1.355c0.525,0.115,1.064,0.203,1.598,0.3c0.097,0.534,0.185,1.073,0.3,1.598
                  c0.372,1.729,0.829,3.399,1.355,4.984c0.514,1.584,1.144,3.083,1.75,4.465c0.636,1.383,1.29,2.65,1.942,3.774
                  c0.656,1.124,1.287,2.103,1.865,2.909c0.551,0.807,1.115,1.44,1.443,1.873c0.352,0.432,0.578,0.663,0.578,0.663
                  s0.227-0.23,0.578-0.663c0.328-0.432,0.892-1.066,1.443-1.873c0.579-0.807,1.209-1.786,1.865-2.909
                  c0.653-1.124,1.306-2.391,1.942-3.774c0.606-1.383,1.236-2.881,1.75-4.465c0.526-1.584,0.983-3.255,1.355-4.984
                  c0.116-0.532,0.206-1.079,0.304-1.622c0.533-0.097,1.071-0.186,1.594-0.301c3.457-0.739,6.683-1.855,9.449-3.108
                  c2.766-1.248,5.07-2.65,6.683-3.792c0.807-0.547,1.44-1.109,1.873-1.435c0.432-0.35,0.663-0.575,0.663-0.575
                  S71.743,48.268,71.311,47.918z"/>
                <g>
                  <path style="fill:#F7CF52;" d="M257.193,0c21.254,0,41.693,3.488,60.778,9.919c-75.252,25.357-129.446,96.501-129.446,180.304
                    c0,83.804,54.193,154.947,129.446,180.304c-19.085,6.431-39.524,9.919-60.778,9.919c-105.058,0-190.224-85.166-190.224-190.224
                    S152.136,0,257.193,0z"/>
                </g>
                <path style="fill:#E2BC50;" d="M257.2,0.003c5.8,0,11.54,0.26,17.2,0.77c-96.95,8.74-172.93,90.22-172.93,189.45
                  c0,99.25,76.01,180.74,172.99,189.45c-5.68,0.51-11.44,0.77-17.26,0.77c-105.06,0-190.23-85.16-190.23-190.22
                  S152.14,0.003,257.2,0.003z"/>
              </g>
            </svg>
      </div>
    </div>
    <NuxtLink :to="'/base/chat'" :class="{'!bg-opacity-0 border-none' : route.path === '/base/chat' || route.path === `/base/chat/${route.params.id}`}"
      class="dark:hover:bg-gray-500 px-2 py-2 transition-all cursor-pointer">
      <div class="w-10 h-10 flex items-center hover:bg-porcelain justify-center border rounded-lg">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9.5H12M8 13H15M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.1971 3.23374 14.3397 3.65806 15.3845C3.73927 15.5845 3.77988 15.6845 3.798 15.7653C3.81572 15.8443 3.8222 15.9028 3.82221 15.9839C3.82222 16.0667 3.80718 16.1569 3.77711 16.3374L3.18413 19.8952C3.12203 20.2678 3.09098 20.4541 3.14876 20.5888C3.19933 20.7067 3.29328 20.8007 3.41118 20.8512C3.54589 20.909 3.73218 20.878 4.10476 20.8159L7.66265 20.2229C7.84309 20.1928 7.9333 20.1778 8.01613 20.1778C8.09715 20.1778 8.15566 20.1843 8.23472 20.202C8.31554 20.2201 8.41552 20.2607 8.61549 20.3419C9.6603 20.7663 10.8029 21 12 21Z" stroke="#2A2A2A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </NuxtLink>
    <div class="relative">
      <div
        @click.stop="()=>{
          if(windowWidth >= 800) {
            loadCurrentUser.openNotification = !loadCurrentUser.openNotification; loadCurrentUser.openSettings = false
          } else {
            loadCurrentUser.openNotification = !loadCurrentUser.openNotification;
          }
        }"
        class="dark:hover:bg-gray-500 p-2 max-[800px]:p-2 transition-all cursor-pointer">
        <div class="relative">
          <div class="w-10 h-10 flex items-center hover:bg-porcelain justify-center border rounded-lg">
            <svg height="25" width="25" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.09321 20C7.79832 20.6224 8.72462 21 9.73902 21C10.7535 21 11.6797 20.6224 12.3848 20M15.739 7C15.739 5.4087 15.1069 3.88258 13.9817 2.75736C12.8564 1.63214 11.3303 1 9.73902 1C8.14772 1 6.62162 1.63214 5.4964 2.75736C4.37118 3.88258 3.73904 5.4087 3.73904 7C3.73904 10.0902 2.95951 12.206 2.0887 13.6054C1.35417 14.7859 0.986897 15.3761 1.00036 15.5408C1.01528 15.7231 1.0539 15.7926 1.20081 15.9016C1.3335 16 1.93163 16 3.12789 16H16.3502C17.5464 16 18.1446 16 18.2772 15.9016C18.4242 15.7926 18.4628 15.7231 18.4777 15.5408C18.4912 15.3761 18.1239 14.7859 17.3894 13.6054C16.5185 12.206 15.739 10.0902 15.739 7Z" stroke="#2A2A2A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div  class="text-center text-[10px] rounded-full  absolute -top-[2px] -right-[2px]">
            <div
              class="animate-ping absolute inline-flex w-full h-full min-w-[14px] min-h-[14px] max-w-full max-h-full rounded-full bg-sunset opacity-75"/>
            <div
              class="relative inline-flex justify-center rounded-full min-w-[14px] min-h-[14px] max-w-full max-h-full w-full h-full bg-sunset text-white">
              {{Array.isArray(loadNotification.notification) ? loadNotification.notification.filter(item=> !item.read).length : 0}}
            </div>
          </div>
        </div>
      </div>
      <Transition
        name="slide-fade"
        class="absolute border bg-white w-[500px] right-0 max-[800px]:fixed p-8 z-[100] top-12 max-[800px]:top-0 max-[800px]:h-screen max-[800px]:w-screen max-[900px]:-right-44 max-[800px]:left-0 dark:shadow-white dark:shadow-md transition-all duration-200 rounded-3xl shadow-notifications dark:bg-gray-600"
        :class="{'min-h-full' : loadCurrentUser.openNotification === true, 'min-h-0 opacity-0' : loadCurrentUser.openNotification === false}">
        <HeaderContentNotification class="select-none " v-if="loadCurrentUser.openNotification" :key="readCount"
                                   @openNotification="loadCurrentUser.openNotification = false"/>
      </Transition>
    </div>
    <div
      class="flex max-[800px]:hidden select-none text-gray-600 items-center transition-all duration-200 gap-x-2 cursor-pointer hover:transform hover:-translate-y-2"
      @click="()=>{
        if(windowWidth >= 800) {
          loadCurrentUser.openSettings = !loadCurrentUser.openSettings; loadCurrentUser.openNotification = false
        }
      }">
      <div v-if="loadCurrentUser.user.id" class="">
        <img class="w-[50px] h-[50px] rounded-full shadow-lg border border-gray-100 dark:border-none"
             :src="loadCurrentUser.user.photo" alt="header-img">
      </div>
      <div v-else class="flex items-center gap-x-2">
        <sceleton border-radius="100px" width="50px" height="50px"></sceleton>
        <sceleton border-radius="5px" width="150px" height="15px"></sceleton>
      </div>
      <h3 class="dark:text-white select-none tracking-wider">{{ loadCurrentUser.user.first_name }}
        {{ loadCurrentUser.user.last_name }}</h3>

    </div>
    <div class="relative max-[800px]:hidden">
      <div @click.stop="()=>{
        if(windowWidth >= 800) {
          loadCurrentUser.openSettings = !loadCurrentUser.openSettings; loadCurrentUser.openNotification = false
        }
      }"
           class="hover:rotate-90 transition-all cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-500 hover:rounded-full max-[800px]:p-1 hover:p-1">
<!--        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--          <circle class="dark:stroke-white" cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"/>-->
<!--          <path-->
<!--            d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273"-->
<!--            stroke="#1C274C" class="dark:stroke-white" stroke-width="1.5" stroke-linecap="round"/>-->
<!--        </svg>-->
      </div>
      <Transition
        name="slide-fade"
        class="absolute max-md:fixed max-md:left-0 right-0 p-8 z-[100] top-12 max-[800px]:-top-0 max-[800px]:h-screen max-[800px]:w-screen max-[800px]:-right-10 dark:shadow-white dark:shadow-md transition-all duration-200 rounded-3xl shadow-profile bg-white border dark:bg-gray-600 w-[300px]"
        :class="{'min-h-full' : loadCurrentUser.openSettings === true, 'min-h-0 opacity-0 ' : loadCurrentUser.openSettings === false}">
        <div v-if="loadCurrentUser.openSettings" class="flex flex-col gap-y-6 select-none">
<!--          <div class="ml-auto justify-end hidden w-2/12 max-[800px]:flex" @click="loadCurrentUser.openSettings = false">-->
<!--            <svg width="25px" height="25px" class="fill-gray-400 dark:fill-white" viewBox="-2 0 32 32" version="1.1"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">-->
<!--                <g id="Icon-Set" transform="translate(-466.000000, -931.000000)">-->
<!--                  <path-->
<!--                    d="M490,931 L470,931 C467.791,931 466,932.791 466,935 L466,955 C466,957.209 467.791,959 470,959 L473,959 L473,957 L470,957 C468.896,957 468,956.104 468,955 L468,935 C468,933.896 468.896,933 470,933 L490,933 C491.104,933 492,933.896 492,935 L492,955 C492,956.104 491.104,957 490,957 L487,957 L487,959 L490,959 C492.209,959 494,957.209 494,955 L494,935 C494,932.791 492.209,931 490,931 L490,931 Z M487.657,944.243 L480.758,937.343 C480.549,937.135 480.272,937.046 480,937.06 C479.728,937.046 479.451,937.135 479.243,937.343 L472.343,944.243 C471.952,944.633 471.952,945.267 472.343,945.657 C472.733,946.048 473.367,946.048 473.758,945.657 L479,940.414 L479,962 C479,962.553 479.447,963 480,963 C480.552,963 481,962.553 481,962 L481,940.414 L486.243,945.657 C486.633,946.048 487.267,946.048 487.657,945.657 C488.048,945.267 488.048,944.633 487.657,944.243 L487.657,944.243 Z"-->
<!--                    id="arrow-top">-->
<!--                  </path>-->
<!--                </g>-->
<!--              </g>-->
<!--            </svg>-->
<!--          </div>-->
          <HeaderContentLink>
            <template v-slot:headerContentIcon>
              <div>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.913 17.5H20.087M12.913 17.5L11 21.5M12.913 17.5L15.7783 11.509C16.0092 11.0263 16.1246 10.7849 16.2826 10.7086C16.4199 10.6423 16.5801 10.6423 16.7174 10.7086C16.8754 10.7849 16.9908 11.0263 17.2217 11.509L20.087 17.5M20.087 17.5L22 21.5M2 5.5H8M8 5.5H11.5M8 5.5V3.5M11.5 5.5H14M11.5 5.5C11.0039 8.45729 9.85259 11.1362 8.16555 13.3844M8.16555 13.3844C8.76265 13.8421 9.38747 14.2248 10 14.5M8.16555 13.3844C6.81302 12.3478 5.60276 10.9266 5 9.5M8.16555 13.3844C6.56086 15.5229 4.47143 17.2718 2 18.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </template>
            <template v-slot:headerContentText>
              <h3>{{ $t('Русский') }}</h3>
            </template>
          </HeaderContentLink>
          <HeaderContentLink v-if="loadCurrentUser.user.role.name_en !== 'admin'" to="profile">
            <template v-slot:headerContentIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.3163 19.4384C5.92462 18.0052 7.34492 17 9 17H15C16.6551 17 18.0754 18.0052 18.6837 19.4384M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
            <template v-slot:headerContentText>{{ $t('Личная информация') }}</template>
          </HeaderContentLink>
          <HeaderContentLink v-if="loadCurrentUser.user.role.name_en !== 'admin'" to="companies">
            <template v-slot:headerContentIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
            <template v-slot:headerContentText>
              {{ $t('Информация о Компании') }}
            </template>
          </HeaderContentLink>
          <HeaderContentLink v-if="loadCurrentUser.user.role.name_en !== 'admin'" to="tasks">
            <template v-slot:headerContentIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 15L8 17L12.5 12.5M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
            <template v-slot:headerContentText>{{ $t('Мои задания') }}</template>
          </HeaderContentLink>
          <TheButton class="rounded-full flex items-center justify-center hover:bg-gray-200 gap-3 py-2 bg-porcelain border !text-sunset transition-all ease-in-out duration-300"
                     @click="nuxtStorage.localStorage.removeItem('token'); router.push('/')">
            <img src="/icons/exit.svg" alt="exit">
            {{ $t('Выйти') }}
          </TheButton>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import {useAuthStore} from "~/stores/auth";
import {useNotification} from "~/stores/notification";
import {useRoute} from "vue-router";
import HeaderContentNotification from "~/components/Header/HeaderUI/HeaderContentNotification.vue";
import TheButton from "~/components/UI/TheButton.vue";
import HeaderContentLink from "~/components/Header/HeaderUI/HeaderContentLink.vue";
import Sceleton from "~/components/UI/TheSceleton.vue";
import {useRouter} from "vue-router";
import nuxtStorage from "nuxt-storage/nuxt-storage";
const windowWidth = ref(null)
const route = useRoute()
const router = useRouter()
const loadNotification = useNotification()
const loadCurrentUser = useAuthStore()
const colorMode = useColorMode()
onMounted(()=>[
  windowWidth.value = window.innerWidth
])


onMounted(()=> {
  loadNotification.loadNotification()
})
</script>

<style lang="scss">

</style>