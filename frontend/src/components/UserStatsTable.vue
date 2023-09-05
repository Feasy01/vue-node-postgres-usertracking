<script setup>
const props = defineProps(['numberOfUsersAccessedPage', 'numberOfUsersSeenAvatar']
);
</script>


<template>
    <div class="wrapper">
        <h2>User Access Data</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col"><b>Number Of Users</b></th>
                    <th scope="col"><b>% Of Users seen the avatar</b></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ numberOfUsersAccessedPage }}</td>
                    <td>{{ Math.round((numberOfUsersSeenAvatar / numberOfUsersAccessedPage) * 100) }}%</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
</style>
  