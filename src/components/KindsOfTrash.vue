<script>
import {BButton} from "bootstrap-vue"
import {BTooltip} from "bootstrap-vue"
export default {
  components: {BButton, BTooltip }
}
</script>


<template>
  <div class="icons">


    <b-button id="tooltip-target-1" class="btn glass">
      <img alt="стекло" class="logo" src="/src/assets/glass.svg" />
    </b-button>
    <b-tooltip target="tooltip-target-1" triggers="hover">
      Стекло
    </b-tooltip>

    <b-button id="tooltip-target-2" class="btn plastic">
      <img alt="Пластик" class="logo" src="/src/assets/plastic.svg" />
    </b-button>
    <b-tooltip target="tooltip-target-2" triggers="hover">
      Пластик
    </b-tooltip>

    <b-button id="tooltip-target-3" class="btn paper">
      <img alt="бумага" class="logo" src="/src/assets/paper.svg" />
    </b-button>
    <b-tooltip target="tooltip-target-3" triggers="hover">
      Бумага
    </b-tooltip>

    <b-button id="tooltip-target-4" class="btn battery">
      <img alt="батареи" class="logo" src="/src/assets/battery.svg" />
    </b-button>
    <b-tooltip target="tooltip-target-4" triggers="hover">
      Батареи
    </b-tooltip>
  </div>

  <div class="icons">


    <b-button id="tooltip-target-5" class="btn clothes">
      <img alt="одежда" class="logo" src="/src/assets/clothes.svg" />
    </b-button>
    <b-tooltip target="tooltip-target-5" triggers="hover">
      Одежда
    </b-tooltip>

    <b-button id="tooltip-target-6" class="btn metal">
      <svg width="26" height="26" viewBox="0 0 48 48">
        <mask id="svgIDa"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
          <path d="M14 4v40M8 5v10c0 5 6 5 6 5s6 0 6-5V5m14 15v24"/><path fill="#00000" d="M40 12c0 4.418-2.686 8-6 8s-6-3.582-6-8s2.686-8 6-8s6 3.582 6 8Z"/></g>
        </mask><path fill="#00000" d="M0 0h48v48H0z" mask="url(#svgIDa)"/></svg>
    </b-button>
    <b-tooltip target="tooltip-target-6" triggers="hover">
      Металл
    </b-tooltip>

    <b-button id="tooltip-target-7" class="btn dangerous">
      <svg width="28" height="28" viewBox="0 0 24 24">
        <path fill="#00000"
        d="M2.725 21q-.575 0-.85-.5t0-1l9.25-16Q11.4 3 12 3t.875.5l9.25 16q.275.5 0 1t-.85.5ZM12 10q-.425 0-.712.287Q11 10.575 11 11v3q0 .425.288.712q.287.288.712.288t.713-.288Q13 14.425 13 14v-3q0-.425-.287-.713Q12.425 10 12 10Zm0 8q.425 0 .713-.288Q13 17.425 13 17t-.287-.712Q12.425 16 12 16t-.712.288Q11 16.575 11 17t.288.712Q11.575 18 12 18Z"/></svg>
    </b-button>
    <b-tooltip target="tooltip-target-7" triggers="hover">
      Опасные отходы
    </b-tooltip>

    <b-button id="tooltip-target-8" class="btn lamps">
      <svg width="32" height="32" viewBox="0 0 32 32">
        <path fill="#00000"
              d="M15.5 2.833a7 7 0 0 0-7 7c0 3.86 3.945 4.937 4.223 9.5h5.553c.278-4.563 4.224-5.64 4.224-9.5a7 7 0 0 0-7-7zm0 25.333c1.894 0 2.483-1.027 2.667-1.666h-5.334c.184.64.773 1.666 2.667 1.666zm-2.75-2.668h5.5v-5.164h-5.5v5.164z"/>
      </svg>
    </b-button>
    <b-tooltip target="tooltip-target-8" triggers="hover">
      Лампочки
    </b-tooltip>
  </div>

  <div class="icons">


    <b-button id="tooltip-target-9" class="btn tetra">
      <svg width="30" height="30" viewBox="0 0 512 512">
        <path fill="#000000" d="m302.958 20.019l-93.916 46.564v35.404c31.305-15.522 62.61-31.047 93.916-46.568zm6.53 52.252l-95.4 47.3l63.036 78.137l95.397-47.303zm-111.915 55.492l-33.732 16.724h47.224zm-22.119 34.722l71.615 26.633l-21.484-26.633zm-41.021 3.948v276.752l131.22 48.796v-276.75zm243.134 1.56c-31.306 15.521-62.61 31.044-93.916 46.567v275.863l93.916-46.567zM176.501 272.466s-15.3 15.085-9.889 24.203c4.167 7.02 21.889 5.418 21.889 5.418l15.549 3.848s17.72 10.374 21.887 5.416c5.41-6.44-9.887-29.098-9.887-29.098s35.91 33.492 29.662 47.318c-3.143 6.955-24.719-2.117-24.719-2.117s5.495 7.21 4.944 10.549c-1.001 6.062-13.774 9.916-13.774 9.916s1.111 21.24-6 25.168c-5.147 2.843-14.628.497-19.775-4.895c-7.111-7.448-6-28.136-6-28.136s-12.775-10.177-13.776-16.735c-.55-3.611 4.944-8.103 4.944-8.103s-21.575-1.607-24.717-10.117c-6.247-16.919 29.662-32.635 29.662-32.635z"/>
      </svg>
    </b-button>
    <b-tooltip target="tooltip-target-9" triggers="hover">
      Тетра-Пак
    </b-tooltip>

    <b-button id="tooltip-target-10" class="btn technique">
      <svg width="28" height="28" viewBox="0 0 24 24">
        <path fill="#00000" d="M14.83 11.17a4.008 4.008 0 0 1 0 5.66a4.008 4.008 0 0 1-5.66 0l5.66-5.66M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m1 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m3 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m2 4a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6Z"/>
      </svg>
    </b-button>
    <b-tooltip target="tooltip-target-10" triggers="hover">
      Бытовая техника
    </b-tooltip>

    <b-button id="tooltip-target-11" class="btn lids">
      <svg width="28" height="28" viewBox="0 0 32 32">
        <path fill="#00000" d="M8.562 15.256A21.159 21.159 0 0 0 16 16.449a21.159 21.159 0 0 0 7.438-1.194c1.864-.727 2.525-1.535 2.525-2V9.7a10.357 10.357 0 0 1-2.084 1.076A22.293 22.293 0 0 1 16 12.078a22.36 22.36 0 0 1-7.879-1.3A10.28 10.28 0 0 1 6.037 9.7v3.55c0 .474.663 1.278 2.525 2.006Zm0 6.705a15.611 15.611 0 0 0 2.6.741a24.9 24.9 0 0 0 4.838.453a24.9 24.9 0 0 0 4.838-.452a15.614 15.614 0 0 0 2.6-.741c1.864-.727 2.525-1.535 2.525-2v-3.39a10.706 10.706 0 0 1-1.692.825A23.49 23.49 0 0 1 16 18.74a23.49 23.49 0 0 1-8.271-1.348a10.829 10.829 0 0 1-1.692-.825v3.393c0 .466.663 1.271 2.525 2.001ZM16 30c5.5 0 9.963-1.744 9.963-3.894v-2.837a10.5 10.5 0 0 1-1.535.762l-.157.063A23.487 23.487 0 0 1 16 25.445a23.422 23.422 0 0 1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5 10.5 0 0 1-1.535-.762v2.837C6.037 28.256 10.5 30 16 30Z"/>
        <ellipse cx="16" cy="5.894" fill="#00000" rx="9.963" ry="3.894"/></svg>
    </b-button>
    <b-tooltip target="tooltip-target-11" triggers="hover">
      Пластиковые крышки
    </b-tooltip>

    <b-button id="tooltip-target-12" class="btn other">
      <svg width="32" height="32" viewBox="0 0 24 24">
        <path fill="#000000" d="M11.95 22q-1.25 0-2.125-.875T8.95 19v-1.8l-1.575.9q-1.05.6-2.25.313q-1.2-.288-1.85-1.413q-.625-1.1-.3-2.288q.325-1.187 1.4-1.812L5.95 12l-1.575-.9q-1.1-.625-1.412-1.825q-.313-1.2.312-2.275q.675-1.175 1.9-1.425q1.225-.25 2.2.325l1.575.9V5q0-1.25.875-2.125T11.95 2q1.25 0 2.125.875T14.95 5v1.8l1.55-.9q1.05-.6 2.25-.312q1.2.287 1.85 1.412q.625 1.1.3 2.287q-.325 1.188-1.4 1.813l-1.55.9l1.55.9q1.075.625 1.4 1.825q.325 1.2-.3 2.275q-.65 1.125-1.85 1.413q-1.2.287-2.25-.313l-1.55-.9V19q0 1.25-.875 2.125T11.95 22Zm4-11.15l2.55-1.475q.35-.2.462-.613q.113-.412-.087-.762q-.225-.4-.625-.488q-.4-.087-.75.113L13.95 9.7Zm-3-1.75V5q0-.425-.287-.713Q12.375 4 11.95 4t-.712.287q-.288.288-.288.713v2.95Zm-1 10.9q.425 0 .713-.288q.287-.287.287-.712v-4.1l-2 1.15V19q0 .425.288.712q.287.288.712.288Zm-5.575-3.625L13.95 12L6.375 7.625q-.35-.2-.75-.1T5 8q-.2.35-.1.75t.475.625L9.95 12l-4.575 2.625q-.35.2-.475.6q-.125.4.1.775q.225.4.625.487q.4.088.75-.112Zm11.125 0q.35.2.75.1t.625-.475q.2-.35.087-.75q-.112-.4-.462-.6l-2.55-1.5l-2 1.15Z"/></svg>
    </b-button>
    <b-tooltip target="tooltip-target-12" triggers="hover">
      Другое
    </b-tooltip>
  </div>
