<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a
          :href="url"
          class="flex h-full items-center text-xl"
          >{{ company }}</a
        >
        <nav class="h-full">
          <ul class="flex h-full list-none space-x-9">
            <li
              v-for="menuItem in menuItems"
              v-bind:key="menuItem"
              class="ml-9 h-full"
            >
              <a
                href=""
                class="flex h-full items-center py-2.5"
                >{{ menuItem }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'JCurrie Careers',
      url: 'https://careers.google.com',
      menuItems: [
        'Teams',
        'Locations',
        'Life at JCurrie Careers',
        'How we hire',
        'Students',
        'Jobs',
      ],
    };
  },
};
</script>
