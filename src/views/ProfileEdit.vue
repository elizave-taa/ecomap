<script>
import { BContainer, BRow, BCol, BFormGroup, BFormInput, BFormSelect, BModal } from "bootstrap-vue"
import ButtonGeneral from "../components/ButtonGeneral.vue"
import axios from "axios";
import {getCookie} from "../helpers/cookie.js";
import {useUserStore} from "../PiniaStore.js";
export default {
    components: {
        BContainer,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        BFormSelect,
        ButtonGeneral,
        BModal,
    },

    data() {
        return {
            userStore: useUserStore(),
            name: null,
            nickname: null,
            email: null,
            lastname: null,
            age: null,
            gender: null,
            genders: [
                { value: 1, text: 'Мужской' },
                { value: 2, text: 'Женский' },
                { value: 3, text: 'Другой' }
            ],
            wasError: false,
        }
    },

    created() {
        if (!getCookie('jwt'))
            this.$router.push({name: 'welcome-page'})
    },

    mounted() {
        this.fillData();
    },

    computed: {
        profileData() {
            return {
                name: this.name,
                nickname: this.nickname,
                email: this.email,
                surname: this.lastname,
                age: this.age,
                gender: this.gender,
                password: this.password,
                confirmPassword: this.confirmPassword,
            }
        },
        validateMail() {
            if (this.email === null) return null;

            return this.isMail(this.email);
        },
        invalidMailFeedback() {
            if (this.email === null) return "";
            const isMail = this.isMail(this.email);

            if (!isMail) {
                return "Некорректный адрес почты"
            }

            return "Почта обязательна для заполнения"
        },

        invalidAgeFeedback() {
            if (this.age < 0) return "Возраст некорректный";

            return "Возраст обязателен для заполнения";
        },

        validatePassword() {
            if (this.password === null) return null;

            return this.password.length >= 6;
        },

        invalidPasswordFeedback() {
            if (this.password === null) return "";

            if (this.password.length < 6) return "Минимум 6 символов";

            return "Пароль обязателен для заполнения"
        }
    },
    methods: {
        fillData() {
            this.name = this.userStore.user?.name;
            this.nickname = this.userStore.user?.nickname;
            this.email = this.userStore.user?.email;
            this.lastname = this.userStore.user?.surname;
            this.age = this.userStore.user?.age;
            this.gender = this.userStore.user?.gender;
        },

        showModal1() {
            this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
        },
        checkValidation() {
            let isBroken = false;
            if (!this.name) { this.name = ""; isBroken = true; }
            if (!this.lastname) { this.lastname = ""; isBroken = true; }
            if (this.age === null || this.age < 0) { this.age = ""; isBroken = true; }
            if (!this.nickname) { this.nickname = ""; isBroken = true; }
            if (!this.email || !this.isMail(this.email)) { this.email = ""; isBroken = true; }
            if (!this.gender || ![1,2,3].includes(this.gender)) { this.gender = ""; isBroken = true; }

            return !isBroken;
        },
        handleEditing() {
            if (!this.checkValidation()) return;

            axios.put("profile", { params: this.profileData, ...this.profileData }).then((response) => {
                this.showModal1();
// this.$router.push({name: 'welcome-page'})
            });
        },
        isMail(email) {
            return Boolean(String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ));
        },
    }
}
</script>