</template>

<style scoped>

.logo{
  width: 30px;
  height: 30px;
}

.icons{
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  width: 85%;
}

.btn {
  width: 45px;
  height: 45px;
  align-items: center;
  border-radius: 50%;
  padding: 5px;
}

.btn:focus{
  background-color: #888888!important;
}

.glass{
  background: radial-gradient(50% 50% at 50% 50%, rgba(61, 97, 68, 0) 0%, #668D6E 100%)!important;
  border: 2px solid #3D6144!important;
}

.glass:hover{
  box-shadow: 0 0 3px 1px #073d18;
}

.plastic{
  background: radial-gradient(50% 50% at 50% 50%, rgba(224, 174, 78, 0) 3.65%, #D3951A 100%)!important;
  border: 2px solid #AF7911!important;
}

.plastic:hover{
  box-shadow: 0 0 3px 1px #AF7911;
}

.glass:focus {
  background-color: transparent;
  border: transparent;
}

.paper{
  background: radial-gradient(50% 50% at 50% 50%, rgba(97, 61, 93, 0) 0%, #85668D 100%)!important;
  border: 2px solid #6B308F!important;
}

.paper:hover{
  box-shadow: 0 0 3px 1px #2b1862;
}

.battery{
  background: radial-gradient(50% 50% at 50% 50%, rgba(184, 124, 90, 0) 0%, #d58468 100%)!important;
  border: 2px solid #8c3f3f !important;
}

.battery:hover{
  box-shadow: 0 0 3px 1px #7a2d2d;
}

.clothes{
  background: radial-gradient(50% 50% at 50% 50%, rgba(196, 192, 105, 0) 0%, #966a07 100%)!important;
  border: 2px solid #c57b1e !important;
}

.clothes:hover{
  box-shadow: 0 0 3px 1px #3f2502;
}

.metal{
  background: radial-gradient(50% 50% at 50% 50%, rgba(61, 71, 97, 0) 0%, #667A8D 100%)!important;
  border: 2px solid #515891!important;
}

.metal:hover{
  box-shadow: 0 0 3px 1px #201e5d;
}

.dangerous{
  background: radial-gradient(50% 50% at 50% 50%, rgba(224, 32, 32, 0) 0%, #c72424 100%)!important;
  border: 2px solid #981111 !important;
}

.dangerous:hover{
  box-shadow: 0 0 3px 1px #7a2d2d;
}

.lamps{
  background: radial-gradient(50% 50% at 50% 50%, rgba(146, 146, 146, 0) 0%, #727070 100%)!important;
  border: 2px solid #595959 !important;
}

.lamps:hover{
  box-shadow: 0 0 3px 1px #3a3a3a;
}

.tetra{
  background: radial-gradient(50% 50% at 50% 50%, rgba(162, 222, 226, 0) 0%, #2EACB4 100%)!important;
  border: 2px solid #518591!important;
}

.tetra:hover{
  box-shadow: 0 0 3px 1px #00776e;
}

.technique{
  background: radial-gradient(50% 50% at 50% 50%, rgba(243, 145, 186, 0) 0%, #C75A8E 100%)!important;
  border: 2px solid #6A3E63!important;
}

.technique:hover{
  box-shadow: 0 0 3px 1px #7c025a;
}

.lids {
  background: radial-gradient(50% 50% at 50% 50%, rgba(128, 231, 48, 0) 0%, #53B805 100%)!important;
  border: 2px solid #539122!important;
}

.lids:hover{
  box-shadow: 0 0 3px 1px #085922;
}

.other{
  background: radial-gradient(50% 50% at 50% 50%, rgba(233, 237, 44, 0) 0%, #DADD37 100%)!important;
  border: 2px solid #D6C63D!important;
}

.other:hover {
  box-shadow: 0 0 3px 1px #a26d13;
}

</style>