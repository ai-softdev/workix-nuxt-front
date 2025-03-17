<script setup lang="ts">

import {onMounted} from "vue";
import {useDocumentStore} from "~/stores/documents";
import {useRoute} from "vue-router";
import {useCompanies} from "~/stores/companies";
import {useAuthStore} from "~/stores/auth";
const route = useRoute()
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
        // исправить
        // if (firstId && select.options.length > 0) {
        //   select.value = firstId;
        // }
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
        //если я не первый то нуно вызвать join на /frontend/pkcs7/join
      verify(pkcs7wtst, false, data64, function(result){
        console.log(result)//выкинуть назад router
      }, true);  // !! set isDataBase64Encoded = TRUE
    });
  }, (e, r) => {console.log('Ошибка при подписании')}, false, true); // !! set isDataBase64Encoded = TRUE
};

const attachTimestamp = function (pkcs7, callback){
  const E_IMZO_URL = 'http://127.0.0.1:9999'
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
  const BACK_URL = 'http://127.0.0.1:8000/my_app/verify/'
  microAjax(BACK_URL, function (data, s) {
    if(s.status != 200){
      console.log(s.status, ' - ', s.statusText);
      return;
    }
    var result;
    try {
      var data = JSON.parse(data);
      if (data.status != 1) {

        return;
      }
      result = data.pkcs7Info;
    } catch (e) {
      }
    callback(result);

  }, 'pkcs7wtst=' + encodeURIComponent(pkcs7wtst) + (detached ? '&data64=' + encodeURIComponent(data64) : ""));
}

function cbChanged(event) {
  // currentKey.value = event.target.value;
  let option = document.getElementById(event.target.value);
  let vo = JSON.parse(option.getAttribute('vo'))
  console.log("🔑 Выбранные днные:", vo);
  EIMZOClient.loadKey(vo, function(id){
    keyId.value = id;

  }, (e, r)=> {console.log('error')});
}

const document = useDocumentStore()
const authStore = useAuthStore()

onMounted(()=>{
  document.loadDocument({slug: route.params.slug})
})

async function fetchFileAsBase64() {
  try {
    const url = authStore.get_server_domain + document.documentItem.file;
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

watch(() => document.documentItem, (newValue) => {
  console.log(authStore.get_server_domain+document.documentItem.file)

  fetchFileAsBase64()

  // if (new_file) {
  //   const reader = new FileReader(); // Create a new FileReader
  //
  //   // When the file is loaded, convert to Base64 and log it
  //   reader.onload = function (e) {
  //
  //     const base64Content = e.target.result.split(',')[1]; // Extract Base64 part
  //     fileBase64.value = base64Content;
  //   };
  //
  //   // Read the file as a data URL (Base64 encoding)
  //   reader.readAsDataURL(file);
  // }
})
</script>

<template>
  <div class="flex flex-col gap-5">
    <div>
      <p>
        Выберите ключ:
      </p>
      <select name="key" @change="cbChanged($event)"></select>
      <form id="myForm" @submit.prevent="handleSubmit">
      <input
          type="file"
          @change="handleFileChange"
          class="w-full dark:bg-gray-700 outline-none pl-10 h-[50px]"
      />
        <button type="submit">CHECK</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>