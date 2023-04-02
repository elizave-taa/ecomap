import {defineStore} from "pinia";
import axios from "axios";

export const useUserStore = defineStore('user', {
    state: () => ({ user: null }),
    actions: {
        fetchUser() {
            axios.get("http://80.90.190.25:5243/api/profile").then((response) =>
            { this.user = response.data }).catch((error) => {
                console.log(error.response.data);  });
        }
    }
})