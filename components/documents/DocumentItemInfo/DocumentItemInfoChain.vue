<script setup lang="ts">

import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import DocumentItemInfoChainSchedule
  from "~/components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainSchedule.vue";
import {useDocumentStore} from "~/stores/documents";
import {useRoute, useRouter} from 'vue-router'
import DocumentItemInfoChainFile
  from "~/components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainFile.vue";
import {LinkedList} from "~/hooks/Node";
import {useAuthStore} from "~/stores/auth";
import { onMounted } from 'vue';

const route = useRoute()
const router = useRouter()
const documentStore = useDocumentStore()
const authStore = useAuthStore()

const isSigning = ref(false);

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.appendChild(script);
  });
}

async function loadEImzoScripts() {
  try {
    await loadScript('/e-imzo/e-imzo.js');
    await loadScript('/e-imzo/e-imzo-client.js');
    await loadScript('/e-imzo/micro-ajax.js');
    await loadScript('/e-imzo/e-imzo-init.js');
    console.log('✅ Все скрипты загружены');
  } catch (error) {
    console.error('❌ Ошибка загрузки скриптов E-IMZO', error);
  }
}

onMounted(async () => {
  await loadEImzoScripts();
});


async function startAppLoad() {
  try {
    await loadScript("/e-imzo/e-imzo.js");
    await loadScript("/e-imzo/e-imzo-client.js");
    await loadScript("/e-imzo/micro-ajax.js");
    await loadScript("/e-imzo/e-imzo-init.js");

    if (window.EIMZOClient) {
      console.log("✅ EIMZOClient загружен:", window.EIMZOClient);
      console.log("📜 Доступные методы EIMZOClient:", Object.keys(window.EIMZOClient));

      installKeys();
    } else {
      console.error("❌ EIMZOClient не найден после загрузки");
    }
  } catch (error) {
    console.error("❌ Ошибка при загрузке скриптов:", error);
  }
}

async function installKeys() {
  if (!window.EIMZOClient) {
    console.error("EIMZOClient не загружен");
    return;
  }

  isSigning.value = true;
  try {
    EIMZOClient.checkVersion(function (major, minor) {
      var newVersion = EIMZO_MAJOR * 100 + EIMZO_MINOR;
      var installedVersion = parseInt(major) * 100 + parseInt(minor);
      if (installedVersion < newVersion) {
        console.log('installedVersion < newVersion');
      } else {
        EIMZOClient.installApiKeys(function () {
          responseUsers()
        }, function (e, r) {
          if (r) {
            console.log('da');
          } else {
            console.log('net');
          }
        });
      }
    }, function (e, r) {
      if (r) {
        console.log('da2');
      } else {
        console.log('net2');
      }
    });

    // console.log("✅ Подписанные данные:", signedData);

    // await documentStore.updateDocument({ id: route.params.id, signedData });
    console.log("📄 Документ успешно подписан и обновлён");
  } catch (error) {
    console.error("❌ Ошибка при подписании документа:", error);
  } finally {
    isSigning.value = false;
  }
}

function responseUsers(){
  EIMZOClient.listAllUserKeys(function(o, i){
    var itemId = "itm-" + o.serialNumber + "-" + i;
    return itemId;
  },function(itemId, v){
    return uiCreateItem(itemId, v);
  },function(items, firstId){
    console.log(items, 'ne putat');
    //создать селект отобразить items
    console.log(firstId);
  },function(e, r){
    if(e){
      uiShowMessage(errorCAPIWS + " : " + e);
    } else {
      console.log(r);
    }
  });
}

var uiCreateItem = function (itmkey, vo) {
  var now = new Date();
  vo.expired = dates.compare(now, vo.validTo) > 0;
  var itm = document.createElement("option");
  itm.value = itmkey;
  itm.text = vo.CN;
  if (!vo.expired) {

  } else {
    itm.style.color = 'gray';
    itm.text = itm.text + ' (срок истек)';
  }
  itm.setAttribute('vo',JSON.stringify(vo));
  itm.setAttribute('id',itmkey);
  return itm;
}

const extractIds = (data: any[]): string[] => {
  return data.flat().map(item => item.id).filter(id => id);
};

function startChain(){
  let array = extractIds(documentStore.userList)
  documentStore.setUsers({slug: route.params.slug, form: array}, router)
}

</script>

<template>
  <div class="overflow-x-hidden ">
    <TheTextContent class="my-4">{{ $t('Выстраивание цепочки для подписания документа') }}</TheTextContent>
    <div class="">
      <DocumentItemInfoChainSchedule :item="documentStore.documentItem"/>
    </div>
    <div class=" justify-center gap-x-10 border-b border-l border-r p-4 rounded-b-xl rounded-t-sm ">
      <div class="flex gap-x-6 justify-center items-center">
        <DocumentItemInfoChainFile :item="documentStore.documentItem"></DocumentItemInfoChainFile>
      </div>
      <div class="flex justify-center gap-x-10 mt-4">
        <TheButton
            v-if="documentStore.documentItem.status === 'created' && documentStore.documentItem.author_id === authStore.user.id"
            :type="'documentBtn'"
            @click="documentStore.showWarn = true"
        >
          {{ $t('Удалить документ') }}
        </TheButton>
        <TheButton
            v-if="documentStore.documentItem.status === 'created'"
            :type="'documentBtn'"
             @click="startChain"
         >
<!--          @click="documentStore.docUpdate({users: documentStore.userList.map((innerArray: any) => innerArray.filter((item : any)=> item.id !== authStore.user.id).map(item => item.id)).filter(innerArray => innerArray.length > 0), id: route.params.id}).then(res=>documentStore.loadDocument({id: route.params.id}))"-->
          {{ $t('Запустить цепь') }}
        </TheButton>
        <TheButton
            v-if="documentStore.documentItem.status === 'processing' && documentStore.documentItem.current_documentuser?.user_id === authStore.user.id"
            :type="'documentBtn'"
            @click="router.push(`/base/documents/signification/${route.params.slug}`)"
        >
          <!--          @click="documentStore.docUpdate({users: documentStore.userList.map((innerArray: any) => innerArray.filter((item : any)=> item.id !== authStore.user.id).map(item => item.id)).filter(innerArray => innerArray.length > 0), id: route.params.id}).then(res=>documentStore.loadDocument({id: route.params.id}))"-->
          {{ $t('Перейти к подписанию') }}
        </TheButton>
      </div>
    </div>
    <div class="my-6">
      <p class="text-center tracking-widest text-lg">{{$t('Описание:')}}</p>
      <p>{{documentStore.documentItem.description}}</p>
    </div>
    <TheModal :type="'resize'" v-if="documentStore.showWarn" @showModal="documentStore.showWarn = false">
      <TheTextContent>{{ $t('Удалить данный документ?') }}</TheTextContent>
      <p class="text-sm tracking-widest text-gray-300 my-6 ">
        {{ $t('Содержимое данного документа пропадёт и черновик не будет сохранён') }}</p>
      <div class="flex justify-center gap-x-10 ">
        <TheButton :type="'chat'" @click="documentStore.showWarn = false">
          {{ $t('Отмена') }}
        </TheButton>
        <TheButton :type="'chat'"
                   @click="documentStore.docDelete({slug: route.params.slug}).then(res=> {router.push('/base/documents'); documentStore.showWarn = false})">
          {{ $t('Удалить') }}
        </TheButton>
      </div>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>