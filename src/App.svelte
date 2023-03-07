<script lang="ts">
  import {onMount} from "svelte";
  import Icon from "./lib/Icon.svelte";
  import {note, clearNote} from "./stores/note";
  import {voiceStore, record} from "./stores/voice-store";
  import {recorder} from "./utils/recorder";

  onMount(async () => {
    await recorder();
  });

  $: recording = $voiceStore.recording;
  $: recordingStarted = false;

  $: if (recording) {
    recordingStarted = true;
    document.dispatchEvent(new CustomEvent("recording:start"));
  }

  $: if (!recording && recordingStarted) {
    document.dispatchEvent(new CustomEvent("recording:stop"));
    recordingStarted = false;
  }
</script>

<main class="flex justify-center items-center gap-2">
  <label for="voice-search">Search</label>
  <input
    name="voice-search"
    type="text"
    class="rounded py-1 px-2 w-96"
    value={$note}
  />
  <Icon
    on:click={record}
    name="record"
    fill={recording ? "red" : "white"}
    classes="h-8 w-8 rounded p-1 cursor-pointer  hover:fill-black hover:bg-white/60"
  />
  <button class="py-1 px-2" on:click={clearNote}>clear</button>
</main>
