<template>
  <div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8">
    <img src="/icons/notification-form.svg" alt="notification-form">
    <h2 class="dark:text-white">{{ $t('Уведомления о заданиях') }}</h2>
  </div>
  <div class="flex flex-col gap-4 max-h-[230px] overflow-y-auto">
    <TheNotificationContent
        v-for="item in notification.get_notification"
        :item="item"
    />
  </div>
</template>

<script setup>
import TheNotificationContent from "~/components/Tasks/TaskUI/TheNotificationContent.vue";
import {useNotification} from "~/stores/notification";

const notification = useNotification()
</script>

<style lang="scss" scoped>

</style>