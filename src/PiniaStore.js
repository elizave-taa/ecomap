import {defineStore} from "pinia";
import axios from "axios";

export const useUserStore = defineStore('user', {
    state: () => ({ user: null }),
    actions: {
        fetchUser() {
            axios.get("profile").then((response) =>
            { this.user = response.data }).catch((error) => {
                console.log(error.response.data);  });
        }
    }
})