<script setup lang="ts">
const isDarkTheme = useDark();
const iframeRef = ref<HTMLIFrameElement | null>(null);

const base = import.meta.env.BASE_URL ?? '/';

const c = new URLSearchParams(window.location.search).get('c');

// Path to iframe content in /public
const parentUrl = window.location.origin + window.location.pathname;
let iframeSrc = `${base}visualsubnetcalc/index.html?parent=${parentUrl}`;
if (c) {
  iframeSrc += `&c=${c}`;
}

// Apply theme to iframe document
function applyIframeTheme() {
  const iframe = iframeRef.value;
  if (!iframe) {
    return;
  }

  const doc = iframe.contentDocument || iframe.contentWindow?.document;
  if (!doc) {
    return;
  }

  doc.documentElement.setAttribute(
    'data-bs-theme',
    isDarkTheme.value ? 'dark' : 'light',
  );
}

// Watch for theme changes
watch(isDarkTheme, () => {
  applyIframeTheme();
});

// Ensure iframe theme is applied after load
onMounted(() => {
  const iframe = iframeRef.value;
  if (!iframe) {
    return;
  }

  iframe.addEventListener('load', () => {
    applyIframeTheme();
  });
});
</script>

<template>
  <div>
    <iframe
      ref="iframeRef"
      :src="iframeSrc"
      style="width:100%; height:95vh;"
    />
  </div>
</template>