<template>
    <div class="rp-wrapper">
        <b-container>
            <div class="reg-page">
                <div class="top-menu">
                    <button-general class="back-btn" @click="$router.go(-1)">
                        Назад
                    </button-general>
                    <!-- <div class="need-block">-->
                    <!-- <span class="need-circle"></span>-->
                    <!-- <p>Необязательные поля</p>-->
                    <!-- </div>-->
                </div>
                <div class="reg-form">
                    <b-container>
                        <b-row>
                            <b-col class="reg-col">
                                <b-form-group
                                        class="reg-group"
                                        label="Имя"
                                        label-for="input-name"
                                        :state="name === null ? null : name.length > 0"
                                        invalid-feedback="Имя обязательно для заполнения"
                                >
                                    <b-form-input class="reg-input" id="input-name" v-model="name"/>
                                </b-form-group>
                                <b-form-group
                                        class="reg-group"
                                        label="Никнейм"
                                        label-for="input-nickname"
                                        :state="nickname === null ? null : nickname.length > 0"
                                        invalid-feedback="Никнейм обязателен для заполнения"
                                >
                                    <b-form-input class="reg-input" id="input-nickname" v-model="nickname"/>
                                </b-form-group>
                                <b-form-group
                                        class="reg-group"
                                        label="Почта"
                                        label-for="input-email"
                                        :state="validateMail"
                                        :invalid-feedback="invalidMailFeedback"
                                >
                                    <b-form-input class="reg-input" id="input-email" v-model="email" type="email"/>
                                </b-form-group>

                            </b-col>
                            <b-col class="reg-col">
                                <b-form-group
                                        class="reg-group"
                                        label-for="input-lastname"
                                        :state="lastname === null ? null : lastname.length > 0"
                                        invalid-feedback="Фамилия обязательна для заполнения"
                                >
                                    <template #label>
                                        <div class="custom-label">
                                            Фамилия
                                            <!-- <span class="need-circle"></span>-->
                                        </div>
                                    </template>
                                    <b-form-input class="reg-input" id="input-lastname" v-model="lastname"/>
                                </b-form-group>
                                <b-form-group
                                        class="reg-group"
                                        label-for="input-age"
                                        :state="age === null ? null : age > 0"
                                        :invalid-feedback="invalidAgeFeedback"
                                >
                                    <template #label>
                                        <div class="custom-label">
                                            Возраст
                                            <!-- <span class="need-circle"></span>-->
                                        </div>
                                    </template>
                                    <b-form-input class="reg-input" id="input-age" v-model="age" type="number"/>
                                </b-form-group>
                                <b-form-group
                                        class="reg-group"
                                        label-for="input-gender"
                                        :state="gender === null ? null : [1,2,3].includes(gender)"
                                        invalid-feedback="Пол обязателен для заполнения"
                                >
                                    <template #label>
                                        <div class="custom-label">
                                            Пол
                                            <!-- <span class="need-circle"></span>-->
                                        </div>
                                    </template>
                                    <b-form-select class="reg-input" v-model="gender" :options="genders" id="input-gender"/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row class="mt-5">
                            <b-col class="reg-col">
                            </b-col>
                            <b-col class="reg-col to-right-bottom">
                                <button-general class="reg-button" @click="handleEditing">
                                    Сохранить
                                </button-general>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
            </div>
        </b-container>
    </div>
    <b-modal id="modal-1">
        Успешное редактирование профиля
    </b-modal>
</template>

<style scoped>
.rp-wrapper {
    background-image: url('/src/assets/map.png');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    padding: 67px;
}

.reg-page {
    font-family: Inter,sans-serif;
}

.reg-form {
    background-color: rgba(var(--c-primary-rgb), 0.75);
    border-radius: 8px;
    padding: 35px 0;
}

.reg-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.reg-group:deep(label) {
    color: #fff;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 35px;
}

.reg-group:deep(label + div) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.reg-group:deep(.invalid-feedback) {
    text-align: right;
}

.reg-input {
    background: none !important;
    border-radius: 6px;
    color: #fff !important;
    font-size: 14px;
    width: 200px;
    margin-left: 20px;
}

.reg-input:deep(option) {
    background-color: rgb(var(--c-button-rgb));
}

.reg-input:deep(option):hover {
    background-color: rgb(var(--c-button-rgb));
}

.reg-col {
    padding: 0 50px;
}

.reg-button {
    padding: 12px 22px;
    font-size: 18px;
    font-weight: 500;
}

.to-right-bottom {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.top-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.need-circle {
    height: 20px;
    width: 20px;
    background-color: rgb(var(--c-primary-lightest-rgb));
    display: inline-block;
    border-radius: 20px;
}

.need-block {
    display: flex;
    align-items: center;
}

.need-block p {
    margin-bottom: 0;
    margin-left: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
}

.back-btn {
    font-size: 16px;
    padding: 6px 11px;
    line-height: 20px;
}

.custom-label {
    display: inline-flex;
    align-items: center;
    column-gap: 10px;
}

.reg-input[type="number"]::-webkit-outer-spin-button,
.reg-input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.reg-input[type="number"] {
    -moz-appearance: none;
    appearance: none;
}

.reg-input[type="number"]:hover,
.reg-input[type="number"]:focus {
    -moz-appearance: none;
    appearance: none;
}

.reg-input[type="number"]::-webkit-inner-spin-button,
.reg-input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
}

.mistake {
    font-size: 16px;
    color: #981111;
}

@media (max-width: 600px) {
    .reg-input {
        width: 160px;
    }

    .need-circle {
        width: 12px;
        height: 12px;
    }

    .reg-button {
        margin-top: 25px;
        font-size: 14px;
        padding: 8px;
    }
}

@media (max-width: 991px) {
    .reg-button {
        margin-top: 25px;
    }
}

@media (max-width: 558px) {
    .reg-input {
        margin-left: 0;
        width: 100%;
    }

    .reg-col {
        width: 100%;
        flex-basis: 100%;
    }

    .need-circle {
        width: 12px;
        height: 12px;
    }

    .reg-button {
        margin-top: 25px;
        font-size: 14px;
        padding: 8px;
    }

    .reg-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    .back-btn {
        font-size: 13px;
    }

    .need-block {
        font-size: 13px;
    }

    .reg-form {
        padding: 20px 0;
    }

    .rp-wrapper {
        padding: 60px 20px;
    }

    .reg-group:deep(label + div) {
        width: 100%;
    }
}
</style>