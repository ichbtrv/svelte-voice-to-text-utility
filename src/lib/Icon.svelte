<script lang="ts">
  export let name: string;
  export let fill = 'black';
  export let classes = '';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg on:click xmlns="http://www.w3.org/2000/svg" {fill} class={classes}>
  <symbol id="folder" width="28" height="28" viewBox="0 0 24 24">
    <path
      d="M6.083 4c1.38 1.612 2.578 3 4.917 3h11v13h-20v-16h4.083zm.917-2h-7v20h24v-17h-13c-1.629 0-2.305-1.058-4-3z"
    />
  </symbol>

  <symbol id="save" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M13 3h2.996v5h-2.996v-5zm11 1v20h-24v-24h20l4 4zm-17 5h10v-7h-10v7zm15-4.171l-2.828-2.829h-.172v9h-14v-9h-3v20h20v-17.171z"
    />
  </symbol>

  <symbol id="play" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"
    />
  </symbol>

  <symbol id="record" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M12 2c1.103 0 2 .897 2 2v7c0 1.103-.897 2-2 2s-2-.897-2-2v-7c0-1.103.897-2 2-2zm0-2c-2.209 0-4 1.791-4 4v7c0 2.209 1.791 4 4 4s4-1.791 4-4v-7c0-2.209-1.791-4-4-4zm8 9v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13v-2h-2v2h-4v2h10v-2h-4z"
    />
  </symbol>

  <symbol id="stop" width="24" height="24" viewBox="0 0 24 24">
    <path d="M2 2h20v20h-20z" />
  </symbol>

  <symbol id="trash" width="28" height="30" viewBox="0 0 24 24">
    <g
      xmlns="http://www.w3.org/2000/svg"
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Trash">
        <rect
          id="Rectangle"
          fill-rule="nonzero"
          x="0"
          y="0"
          width="24"
          height="24"
        />
        <path
          d="M6,6 L6.96683,19.5356 C6.98552,19.7973 7.20324,20 7.46556,20 L16.5344,20 C16.7968,20 17.0145,19.7973 17.0332,19.5356 L18,6"
          id="Path"
          stroke="#0C0310"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="4"
          y1="6"
          x2="20"
          y2="6"
          id="Path"
          stroke="#0C0310"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="10"
          y1="10"
          x2="10"
          y2="16"
          id="Path"
          stroke="#0C0310"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="14"
          y1="10"
          x2="14"
          y2="16"
          id="Path"
          stroke="#0C0310"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M15,6 C15,4.34315 13.6569,3 12,3 C10.3431,3 9,4.34315 9,6"
          id="Path"
          stroke="#0C0310"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
    </g>
  </symbol>
  >

  <use href="#{name}" />
</svg>
