<script setup lang="ts">

import {onMounted} from "vue";
import {useDocumentStore} from "~/stores/documents";
import {useRoute} from "vue-router";
import {useCompanies} from "~/stores/companies";
import {useAuthStore} from "~/stores/auth";
const route = useRoute()
const router = useRouter()
const isSigning = ref(false);
const selectedKey = ref('');
const notSelected = ref(true);
const selectedTitle = ref('');

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

    startAppLoad()
  } catch (error) {
    console.error('❌ Ошибка загрузки скриптов E-IMZO', error);
  }
}

onMounted(async () => {
  await loadEImzoScripts();
});


async function startAppLoad() {
  try {
      // await loadScript("/e-imzo/e-imzo.js");
      // await loadScript("/e-imzo/e-imzo-client.js");
      // await loadScript("/e-imzo/micro-ajax.js");
      // await loadScript("/e-imzo/e-imzo-init.js");

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

function responseUsers() {
  EIMZOClient.listAllUserKeys(
      function(o, i) {
        var itemId = "itm-" + o.serialNumber + "-" + i;
        return itemId;
      },
      function(itemId, v) {
        return uiCreateItem(itemId, v);
      },
      function(items, firstId) {

        // Находим селект
        var select = document.querySelector('select[name="key"]');
        select.innerHTML = ""; // Очищаем селект перед добавлением новых элементов

        // Заполняем селект опциями
        items.forEach(function(item) {
          select.appendChild(item);
        });

        // Устанавливаем первый элемент по умолчанию (если есть)
        if (select.options.length > 0) {
          console.log('options yes', select.options[0],select.options[0].value)

          select.value = select.options[0].value;
        }
      },
      function(e, r) {
        if (e) {
          uiShowMessage(errorCAPIWS + " : " + e);
        } else {
          console.log(r);
        }
      }
  );
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

let currentKey = ref('') // vo
let keyId = ref(null);
const fileBase64 = ref(null)


const handleSubmit = (event) => {

  signFile()

}


const signFile = function () {

  console.log("Начало подписи")
  let data64 = fileBase64.value;
  let key = keyId.value

  EIMZOClient.createPkcs7(key, data64, null, function(pkcs7){
    attachTimestamp(pkcs7, function(pkcs7wtst){
        console.log("Подписанный документ с временем", pkcs7wtst);

      verify(pkcs7wtst, false, data64, function(result){
        console.log(result)//выкинуть назад router
      }, true);
    });
  }, (e, r) => {console.log('Ошибка при подписании')}, false, true); // !! set isDataBase64Encoded = TRUE
};

const attachTimestamp = function (pkcs7, callback){
  const E_IMZO_URL = 'https://workix.uz/eimzo'
  microAjax(E_IMZO_URL + '/frontend/timestamp/pkcs7', function (data, s) {

    if(s.status != 200){
      console.log("Ошибка при добавлении timestamp к подписи")
      return;
    }
    var pkcs7wtst;
    try {
      var data = JSON.parse(data);
      if (data.status != 1) {

        console.log(data.status, ' - ', s.message);
        return;
      }
      pkcs7wtst = data.pkcs7b64;
    } catch (e) {
      console.log("Ошибка", s.status, ' - ', s.statusText, e);
    }
    callback(pkcs7wtst);
  },pkcs7);
}

const verify = function (pkcs7wtst, detached, data, callback, isDataBase64Encoded){
  var data64;

  console.log(detached);
  console.log(data64);
  documentStore.documentSign({slug: route.params.slug, data: {signature: pkcs7wtst}}, router)
}

function selectKey() {
  // currentKey.value = event.target.value;
  let select = document.getElementById('select-key')
  selectedKey.value = select
  notSelected.value = false
  let option = document.getElementById(select.value);
  let vo = JSON.parse(option.getAttribute('vo'))
  selectedTitle.value = vo
  console.log("🔑 Выбранные днные:", vo);
  EIMZOClient.loadKey(vo, function(id){
    keyId.value = id;

  }, (e, r)=> {console.log('error'); notSelected.value = true});
}

const documentStore = useDocumentStore()
const authStore = useAuthStore()

onMounted(()=>{
  documentStore.loadDocument({slug: route.params.slug})
})

async function fetchFileAsBase64() {
  try {
    const url = authStore.get_server_domain + documentStore.documentItem.file;
    const response = await fetch(url);

    if (!response.ok) throw new Error('Ошибка при загрузке файла');

    const blob = await response.blob(); // Получаем Blob
    const reader = new FileReader(); // Создаём FileReader

    reader.onloadend = () => {
      const base64Content = reader.result.split(',')[1]; // Извлекаем Base64
      fileBase64.value = base64Content; // Сохраняем
    };

    reader.readAsDataURL(blob); // Читаем как Base64
  } catch (error) {
    console.error('Ошибка загрузки файла:', error);
  }
}

watch(() => documentStore.documentItem, (newValue) => {
  console.log(authStore.get_server_domain+documentStore.documentItem.file)
  fetchFileAsBase64()
})
</script>

<template>
    <div class="flex items-center gap-4 flex-col border p-3 mt-4 rounded-lg">
      <p class="text-xl font-medium">
        Документ: "{{ documentStore.documentItem.title }}"
      </p>
      <div class="flex items-center gap-4 flex-col">
        <select
            id="select-key"
            name="key"
            class="p-3 border-white rounded-lg bg-bgWhite text-black"
        >
        </select>
        <button
            @click="selectKey"
            class="border p-2 rounded-lg"
        >
          Выбрать ключ
        </button>
      </div>
      <p v-if="notSelected" class="text-red-500 mt-2">Вы не выбрали ключ</p>
      <p v-if="!notSelected" class="text-green-500 mt-2">Вы выбрали ключ: {{ selectedTitle.CN }}</p>
      <form
          id="myForm"
          @submit.prevent="handleSubmit"
          class="mt-4"
      >
        <button
            type="submit"
            class="border py-3 px-4 rounded-lg text-xl bg-[#8881]"
        >
          Подписать
        </button>
      </form>
    </div>
</template>

<style scoped lang="scss">

</style>