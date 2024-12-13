<template>
    <h3 class="text-center">{{ formattedDate }}</h3>
</template>

<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue';
    const currentDate = ref(new Date());

    onMounted(() => {
    setInterval(() => {
            currentDate.value = new Date()
        }, 1000)
    })

    const formattedDate = computed(() => {
        const date = currentDate.value

        // Lấy giờ, phút, giây, ngày, tháng, năm
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')
        const seconds = String(date.getSeconds()).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0') // Tháng bắt đầu từ 0
        const year = date.getFullYear()

        return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`
    })
</script>

<style scoped lang="scss">
  h3 {
    margin-top: 10px;
    margin-bottom: 40px;
    color: green
  }
</style>